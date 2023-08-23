/**
 * @file defines InsertWebsparkLeadCommand, which is executed when the websparkLead
 * toolbar button is pressed.
 */
// cSpell:ignore websparkleadediting

import { Command } from "ckeditor5/src/core";

export default class InsertWebsparkLeadCommand extends Command {
  
  execute(option) {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <websparkLeadArea>*</websparkLeadArea> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createWebsparkLeadArea(writer));
    });
   // const horizontalLine = writer.createElement('hr');
 //   writer.setAttribute('class', 'custom-horizontal-line', horizontalLine); // Hardcoded class
  //  writer.insert(horizontalLine, editor.model.document.selection.getFirstPosition());
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // websparkLead is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "$block"
    );

    // If the cursor is not in a location where a websparkLead can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createWebsparkLeadArea(writer) {
  // Create instances of the three elements registered with the editor in
  // websparkleadediting.js.
  const websparkLead = writer.createElement("websparkLead");
  writer.setAttribute('class', 'lead', websparkLead);
  // Return the element to be added to the editor.
  return websparkLead;
}
