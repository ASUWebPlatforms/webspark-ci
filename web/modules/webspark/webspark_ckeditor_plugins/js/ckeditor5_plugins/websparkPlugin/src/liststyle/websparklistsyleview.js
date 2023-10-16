import { icons } from "ckeditor5/src/core";
import {
  FocusCycler,
  Model,
  View,
  ViewCollection,
  submitHandler,
} from "ckeditor5/src/ui";
import {
  Collection,
  FocusTracker,
  KeystrokeHandler,
} from "ckeditor5/src/utils";

import {
  createButton,
  createContainer,
  createRow,
  createSelect,
} from "../utils/utils";

export class WebsparkListStyleFormView extends View {
  constructor(validators, locale) {
    super(locale);

    const t = locale.t;

    this.focusTracker = new FocusTracker();
    this.keystrokes = new KeystrokeHandler();
    this.label = t("List properties");
    this.classSelect = createSelect(
      t("List properties"),
      this._getBulletedPropertiesOptions(t),
      locale
    );

    this.saveButtonView = createButton(
      t("Save"),
      icons.check,
      "ck-button-save",
      locale
    );
    this.saveButtonView.type = "submit";

    this.cancelButtonView = createButton(
      t("Cancel"),
      icons.cancel,
      "ck-button-cancel",
      locale
    );

    this.cancelButtonView.delegate("execute").to(this, "cancel");

    this._focusables = new ViewCollection();

    this._focusCycler = new FocusCycler({
      focusables: this._focusables,
      focusTracker: this.focusTracker,
      keystrokeHandler: this.keystrokes,
      actions: {
        focusPrevious: "shift + tab",
        focusNext: "tab",
      },
    });

    this.setTemplate({
      tag: "form",
      attributes: {
        class: ["ck", "ck-text-alternative-form", "ck-responsive-form"],
        tabindex: "-1",
      },
      children: [
        createRow(this.label),
        createRow(this.classSelect),
        createContainer(
          [this.saveButtonView, this.cancelButtonView],
          ["ck-webspark-form-buttons"]
        ),
      ],
    });
  }

  /*
   * Bulleted List Properties
   */
  _getBulletedPropertiesOptions(t) {
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

  render() {
    super.render();

    submitHandler({
      view: this,
    });

    // TODO: Check why focus isn't working for a custom view
    const childViews = [
      this.classSelect.children[1],

      this.saveButtonView,
      this.cancelButtonView,
    ];

    childViews.forEach((v) => {
      // Register the view as focusable.
      this._focusables.add(v);

      // Register the view in the focus tracker.
      this.focusTracker.add(v.element);
    });

    // Start listening for the keystrokes coming from #element.
    this.keystrokes.listenTo(this.element);

    const stopPropagation = (data) => data.stopPropagation();

    // Since the form is in the dropdown panel which is a child of the toolbar, the toolbar's
    // keystroke handler would take over the key management in the URL input. We need to prevent
    // this ASAP. Otherwise, the basic caret movement using the arrow keys will be impossible.
    this.keystrokes.set("arrowright", stopPropagation);
    this.keystrokes.set("arrowleft", stopPropagation);
    this.keystrokes.set("arrowup", stopPropagation);
    this.keystrokes.set("arrowdown", stopPropagation);
  }

  destroy() {
    super.destroy();

    this.focusTracker.destroy();
    this.keystrokes.destroy();
  }

  focus() {
    this._focusCycler.focusFirst();
  }

  get classselect() {
    return this.classSelect.children[1].value;
  }

  set classselect(classselect) {
    this.classSelect.children[1].value = classselect;
  }

  setValues(values) {
    this.classselect = values?.classselect;
  }

  isValid() {
    return true;
  }
}
