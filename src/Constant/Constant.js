import { BiUndo, BiRedo, BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineSpellcheck, MdOutlineImagesearchRoller } from "react-icons/md";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignRightRoundedIcon from "@mui/icons-material/FormatAlignRightRounded";
import FormatAlignJustifyRoundedIcon from "@mui/icons-material/FormatAlignJustifyRounded";
import FormatClearRoundedIcon from "@mui/icons-material/FormatClearRounded";
import FormatIndentIncreaseRoundedIcon from "@mui/icons-material/FormatIndentIncreaseRounded";
import FormatIndentDecreaseRoundedIcon from "@mui/icons-material/FormatIndentDecreaseRounded";
import SuperscriptRoundedIcon from "@mui/icons-material/SuperscriptRounded";
import SubscriptRoundedIcon from "@mui/icons-material/SubscriptRounded";

export const iconCollective = [
  {
    iconTitle: "Undo",
    iconName: <BiUndo />,
    iconFunctionality: "undo",
  },
  {
    iconTitle: "Redo",
    iconName: <BiRedo />,
    iconFunctionality: "redo",
  },
  {
    iconTitle: "Printer",
    iconName: <AiOutlinePrinter />,
  },
  {
    iconTitle: "Spelling",
    iconName: <MdOutlineSpellcheck />,
  },
  {
    iconTitle: "Roller",
    iconName: <MdOutlineImagesearchRoller />,
  },
  {
    iconTitle: "Bold",
    iconName: <BiBold />,
    iconFunctionality: "Bold",
  },
  {
    iconTitle: "Italic",
    iconName: <BiItalic />,
    iconFunctionality: "italic",
  },
  {
    iconTitle: "Underline",
    iconName: <BiUnderline />,
    iconFunctionality: "underline",
  },
  {
    iconTitle: "Unordered List",
    iconName: <FormatListBulletedRoundedIcon />,
    iconFunctionality: "InsertUnorderedList",
  },
  {
    iconTitle: "Ordered List",
    iconName: <FormatListNumberedRoundedIcon />,
    iconFunctionality: "insertOrderedList",
  },
  {
    iconTitle: "Left Align",
    iconName: <FormatAlignLeftRoundedIcon />,
    iconFunctionality: "justifyLeft",
  },
  {
    iconTitle: "Center Align",
    iconName: <FormatAlignCenterRoundedIcon />,
    iconFunctionality: "justifyCenter",
  },
  {
    iconTitle: "Right Align",
    iconName: <FormatAlignRightRoundedIcon />,
    iconFunctionality: "justifyRight",
  },
  {
    iconTitle: "Justify",
    iconName: <FormatAlignJustifyRoundedIcon />,
    iconFunctionality: "justifyFull",
  },
  {
    iconTitle: "Remove Format",
    iconName: <FormatClearRoundedIcon />,
    iconFunctionality: "removeFormat",
  },
  {
    iconTitle: "Indent",
    iconName: <FormatIndentIncreaseRoundedIcon />,
    iconFunctionality: "indent",
  },
  {
    iconTitle: "Outdent",
    iconName: <FormatIndentDecreaseRoundedIcon />,
    iconFunctionality: "outdent",
  },
  {
    iconTitle: "Superscript",
    iconName: <SuperscriptRoundedIcon />,
    iconFunctionality: "superscript",
  },
  {
    iconTitle: "Subscript",
    iconName: <SubscriptRoundedIcon />,
    iconFunctionality: "subscript",
  },
];
