/**
 * @file defines InsertWebsparkHighlitedHeadingCommand, which is executed when the websparkHighlitedHeading
 * form is submitted.
 */

import { Command } from "ckeditor5/src/core";
export default class InsertWebsparkHighlitedHeadingCommand extends Command {
  execute({ text, styles, heading }) {
    const { model } = this.editor;
    model.change((writer) => {
      const websparkHighlitedHeading = writer.createElement(
        "websparkHighlitedHeading"
      );
      const websparkHighlitedHeadingHelement = writer.createElement(
        "websparkHighlitedHeadingHelement_" + heading
      );
      const websparkHighlitedHeadingText = writer.createElement(
        "websparkHighlitedHeadingText_" + heading,
        { heading, styles }
      );
      const textNode = writer.createText(text);

      writer.append(textNode, websparkHighlitedHeadingText);
      writer.append(
        websparkHighlitedHeadingText,
        websparkHighlitedHeadingHelement
      );
      writer.append(websparkHighlitedHeadingHelement, websparkHighlitedHeading);

      model.insertContent(websparkHighlitedHeading);
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // websparkHighlitedHeading is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "websparkHighlitedHeading"
    );

    // If the cursor is not in a location where a simpleBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;

    const selectedElement = selection.getSelectedElement();

    if (selectedElement?.name === "websparkHighlitedHeading") {
      const span = selectedElement.getChild(0)?.getChild(0);

      this.value = {
        ...Object.fromEntries(span.getAttributes()),
        text: span.getChild(0)._data,
        heading: span.name.split("_")[1],
      };
    } else {
      this.value = null;
    }
  }
}
