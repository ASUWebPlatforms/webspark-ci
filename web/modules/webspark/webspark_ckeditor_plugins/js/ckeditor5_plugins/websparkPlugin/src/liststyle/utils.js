import {first} from "ckeditor5/src/utils";

/**
 * Retrieves sibling elements in a specified direction within the same list type.
 *
 * @param {Element} currentNode - The current element to start from.
 * @param {Array} elementsBelow - An array to store the retrieved sibling elements.
 * @param {string} direction - The direction to search for siblings ('forward' or 'backward').
 * @private
 */
export function _getSibling(currentNode, elementsBelow, direction) {
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
 * Initialize the UDS list class for selected blocks in the model.
 *
 * @param {Model} model - The model to operate on.
 */
export function _initUdsListClass(model) {
  // Get the currently selected block
  let currentNode = first(
    model.document.selection.getSelectedBlocks()
  );
  const elementsBelow = [];
  model.change((writer) => {
    // Find and store sibling elements both backward and forward
    _getSibling(currentNode, elementsBelow, "backward");
    _getSibling(currentNode, elementsBelow, "forward");
    // Set the 'uds-list' class for each element below the current block
    elementsBelow.forEach((element) => {
      writer.setAttribute(
        "htmlListAttributes",
        {classes: 'uds-list'},
        element
      );
    });
  });
}