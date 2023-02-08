"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Root = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  outline: unset;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n\n  background-color: blue;\n  color: #fff;\n  padding: 16px;\n  border-radius: 8px;\n  border: solid 1px #f6f6f6;\n"], ["\n  display: flex;\n  flex: 1;\n  outline: unset;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n\n  background-color: blue;\n  color: #fff;\n  padding: 16px;\n  border-radius: 8px;\n  border: solid 1px #f6f6f6;\n"
    // ${({ theme, color, disabled }) => css`
    // ${theme.animation.transition[0]};
    // background-color: ${getThemeColor(theme, color, 'main')};
    // color: ${theme.palette.common.white};
    // padding: ${theme.space * 2}px;
    // border-radius: ${theme.shape.radius * 2}px;
    // border: solid 1px ${theme.palette.grey[400]};
    // &:hover {
    //   ${theme.animation.hover[0]};
    // }
    // &:active {
    //   ${theme.animation.active[0]};
    // }
    // ${disabled &&
    // css`
    //   pointer-events: none;
    //   background-color: ${theme.palette.grey[300]};
    //   border: solid 1px ${theme.palette.grey[100]};
    // `}
    // `}
])));
var templateObject_1;
// ${({ theme, color, disabled }) => css`
// ${theme.animation.transition[0]};
// background-color: ${getThemeColor(theme, color, 'main')};
// color: ${theme.palette.common.white};
// padding: ${theme.space * 2}px;
// border-radius: ${theme.shape.radius * 2}px;
// border: solid 1px ${theme.palette.grey[400]};
// &:hover {
//   ${theme.animation.hover[0]};
// }
// &:active {
//   ${theme.animation.active[0]};
// }
// ${disabled &&
// css`
//   pointer-events: none;
//   background-color: ${theme.palette.grey[300]};
//   border: solid 1px ${theme.palette.grey[100]};
// `}
// `}
