import {
  PlainTableOutput,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TableUtils,
} from "@ckeditor/ckeditor5-table";
import { Plugin } from "ckeditor5/src/core";
import { Widget, toWidget } from "ckeditor5/src/widget";
import InsertWebsparkTableCommand from "./inserttablecommand";

export default class WebsparkTableEditing extends Plugin {
  static get requires() {
    return [
      Widget,
      Table,
      TableUtils,
      TableToolbar,
      PlainTableOutput,
      TableCaption,
      TableProperties,
      TableCellProperties,
    ];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      "insertWebsparkTable",
      new InsertWebsparkTableCommand(this.editor)
    );
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register("websparkTable", {
      isObject: true,
      allowWhere: "$block",
      allowChildren: ["table"],
      allowAttributes: ["type"],
    });
  }

  _defineConverters() {
    const { conversion } = this.editor;

    // Override default table data downcast converter.
		/*conversion.for( 'dataDowncast' ).elementToStructure( {
			model: 'table',
			view: downcastTableElement,
			converterPriority: 'high'
		} );*/
 
// editingDowncast for editing pipeline
/*conversion.for( 'editingDowncast' ).elementToElement( {
        model: 'table',
        view: downcastTableCustom,
       view: {
            name: 'table',
            classes: 'paragraph-in-editing-view'
        },
        converterPriority: 'high'
    } );*/

    conversion.for("upcast").elementToElement({
      view: {
        name: "div",
        classes: ["uds-table"],
        attribute: { type: true },
      },
      model: (viewElement, { writer }) => {
        const classes = viewElement.getAttribute("class");
        const type = classes.includes("-fixed") ? "fixed" : "default";

        return writer.createElement("websparkTable", {
          type,
        });
      },
    });

    conversion.for("dataDowncast").elementToElement({
      model: "websparkTable",
      view: (modelElement, { writer }) => {
        let _class = "uds-table";

        if (modelElement.getAttribute("type") === "fixed") {
          _class += ` uds-table-fixed`;
        }

        return writer.createContainerElement("div", {
          class: _class,
        });
      },
    });

    conversion.for("editingDowncast").elementToElement({
      model: "websparkTable",
      view: (modelElement, { writer }) => {
        const wrapper = writer.createContainerElement("div");

        return toWidget(wrapper, writer, { label: "Webspark Table" });
      },
    });
  }
}