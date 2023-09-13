/**
 * @file defines InsertWebsparkTableCommand, which is executed when the websparkTable
 * form is submitted.
 */

import { Command } from "ckeditor5/src/core";
import TableUtils from "@ckeditor/ckeditor5-table/src/tableutils";
import { TableToolbar } from "@ckeditor/ckeditor5-table";

export default class InsertWebsparkTableCommand extends Command {
  execute({ rows, cols, headers, tabletype, caption }) {
    const { model } = this.editor;
    let rowsTable = parseInt(rows, 10) || 1;
    let colTables = parseInt(cols, 10) || 1;
    let headersTable = headers;
    let captionTable = caption || "";
    const tableUtils = this.editor.plugins.get("TableUtils");
    const selection = this.editor.model.document.selection;
    model.change((writer) => {
      const insertAbove = false;
      const affectedTableCells =
        tableUtils.getSelectionAffectedTableCells(selection);
    
      const isHeadingColumns = headersTable !== "none" ? 1 : 0;
      const table = tableUtils.createTable(writer, {
        rows: 1,
        headingColums: isHeadingColumns,
        headingRows: isHeadingColumns,
        columns: 5,
      });
      
      model.insertObject(table, null, null, { findOptimalPosition: "auto" });
      // Placing the cursor on the first element.
      writer.setSelection(
        writer.createPositionAt(table.getNodeByPath([0, 0, 0]), 0)
      );
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
