import {
  ButtonView,
  InputTextView,
  LabelView,
  createDropdown as _createDropdown,
  addListToDropdown,
} from "ckeditor5/src/ui";
import { SelectView } from "./selectview";

export function createContainer(children, classes = []) {
  return {
    tag: "div",
    attributes: { class: ["ck-wbspark-form-container", ...classes] },
    children,
  };
}

export function createRow(...children) {
  return {
    tag: "div",
    attributes: { class: ["ck-webspark-form-row"] },
    children,
  };
}

export function createSelect(label, options, locale) {
  const labelView = new LabelView(locale);
  const selectView = new SelectView(locale, options, options[0].value);

  labelView.text = label;

  return createContainer([labelView, selectView]);
}

export function createInput(label, locale) {
  const labelView = new LabelView(locale);
  const inputTextView = new InputTextView(locale);

  labelView.text = label;

  return createContainer([labelView, inputTextView]);
}

export function createButton(label, icon, className, locale) {
  const button = new ButtonView(locale);

  button.set({
    label,
    icon,
    tooltip: true,
  });

  button.extendTemplate({
    attributes: {
      class: className,
    },
  });

  return button;
}

export function createDropdown(label, options, locale, onExecute) {
  const dropdown = _createDropdown(locale);

  addListToDropdown(dropdown, prepareListOptions(options));

  dropdown.buttonView.set({
    label: locale.t(label),
    withText: true,
  });

  this.listenTo(dropdown, "execute", (item) => {
    onExecute(item);
    dropdown.buttonView.set("label", item.source.label);
  });

  return dropdown;
}
