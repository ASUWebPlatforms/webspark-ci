/**
 * @file defines InsertWebsparkBlockquoteCommand, which is executed when the websparkBlockquote
 * form is submitted.
 */

import { Command } from "ckeditor5/src/core";
export default class InsertWebsparkBlockquoteCommand extends Command {
  execute({ text, citationName, citationDescription }) {
    const { model } = this.editor;
    console.log("citationDescription", citationDescription);
    model.change((writer) => {
      const websparkBlockquote = writer.createElement("websparkBlockquote");
      const websparkBlockquoteSvg = writer.createElement(
        "websparkBlockQuoteSvg"
      );
      const websparkBlockQuotePath = writer.createElement(
        "websparkBlockQuotePath"
      );
      const websparkBlockQuoteContainer = writer.createElement(
        "websparkBlockQuoteContainer"
      );
      const websparkBlockquoteParagraph = writer.createElement(
        "websparkBlockquoteParagraph"
      );
      const websparkBlockquoteCitation = writer.createElement(
        "websparkBlockquoteCitation"
      );

      const websparkBlockquoteCitationName = writer.createElement(
        "websparkBlockquoteCitationName"
      );

      const websparkBlockquoteCitationDescription = writer.createElement(
        "websparkBlockquoteCitationDescription"
      );

      const textNode = writer.createText(text);
      writer.append(textNode, websparkBlockquoteParagraph);

      if (citationName.length > 0) {
        const textNodeCitationName = writer.createText(citationName);
        writer.append(textNodeCitationName, websparkBlockquoteCitationName);
        writer.append(
          websparkBlockquoteCitationName,
          websparkBlockquoteCitation
        );
      }
      if (citationDescription.length > 0) {
        const textNodeDescription = writer.createText(citationDescription);
        writer.append(
          textNodeDescription,
          websparkBlockquoteCitationDescription
        );
        writer.append(
          websparkBlockquoteCitationDescription,
          websparkBlockquoteCitation
        );
      }

      writer.append(websparkBlockQuotePath, websparkBlockquoteSvg);

      writer.append(websparkBlockquoteSvg, websparkBlockquote);

      writer.append(websparkBlockquoteParagraph, websparkBlockQuoteContainer);
      writer.append(websparkBlockquoteCitation, websparkBlockQuoteContainer);

      writer.append(websparkBlockQuoteContainer, websparkBlockquote);
      model.insertContent(websparkBlockquote);
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // websparkBlockquote is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      "websparkBlockquote"
    );

    // If the cursor is not in a location where a simpleBox can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;

    const selectedElement = selection.getSelectedElement();

    if (selectedElement?.name === "websparkBlockquote") {
      const text = selectedElement?.getChild(0)?.getChild(0)?._data;

      model.change((writer) => {
        writer.setAttribute("text", text, selectedElement);
      });

      this.value = Object.fromEntries(selectedElement.getAttributes());
    } else {
      this.value = null;
    }
  }
}
