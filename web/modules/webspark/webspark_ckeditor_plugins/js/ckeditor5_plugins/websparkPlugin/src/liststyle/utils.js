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


export function _setUpClassSelect(form, editor) {
  // This const will store the list options. Depending on the
  // list type(Bulleted or Numbered) it will display a set of data.
  const listOptions = editor.commands.get("bulletedListOld").value
    ? _getBulletedPropertiesOptions(editor.t)
    : editor.commands.get("numberedListOld").value
      ? _getNumberedPropertiesOptions(editor.t)
      : "";

  if (!listOptions) {
    return;
  }

  //remove current options
  form.classSelect.children[1].element.options.length = 0;

  listOptions.forEach((optionData) => {
    const optionElement = document.createElement("option");
    optionElement.value = optionData.value;
    optionElement.text = optionData.title;
    form.classSelect.children[1].element.appendChild(optionElement);
  });
}

/**
 * Generate an array of objects with specified values and titles.
 * @param {function} t - Translation function to translate titles.
 * @returns {Array} An array of objects with 'value' and 'title' properties.
 */
export function _getBulletedPropertiesOptions(t) {
  return [
    {
      value: "default-list",
      title: t("Default"),
    },
    {
      value: `maroon`,
      title: t("Maroon"),
    },
    {
      value: `light-smokemode`,
      title: t("Gray 1"),
    },
    {
      value: `smokemode`,
      title: t("Gray 2"),
    },
    {
      value: `darkmode`,
      title: t("Gray 7"),
    },
    {
      value: `darkmode-gold`,
      title: t("Gray 7 Gold Bullet"),
    },
    {
      value: `icn-default`,
      title: t("Icon list"),
    },
    {
      value: `icn-maroon`,
      title: t("Icon list Maroon"),
    },
    {
      value: `icn-darkmode`,
      title: t("Icon list Gray 7"),
    },
    {
      value: `icn-darkmode-gold`,
      title: t("Icon list Gray 7 Gold"),
    },
  ];
}

/**
 * Generate an array of objects with specified values and titles.
 * @param {function} t - Translation function to translate titles.
 * @returns {Array} An array of objects with 'value' and 'title' properties.
 */
export function _getNumberedPropertiesOptions(t) {
  return [
    {
      value: "default-list",
      title: t("Default"),
    },
    {
      value: "maroon",
      title: t("Maroon"),
    },
    {
      value: "light-smokemode",
      title: t("Gray 1"),
    },
    {
      value: "smokemode",
      title: t("Gray 2"),
    },
    {
      value: "darkmode",
      title: t("Gray 7"),
    },
    {
      value: "darkmode-gold",
      title: t("Gray 7 Gold"),
    },
    {
      value: "stp-default",
      title: t("Step List Default"),
    },
    {
      value: "stp-gold-counter",
      title: t("Step List Gold Counter"),
    },
    {
      value: "stp-maroon-counter",
      title: t("Step List Maroon Counter"),
    },
    {
      value: "stp-smokemode",
      title: t("Step List Gray 2"),
    },
    {
      value: "stp-smokemode-gold",
      title: t("Step List Gray 2 Gold Counter"),
    },
    {
      value: "stp-smokemode-maroon",
      title: t("Step List Gray 2 Maroon Counter"),
    },
    {
      value: "stp-lightsmokemode",
      title: t("Step List Gray 1"),
    },
    {
      value: "stp-lightsmokemode-gold",
      title: t("Step List Gray 1 Gold Counter"),
    },
    {
      value: "stp-lightsmokemode-maroon",
      title: t("Step List Gray 1 Maroon Counter"),
    },
    {
      value: "stp-darkmode",
      title: t("Step List Gray 7"),
    },
    {
      value: "stp-darkmode-gold",
      title: t("Step List Gray 7 Gold Counter"),
    },
  ];
}