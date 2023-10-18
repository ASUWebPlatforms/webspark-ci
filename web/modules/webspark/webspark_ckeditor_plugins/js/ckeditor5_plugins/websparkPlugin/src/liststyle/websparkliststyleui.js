import {Plugin, Range} from "ckeditor5/src/core";
import {
  clickOutsideHandler,
  ContextualBalloon,
  createDropdown,
} from "ckeditor5/src/ui";
import {WebsparkListStyleFormView} from "./websparklistsyleview";
import icon from "../../../../../icons/websparkListStyle.svg";
import {_getBulletedPropertiesOptions, _getNumberedPropertiesOptions, _setUpClassSelect} from "./utils";

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

    const viewDocument = this.editor.editing.view.document;
    this.listenTo(viewDocument, "click", () => {
      _setUpClassSelect(this.form, this.editor);
    });

    this.listenTo(viewDocument, "change", () => {
      _setUpClassSelect(this.form, this.editor);
    });

    editor.ui.componentFactory.add("websparkListStyle", (locale) => {
      const dropdown = createDropdown(editor.locale);
      this._setUpDropdown(dropdown, this.form, command, balloon);
      this._setUpForm(this.form, dropdown, command);

      const command1 = this.editor.commands.get("bulletedListOld");
      const command2 = this.editor.commands.get("numberedListOld");
      dropdown.bind( 'isEnabled' ).toMany( [command1, command2], 'value', value => {
        return command1.value || command2.value;
      } );

      return dropdown;
    });
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
        this.editor.commands.get("bulletedListOld").value ||
        this.editor.commands.get("numberedListOld").value
      ) {
        if (element && element._classes !== null) {
          this.form.classselect = Array.from(element._classes)[0];
        }
        try {
          balloon.add({
            view: this.form,
            position: this._getBalloonPositionData(),
          });
        } catch (e) {}
      }
      // This const will store the list options. Depending on the
      // list type(Bulleted or Numbered) it will display a set of data.
      const listOptions = this.editor.commands.get("bulletedListOld").value
        ? _getBulletedPropertiesOptions(this.editor.t)
        : this.editor.commands.get("numberedListOld").value
          ? _getNumberedPropertiesOptions(this.editor.t)
          : "";

      if (!listOptions) {
        return;
      }

      //remove current options
      this.form.classSelect.children[1].element.options.length = 0;

      listOptions.forEach((optionData) => {
        const optionElement = document.createElement("option");
        optionElement.value = optionData.value;
        optionElement.text = optionData.title;
        this.form.classSelect.children[1].element.appendChild(optionElement);
      });
    });

    // Close on click outside of balloon panel element.
    clickOutsideHandler({
      emitter: this.form,
      activator: () => balloon.visibleView === this.form,
      contextElements: [balloon.view.element],
      callback: () => balloon.remove(this.form),
    });

    this.listenTo(viewDocument, "keydown", (evt, data) => {
      try {
        balloon.remove(this.form);
      } catch (e) {}
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
    let selectionLi;
    let fragmentActual;
    const arrayDeFragments = viewDocument.selection
      .getFirstRange()
      .getCommonAncestor()
      .getAncestors();

    for (let i = 0; i < arrayDeFragments.length; i++) {
      fragmentActual = arrayDeFragments[i];
      if (fragmentActual.name === "ul" || fragmentActual.name === "ol") {
        if (
          fragmentActual._id === "list-bulleted-0" ||
          fragmentActual._id === "list-numbered-0"
        ) {
          selectionLi =
            fragmentActual._children[fragmentActual._children.length - 1];
        }
      }
    }
    try {
      const range = view.createRangeOn(selectionLi);
      // Set a target position by converting view selection range to DOM
      target = () => view.domConverter.viewRangeToDom(range);
    } catch (e) {}
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

    dropdown.panelView.children.add(form);

    button.set({
      label: t("List Properties"),
      icon: icon,
      tooltip: true,
    });

    button.on(
      "open",
      () => {
        form.setValues(command.value);
        if(form.classselect) {
          form.classselect.children[1].select();
        }

        form.focus();
      },
      {priority: "low"}
    );

    // Note: Use the low priority to make sure the following listener starts working after the
    // default action of the drop-down is executed (i.e. the panel showed up). Otherwise, the
    // invisible form/input cannot be focused/selected.
    balloon.on(
      "open",
      () => {
        form.setValues("maroon");
        form.focus();
      },
      {priority: "low"}
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
      try {
        balloon.remove(form);
      } catch (e) {}
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
