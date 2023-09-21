/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

import {Plugin} from "ckeditor5/src/core";
import {ContextualBalloon} from "ckeditor5/src/ui";
import InsertWebsparkListStyleCommand from "./insertliststylecommand";
import {Widget} from "ckeditor5/src/widget";
//
export default class WebsparkListStyleEditing extends Plugin {

    static get requires() {
        return [
            Widget,
            ContextualBalloon,
        ];
    }

    /**
     * @inheritdoc
     */
    static get pluginName() {
        return 'WebsparkListStyleEditing';
    }

    constructor(editor) {
        super(editor);
    }

    init() {
        const editor = this.editor;
        editor.commands.add(
            "insertliststyle",
            new InsertWebsparkListStyleCommand(editor)
        );
    }

}
