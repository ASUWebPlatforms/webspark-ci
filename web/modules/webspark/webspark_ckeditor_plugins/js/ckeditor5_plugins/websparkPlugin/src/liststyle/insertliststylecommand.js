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
    const listTypeClasses = this.editor.commands.get("bulletedList").value
      ? this._formatStyleBulletedClass(styleClass)
      : this.editor.commands.get("numberedList").value
      ? this._formatStyleNumberedClass(styleClass)
      : "";
    model.change((writer) => {
      this._getSibling(currentNode, elementsBelow, "backward");
      this._getSibling(currentNode, elementsBelow, "forward");
      elementsBelow.forEach((element) => {
        writer.setAttribute(
          "htmlListAttributes",
          { classes: listTypeClasses },
          element
        );
      });
    });
  }

  /**
   * Formats the style number class.
   *
   * @param {string} styleClass - The style class to format.
   * @return {string} The formatted style number class.
   */
  _formatStyleNumberedClass(styleClass) {
    // Get select value.
    let numberedClass = styleClass;
    // Use 'default-list' if numberedClass is empty
    numberedClass = numberedClass || "default-list";
    // Add class to be identified from.
    let stclass = this._removeKeyClass(styleClass);

    // Add the class to be identified.
    stclass = `wp-${styleClass}`;

    // If value starts with stp its a step value.
    if (numberedClass.startsWith("stp")) {
      stclass += " uds-list uds-steplist";

      // Remove NLR clases.
      if (numberedClass == "stp-default") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "uds-steplist-maroon",
          "smokemode",
          "light-smokemode",
          "darkmode",
          "maroon",
        ]);
      }
      // Default gold.
      if (numberedClass == "stp-gold-counter") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-maroon",
          "smokemode",
          "light-smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += " uds-steplist-gold";
      }
      // Default maroon.
      if (numberedClass == "stp-maroon-counter") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "smokemode",
          "light-smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass = " uds-steplist-maroon";
      }
      // Smoke mode.
      if (numberedClass == "stp-smokemode") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "uds-steplist-maroon",
          "light-smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += " smokemode";
      }
      // Smoke mode gold.
      if (numberedClass == "stp-smokemode-gold") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-maroon",
          "light-smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += " smokemode uds-steplist-gold";
      }
      // Smoke mode maroon.
      if (numberedClass == "stp-smokemode-maroon") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-maroon",
          "light-smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += "smokemode uds-steplist-maroon";
      }
      // Light Smoke mode.
      if (numberedClass == "stp-lightsmokemode") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "uds-steplist-maroon",
          "smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += " light-smokemode";
      }
      // Light Smoke mode gold.
      if (numberedClass == "stp-lightsmokemode-gold") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-maroon",
          "smokemode",
          "darkmode",
        ]);

        // Add classes.
        stclass += " light-smokemode uds-steplist-gold";
      }
      // Light Smoke mode maroon.
      if (numberedClass == "stp-lightsmokemode-maroon") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "smokemode",
          "darkmode",
        ]);
        // Add classes.
        stclass += " light-smokemode uds-steplist-maroon";
      }
      // Darkmode.
      if (numberedClass == "stp-darkmode") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-gold",
          "uds-steplist-maroon",
          "light-smokemode",
          "darkmode",
        ]);
        // Add classes.
        stclass += " darkmode";
      }
      // Darkmode gold.
      if (numberedClass == "stp-darkmode-gold") {
        // Remove NLR classes.
        stclass = this._removeClassesFromString(stclass, [
          "uds-steplist-maroon",
          "smokemode",
          "light-smokemode",
        ]);
        // Add classes.
        stclass += " darkmode uds-steplist-gold";
      }
    } else {
      // Remove step list elements.
      stclass = this._removeClassesFromString(stclass, [
        "uds-steplist",
        "uds-steplist-maroon",
        "uds-steplist-gold",
      ]);
      // Add class after removing existing class.
      if (numberedClass) {
        // Ensure the step list class is not applied.
        // Add remove classes as required.
        const removeList = [
          "default-list",
          "maroon",
          "light-smokemode",
          "smokemode",
          "darkmode",
        ];

        for (const removeClass of removeList) {
          if (stclass.includes(removeClass) && numberedClass !== removeClass) {
            stclass = stclass.replace(removeClass, "");
          }
        }
        if (
          stclass.includes("darkmode") &&
          stclass.includes("gold") &&
          numberedClass != "darkmode-gold"
        ) {
          // element.removeClass("darkmode");
          //element.removeClass("gold");
          stclass = this._removeClassesFromString(stclass, [
            "darkmode",
            "gold",
          ]);
        }
        if (numberedClass == "darkmode-gold") {
          stclass += " darkmode gold";
        } else {
          stclass += " " + numberedClass;
        }
      }
      // Apply uds-list class if element does not have it.
      if (!stclass.includes("uds-list")) {
        stclass += " uds-list";
      }
    }
    return stclass;
  }

  /**
   * Formats the given style class to be used as a bulleted class.
   *
   * @param {string} styleClass - The style class to be formatted.
   * @return {string} The formatted bulleted class.
   */
  _formatStyleBulletedClass(styleClass) {
    // Get select value.
    let bulletedClass = styleClass;

    // Add class to be identified from.
    let stclass = this._removeKeyClass(styleClass);
    // Add the class to be identified.
    stclass = `wp-${styleClass}`;
    // Use 'default-list' if bulletedClass is empty
    bulletedClass = bulletedClass || "default-list";

    // If value starts with icn its a icon list.
    if (bulletedClass.startsWith("icn")) {
      stclass += " uds-list fa-ul";

      switch (bulletedClass) {
        case "icn-maroon":
          stclass = this._removeClassesFromString(stclass, ["darkmode", "gold"]);
          stclass += " maroon";
          break;
        case "icn-darkmode":
          stclass = this._removeClassesFromString(stclass, ["gold", "maroon"]);
          stclass += " darkmode";
          break;
        case "icn-darkmode-gold":
          stclass = this._removeClassesFromString(stclass, ["maroon"]);
          stclass += " darkmode gold";
          break;
        // Add more cases if needed
      }
    } else {
      // Remove step list elements.
      stclass = this._removeClassesFromString(stclass, ["fa-ul"]);
      // Add class after removing existing class.
      if (bulletedClass) {
        // Ensure the step list class is not applied.
        // Add remove classes as required.
        const removeList = [
          "default-list",
          "maroon",
          "light-smokemode",
          "smokemode",
          "darkmode",
        ];

        for (const removeClass of removeList) {
          if (stclass.includes(removeClass) && bulletedClass !== removeClass) {
            stclass = stclass.replace(removeClass, "");
          }
        }

        if (
          stclass.includes("darkmode") &&
          stclass.includes("gold") &&
          bulletedClass != "darkmode-gold"
        ) {
          stclass = this._removeClassesFromString(stclass, [
            "darkmode",
            "gold",
          ]);
        }

        stclass += (bulletedClass === "darkmode-gold") ? " darkmode gold" : " " + bulletedClass;
      }
      // Apply uds-list class if element does not have it.
      if (!stclass.includes("uds-list")) {
        stclass += " uds-list";
      }
    }
    return stclass;
  }

  /**
   * Removes specified classes from a string.
   *
   * @param {string} element - The input string from which to remove classes.
   * @param {Array} classesToRemove - An array of classes to be removed.
   * @return {string} - The modified string with classes removed.
   */
  _removeClassesFromString(element, classesToRemove) {
    let result = element;
    for (const classToRemove of classesToRemove) {
      const pattern = new RegExp(classToRemove, "g");
      result = element.replace(pattern, "");
    }
    return result;
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

  /**
   * Remove all words starting with "wp-" from the given element.
   *
   * @param {string} element - The element to remove words from.
   * @return {string} The modified element with words removed.
   */
  _removeKeyClass(element) {
    // Define a regular expression pattern to match words starting with "wp-"
    let pattern = /\bwp-\w+\b/g;
    // Use the replace method to remove all words that match the pattern
    return element.replace(pattern, "");
  }
}
