import { Plugin } from "ckeditor5/src/core";
import { toWidget, toWidgetEditable } from "ckeditor5/src/widget";
import { Widget } from "ckeditor5/src/widget";
import InsertWebsparkLeadCommand from "./insertwebsparkleadcommand";

// cSpell:ignore responsivearea insertresponsiveareacommand
export default class WebsparkLeadEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      "insertWebsparkLead",
      new InsertWebsparkLeadCommand(this.editor)
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <websparkLead>
   * </websparkLead>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register("websparkLead", {
      isObject: true,
      allowWhere: "$block",
    });
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const { conversion } = this.editor;

    conversion.for("upcast").elementToElement({
      view: {
        name: "p",
        classes: "lead",
      },
      model: (viewElement, { writer }) => {
        return writer.createElement("websparkLead");
      },
      converterPriority: "high",
    });

    conversion.for("dataDowncast").elementToElement({
      model: "websparkLead",
      view: (modelElement, { writer }) => {
        return writer.createEmptyElement("p", {
          class: "lead",
        });
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "websparkLead",
      view: (modelElement, { writer }) => {
        const wrapper = writer.createContainerElement(
          "div",
          null,
          writer.createEmptyElement("p", { class: "lead" })
        );

        writer.addClass("lead", wrapper);
        writer.setCustomProperty("p", true, wrapper);

        return toWidget(wrapper, writer, { label: "Lead" });
      },
    });
  }
}
