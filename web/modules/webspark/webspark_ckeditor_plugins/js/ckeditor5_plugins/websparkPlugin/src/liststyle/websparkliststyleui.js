import { Plugin } from "ckeditor5/src/core";
import {
  clickOutsideHandler,
  ContextualBalloon,
  createDropdown,
} from "ckeditor5/src/ui";
import { WebsparkListStyleFormView } from "./websparklistsyleview";

export default class WebsparkListStyleUI extends Plugin {
  static get requires() {
    return [ContextualBalloon];
  }

  /**
   * Initializes the WebsparkListStyleUI plugin.
   * This function sets up the user interface elements and interactions.
   */
  init() {
    const editor = this.editor;
    const command = editor.commands.get("insertliststyle");
    const balloon = this.editor.plugins.get(ContextualBalloon);
    this.form = new WebsparkListStyleFormView(
      getFormValidators(this.editor.t),
      this.editor.locale,
      command
    );

    const dropdown = createDropdown(editor.locale);
    this._setUpDropdown(dropdown, this.form, command, balloon);
    this._setUpForm(this.form, dropdown, command);
    this._defineBalloon(balloon);
  }

  /**
   * Recursively find the parent 'ul' element of the given element.
   *
   * @param {Element} element - The current element to start the search from.
   * @returns {Element|null} The 'ul' element found in the hierarchy, or null if not found.
   * @private
   */
  _findUlParent(element) {
    if (!element || !element.parent) {
      return null;
    }
    if (element.name === "ul") {
      return element;
    }
    return this._findUlParent(element.parent);
  }   
  
  /**
   * Defines the behavior of the ContextualBalloon for this plugin.
   *
   * @param {ContextualBalloon} balloon - The ContextualBalloon instance to configure.
   * @private
   */
  _defineBalloon(balloon) {
    const viewDocument = this.editor.editing.view.document;
    this.listenTo(viewDocument, "click", () => {
      let element = viewDocument.selection.getFirstPosition().parent.parent;
      element = this._findUlParent(element);
      if (
        this.editor.commands.get("bulletedList").value ||
        this.editor.commands.get("numberedList").value
      ) {
        if (element && element._classes !== null) {
          this.form.classselect = Array.from(element._classes)[0];
        }
        balloon.add({
          view: this.form,
          position: this._getBalloonPositionData(),
        });
      }
    });

    // Close on click outside of balloon panel element.
    clickOutsideHandler({
      emitter: this.form,
      activator: () => balloon.visibleView === this.form,
      contextElements: [balloon.view.element],
      callback: () => balloon.remove(this.form),
    });
  }

  /**
   * Calculates the position data for the balloon.
   *
   * @returns {Object} The position data for the balloon.
   * @private
   */
  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;
    let target = null;

    // Set a target position by converting view selection range to DOM
    target = () =>
      view.domConverter.viewRangeToDom(viewDocument.selection.getFirstRange());

    return {
      target,
    };
  }

  /**
   * Set up the dropdown with the form, command, and balloon.
   *
   * @param {Dropdown} dropdown - The dropdown instance to set up.
   * @param {WebsparkListStyleFormView} form - The form instance to include in the dropdown.
   * @param {Command} command - The CKEditor command associated with list style insertion.
   * @param {ContextualBalloon} balloon - The ContextualBalloon instance to interact with.
   * @private
   */
  _setUpDropdown(dropdown, form, command, balloon) {
    const editor = this.editor;
    const t = editor.t;
    const button = dropdown.buttonView;

    dropdown.bind("isEnabled").to(command);
    dropdown.panelView.children.add(form);

    // Note: Use the low priority to make sure the following listener starts working after the
    // default action of the drop-down is executed (i.e. the panel showed up). Otherwise, the
    // invisible form/input cannot be focused/selected.
    balloon.on(
      "open",
      () => {
        form.setValues("maroon");
        form.focus();
      },
      { priority: "low" }
    );

    dropdown.on("submit", () => {
      editor.execute("insertliststyle", {
        styleClass: form.classselect,
      });
      closeUI();
    });

    dropdown.on("change:isOpen", () => form.element.reset());
    dropdown.on("cancel", () => closeUI());

    function closeUI() {
      editor.editing.view.focus();
      dropdown.isOpen = false;
      balloon.remove(form);
    }
  }

  /**
   * Set up the form's interaction with the dropdown and command.
   *
   * @param {WebsparkListStyleFormView} form - The form instance to set up.
   * @param {Dropdown} dropdown - The dropdown instance associated with the form.
   * @param {Command} command - The CKEditor command associated with list style insertion.
   * @private
   */
  _setUpForm(form, dropdown, command) {
    form.delegate("submit", "cancel").to(dropdown);
    form.saveButtonView.bind("isEnabled").to(command);
  }
}

function getFormValidators(t) {
  return [];
}
