/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

import { Plugin } from "ckeditor5/src/core";
import WebsparkMediaAlterCommand from "./websparkmediaaltercommand";

export default class WebsparkMediaAlterEditing extends Plugin {
  /**
   * @inheritdoc
   */
  static get pluginName() {
    return "WebsparkMediaAlterEditing";
  }

  constructor(editor) {
    super(editor);
    this.attrs = {
      dataInlineStyle: "data-inline-style",
    };
    this.converterAttributes = ["dataInlineStyle"];
  }

  init() {
    const schema = this.editor.model.schema;
    const conversion = this.editor.conversion;

    if (schema.isRegistered("drupalMedia")) {
      schema.extend("drupalMedia", {
        allowAttributes: ["dataInlineStyle"],
      });
    }

    // Set attributeToAttribute conversion for all supported attributes.
    Object.keys(this.attrs).forEach((modelKey) => {
      const attributeMapping = {
        model: {
          key: modelKey,
          name: "drupalMedia",
        },
        view: {
          name: "drupal-media",
          key: this.attrs[modelKey],
        },
      };
      conversion.for("upcast").attributeToAttribute(attributeMapping);
      conversion.for("downcast").attributeToAttribute(attributeMapping);
    });
    this.editor.commands.add(
      "addInlineStyle",
      new WebsparkMediaAlterCommand(this.editor)
    );
  }

  _defineConverters() {
    const conversion = this.editor.conversion;
    const metadataRepository = this.editor.plugins.get(
      "DrupalMediaMetadataRepository"
    );
    conversion.for("editingDowncast").add((dispatcher) => {
      const converter = (event, data, conversionApi) => {
        const viewWriter = conversionApi.writer;
        const modelElement = data.item;
        const container = conversionApi.mapper.toViewElement(data.item);

        container._setStyle("width", "100%");
        container._setStyle("max-width", "100%");
      };

      // List all attributes that should trigger re-rendering of the
      // preview.
      this.converterAttributes.forEach((attribute) => {
        dispatcher.on(`attribute:${attribute}:drupalMedia`, converter);
      });

      return dispatcher;
    });
  }

  _getPreviewContainer(children) {
    // eslint-disable-next-line no-restricted-syntax
    for (const child of children) {
      if (child.hasAttribute("data-drupal-media-preview")) {
        return child;
      }

      if (child.childCount) {
        const recursive = _getPreviewContainer(child.getChildren());
        // Return only if preview container was found within this element's
        // children.
        if (recursive) {
          return recursive;
        }
      }
    }

    return null;
  }

  async _fetchPreview(modelElement) {
    const query = {
      text: this._renderElement(modelElement),
      uuid: modelElement.getAttribute("drupalMediaEntityUuid"),
    };

    const response = await fetch(
      `${this.previewUrl}?${new URLSearchParams(query)}`,
      {
        headers: {
          "X-Drupal-MediaPreview-CSRF-Token":
            this.editor.config.get("drupalMedia").previewCsrfToken,
        },
      }
    );
    if (response.ok) {
      const label = response.headers.get("drupal-media-label");
      const preview = await response.text();
      return { label, preview };
    }

    return { label: this.labelError, preview: this.themeError };
  }
}
