/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

import { Command } from "ckeditor5/src/core";
export default class WebsparkMediaAlterCommand extends Command {
  /**
     * The command value: `false` if there is no `alt` attribute, otherwise the value of the `alt` attribute.
     /**
     * @inheritdoc
     */
  refresh() {
    const drupalMediaElement = this._getClosestSelectedDrupalMediaElement(
      this.editor.model.document.selection
    );

    this.isEnabled =
      !!drupalMediaElement &&
      drupalMediaElement.getAttribute("drupalMediaEntityType") &&
      drupalMediaElement.getAttribute("drupalMediaEntityType") === "media" &&
      drupalMediaElement.getAttribute("drupalMediaEntityType") !==
        "METADATA_ERROR";
    if (
      this.isEnabled &&
      drupalMediaElement.getAttribute("drupalMediaType") === "remote_video"
    ) {
      this.value = drupalMediaElement._setAttribute("dataInlineStyle", "w100");
    } else {
      this.value = false;
    }
  }

  /**
   * Executes the command.
   *
   * @param {Object} options
   *   An options object.
   * @param {String} options.newValue The new value of the `dataInlineStyle` attribute to set.
   */
  execute(options) {
    const { model } = this.editor;
    const drupalMediaElement = this._getClosestSelectedDrupalMediaElement(
      model.document.selection
    );

    options.newValue = options.padding.trim();
    model.change((writer) => {
      if (options.newValue.length > 0) {
        writer.setAttribute(
          "dataInlineStyle",
          options.newValue,
          drupalMediaElement
        );
      } else {
        writer.removeAttribute("dataInlineStyle", drupalMediaElement);
      }
    });
  }

  _getClosestSelectedDrupalMediaElement(selection) {
    const selectedElement = selection.getSelectedElement();
    return this._isDrupalMedia(selectedElement)
      ? selectedElement
      : selection.getFirstPosition().findAncestor("drupalMedia");
  }

  _isDrupalMedia(modelElement) {
    return !!modelElement && modelElement.is("element", "drupalMedia");
  }
}
