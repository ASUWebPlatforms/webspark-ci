/**
 * @file registers the websparkLead toolbar button and binds functionality to it.
 */

import { Plugin } from "ckeditor5/src/core";
import {
  createDropdown,
  addListToDropdown,
  ButtonView,
  ContextualBalloon,
  Model,
} from "ckeditor5/src/ui";
import icon from '../../../../../icons/websparklead.svg';
import { Collection } from "ckeditor5/src/utils";

export default class WebsparkLeadUI extends Plugin {
  init() {
    const editor = this.editor;
    const t = editor.t;
    //this._balloon = this.editor.plugins.get(ContextualBalloon);

  
    editor.ui.componentFactory.add("websparkLead", (locale) => {
      const command = editor.commands.get("insertWebsparkLead");
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t("Webspark Lead"),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind("isOn", "isEnabled").to(command, "value", "isEnabled");

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, "execute", () =>
        editor.execute("insertWebsparkLead")
      );

      return buttonView;
    });
  }
}
