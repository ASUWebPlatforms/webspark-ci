/**
 * @file This is what CKEditor refers to as a master (glue) plugin. Its role is
 * just to load the “editing” and “UI” components of this Plugin. Those
 * components could be included in this file, but
 *
 * I.e, this file's purpose is to integrate all the separate parts of the plugin
 * before it's made discoverable via index.js.
 */

import WebsparkBlockquoteAnimatedEditing from "./websparkblockquoteanimatedediting";
import WebsparkBlockquoteAnimatedUI from "./websparkblockquoteanimatedui";
import { Plugin } from "ckeditor5/src/core";

export default class WebsparkBlockquoteAnimated extends Plugin {
  static get requires() {
    return [WebsparkBlockquoteAnimatedEditing, WebsparkBlockquoteAnimatedUI];
  }
}
