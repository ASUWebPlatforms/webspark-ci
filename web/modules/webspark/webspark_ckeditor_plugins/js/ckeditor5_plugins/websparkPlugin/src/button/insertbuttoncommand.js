/**
 * @file defines InsertWebsparkButtonCommand, which is executed when the websparkButton
 * form is submitted.
 */

import { Command } from "ckeditor5/src/core";
export default class InsertWebsparkButtonCommand extends Command {
  execute({ href, text, styles, target, size }) {
    const { model } = this.editor;

    model.change((writer) => {
      const websparkButton = writer.createElement("websparkButton", {
        text,
        href,
        target,
        styles,
        size,
      });
      const websparkButtonText = writer.createElement("websparkButtonText");
      const textNode = writer.createText(text);

      writer.append(textNode, websparkButtonText);
      writer.append(websparkButtonText, websparkButton);

      model.insertContent(websparkButton);
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // websparkButton is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "websparkButton"
    );

    // If the cursor is not in a location where a simpleBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;

    const selectedElement = selection.getSelectedElement();

    if (selectedElement?.name === "websparkButton") {
      const text = selectedElement?.getChild(0)?.getChild(0)?._data;

      model.change((writer) => {
        writer.setAttribute("text", text, selectedElement);
      });

      this.value = Object.fromEntries(selectedElement.getAttributes());
    } else {
      this.value = null;
    }
  }
}
