/**
 * @file defines InsertWebsparkTableCommand, which is executed when the websparkTable
 * form is submitted.
 */

import { Command } from "ckeditor5/src/core";
export default class InsertWebsparkTableCommand extends Command {
  execute({ rows, cols, headers, tabletype, caption }) {
    const { model } = this.editor;
    let rowsTable = parseInt(rows, 10) || 1;
    let colTables = parseInt(cols, 10) || 1;
    let headersTable = headers;
    let captionTable = caption || '';

    model.change((writer) => {
      const websparkTable = writer.createElement("websparkTable", {tabletype});
      const websparkTableHtmlElement = writer.createElement("websparkTableHtmlElement");
      
      if (captionTable.length > 0){
        const textNode = writer.createText(captionTable);
        const websparkTableCaption = writer.createElement("websparkTableCaption");
        writer.append(textNode, websparkTableCaption);
        writer.append(websparkTableCaption, websparkTableHtmlElement);
      }
      writer.append(websparkTableHtmlElement, websparkTable);
      model.insertContent(websparkTable);
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // websparkTable is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "websparkTable"
    );

    // If the cursor is not in a location where a simpleBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;

    const selectedElement = selection.getSelectedElement();

    if (selectedElement?.name === "websparkTable") {
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
