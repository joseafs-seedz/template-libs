"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridContent = exports.Root = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
// import { useMediaQuery } from '~/utils/theme';
exports.Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""
    /* ${({ theme }) => css`
      margin: 0 -${theme.space}px;
    `} */
])));
/* ${({ theme }) => css`
  margin: 0 -${theme.space}px;
`} */
exports.GridContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"
    /* @media ${useMediaQuery().maxW.md} {
      display: inline-block;
      width: 100%;
    } */
])));
var templateObject_1, templateObject_2;
/* @media ${useMediaQuery().maxW.md} {
  display: inline-block;
  width: 100%;
} */
