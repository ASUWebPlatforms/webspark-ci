import { Plugin } from "ckeditor5/src/core";
import { Widget, toWidget, toWidgetEditable } from "ckeditor5/src/widget";
import InsertWebsparkTableCommand from "./inserttablecommand";

// cSpell:ignore simplebox insertsimpleboxcommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with simpleBox as this model:
 * <websparkTable>
 *    <websparkTableText></websparkTableText>
 * </websparkTable>
 *
 * Which is converted for the browser/user as this markup
 * <a class="btn">
 *   <span class="text"></span>
 * </a>
 *
 * This file has the logic for defining the simpleBox model, and for how it is
 * converted to standard DOM markup.
 */
export default class WebsparkTableEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      "insertWebsparkTable",
      new InsertWebsparkTableCommand(this.editor)
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <websparkTable>
   *    <websparkTableText></websparkTableText>
   * </websparkTable>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register("websparkTable", {
      isObject: true,
      allowWhere: "$block",
      allowAttributes: ["tabletype"],
    });

    schema.register("websparkTableHtmlElement", {
      isLimit: true,
      allowIn: "websparkTable",
      allowContentOf: "$block",
    });

    schema.register("websparkTableCaption", {
      isLimit: true,
      allowIn: "websparkTableHtmlElement",
      allowContentOf: "$block",
    });
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const { conversion } = this.editor;

  
    conversion.for("upcast").elementToElement({
      model: "websparkTableCaption",
      view: {
        name: "caption",
      },
    });

    conversion.for("dataDowncast").elementToElement({
      model: "websparkTableCaption",
      view: {
        name: "caption",
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "websparkTableCaption",
      view: (_modelElement, { writer }) => {
        const paragraphElement = writer.createEditableElement("caption", {});

        return toWidgetEditable(paragraphElement, writer);
      },
    });

    conversion.for("upcast").elementToElement({
      model: "websparkTableHtmlElement",
      view: {
        name: "table",
        classes: "",
      },
      converterPriority: "high",
    });

    conversion.for("dataDowncast").elementToElement({
      model: "websparkTableHtmlElement",
      view: {
        name: "table",
        classes: "",
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "websparkTableHtmlElement",
      view: (_modelElement, { writer }) => {
        const table = writer.createEditableElement("table", {
          class: "",
        });
        return toWidgetEditable(table, writer);
      },
    });

    conversion.for("upcast").elementToElement({
      view: {
        name: "div",
        classes: [
          "uds-table",
          /^(uds-table-fixed|\s*)$/,
        ],
      },
      model: (viewElement, { writer }) => {
        return writer.createElement("websparkTable", {
          tabletype: viewElement.getAttribute("tabletype"),
        });
      },
    });

    conversion.for("dataDowncast").elementToElement({
      model: "websparkTable",
      view: (modelElement, { writer }) => {
        const tabletypeClass = (modelElement.getAttribute("tabletype") === 'fixed') ? 'uds-table-fixed' : '';
        console.log('tabletypeClass1',tabletypeClass)
        return writer.createContainerElement("div", {
         class: `uds-table ${tabletypeClass}`,
         tabletype: modelElement.getAttribute("tabletype"),
        });
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "websparkTable",
      view: (modelElement, { writer }) => {
        const tabletypeClass = modelElement.getAttribute("tabletype") === 'fixed' ? 'uds-table-fixed' : '';
        const div = writer.createContainerElement("div", {
          class: `uds-table ${tabletypeClass}`,
        });

        return toWidget(div, writer, { label: "Webspark Table" });
      },
    });
     
  }
}
