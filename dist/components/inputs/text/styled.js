"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Label = exports.Root = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"])));
exports.Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  outline: unset;\n\n  padding: 16px;\n  border-radius: 4px;\n  border: solid 1px #f6f6f6;\n"], ["\n  display: flex;\n  flex: 1;\n  outline: unset;\n\n  padding: 16px;\n  border-radius: 4px;\n  border: solid 1px #f6f6f6;\n"
    /* ${({ theme }) => css`
      padding: ${theme.space * 2}px;
      border-radius: ${theme.shape.radius}px;
      border: solid 1px ${theme.palette.grey[400]};
    `} */
])));
var templateObject_1, templateObject_2, templateObject_3;
/* ${({ theme }) => css`
  padding: ${theme.space * 2}px;
  border-radius: ${theme.shape.radius}px;
  border: solid 1px ${theme.palette.grey[400]};
`} */
