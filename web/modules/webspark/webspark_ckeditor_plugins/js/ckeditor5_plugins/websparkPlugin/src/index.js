/**
 * @file The build process always expects an index.js file. Anything exported
 * here will be recognized by CKEditor 5 as an available plugin. Multiple
 * plugins can be exported in this one file.
 *
 * I.e. this file's purpose is to make plugin(s) discoverable.
 */
// cSpell:ignore simplebox

import WebsparkButton from "./button/websparkbutton";
import WebsparkDivider from "./divider/websparkdivider";
import WebsparkLead from "./lead/websparklead";
import WebsparkHighlitedHeading from "./heading/websparkhighlightedheading";
import WebsparkBlockquote from "./quote/websparkblockquote";
import WebsparkTable from "./table/websparktable";
import WebsparkAdvancedImage from "./advancedimage/websparkadvancedimage";
import WebsparkMediaAlter from "./mediaalter/websparkmediaalter";
//import TableCellWsProperties from "./tablecellwsproperties/tablecellwsproperties";
import WebsparkListStyle from "./liststyle/websparkliststyle";

export default {
  WebsparkButton,
  WebsparkDivider,
  WebsparkLead,
  WebsparkHighlitedHeading,
  WebsparkBlockquote,
  WebsparkTable,
  WebsparkAdvancedImage,
  WebsparkMediaAlter,
 // TableCellWsProperties,
  WebsparkListStyle,
};
