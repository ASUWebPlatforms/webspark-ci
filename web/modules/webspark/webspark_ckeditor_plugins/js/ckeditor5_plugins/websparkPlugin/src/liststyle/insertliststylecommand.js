/**
 * @file defines InsertWebsparkListStyleCommand.
 */
import { Command } from "ckeditor5/src/core";
import { Collection, first, toMap } from "ckeditor5/src/utils";

export default class InsertWebsparkListStyleCommand extends Command {
  /**
   * Executes an action on selected blocks in the editor.
   *
   * @param {Object} options - The options for executing the action.
   * @param {string} options.styleClass - The CSS class to be applied to the selected blocks.
   */
  execute({ styleClass }) {
    const model = this.editor.model;
    const selection = model.document.selection;
    const document = model.document;

    let currentNode = first(
      this.editor.model.document.selection.getSelectedBlocks()
    );
    const elementsBelow = [];
    model.change((writer) => {
      this._getSibling(currentNode, elementsBelow, "backward");
      this._getSibling(currentNode, elementsBelow, "forward");
      elementsBelow.forEach((element) => {
        writer.setAttribute(
          "htmlListAttributes",
          { classes: styleClass },
          element
        );
      });
    });
  }

  /**
   * Retrieves sibling elements in a specified direction within the same list type.
   *
   * @param {Element} currentNode - The current element to start from.
   * @param {Array} elementsBelow - An array to store the retrieved sibling elements.
   * @param {string} direction - The direction to search for siblings ('forward' or 'backward').
   * @private
   */
  _getSibling(currentNode, elementsBelow, direction) {
    const listType = currentNode ? currentNode.getAttribute("listType") : "";
    if (direction === "forward") {
      while (currentNode && currentNode.getAttribute("listType") === listType) {
        if (!elementsBelow.includes(currentNode)) {
          elementsBelow.push(currentNode);
        }
        currentNode = currentNode.nextSibling;
      }
    } else {
      while (currentNode && currentNode.getAttribute("listType") === listType) {
        if (!elementsBelow.includes(currentNode)) {
          elementsBelow.push(currentNode);
        }
        currentNode = currentNode.previousSibling;
      }
    }
  }

  /**
   * Refreshes the state of the action.
   * Updates the isEnabled property and captures attributes from sibling elements.
   */
  refresh() {
    this.isEnabled = this._checkEnabled();
    let currentNode = first(
      this.editor.model.document.selection.getSelectedBlocks()
    );

    const elementsBelow = [];
    this._getSibling(currentNode, elementsBelow, "backward");
    this._getSibling(currentNode, elementsBelow, "forward");
    elementsBelow.forEach((element) => {
      this.value = Object.fromEntries(element.getAttributes());
    });
  }

  /**
   * Checks whether the command can be enabled in the current context.
   *
   * @returns Whether the command should be enabled.
   */
  _checkEnabled() {
    const editor = this.editor;

    const numberedList = editor.commands.get("numberedList");
    const bulletedList = editor.commands.get("bulletedList");

    return numberedList.isEnabled || bulletedList.isEnabled;
  }
}
