import { InputView } from "ckeditor5/src/ui";

export class TextAreaView extends InputView {
  constructor(locale, defaultValue) {
    super(locale);

    const bind = this.bindTemplate;

    this.set("value", defaultValue || "");

    this.setTemplate({
      tag: "textarea",
      attributes: {
        class: ["ck-webspark-form-textarea"],
      },
      on: {
        input: bind.to("value"),
      },
    });
  }
}
