"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
var styled_components_1 = __importStar(require("styled-components"));
/* ${({ mgn = [] }) => spaceCalc(mgn, 'margin')};
${({ pdg = [] }) => spaceCalc(pdg, 'padding')}; */
exports.Root = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ",
    ";\n  ", ";\n  ", ";\n  ", ";\n  ",
    ";\n"])), function (_a) {
    var zind = _a.zind;
    return zind &&
        "\n    position: relative;\n    z-index: " + zind + ";";
}, function (_a) {
    var overflow = _a.overflow;
    return overflow && "overflow: " + overflow + ";";
}, function (_a) {
    var bgColor = _a.bgColor;
    return bgColor && "background-color: " + bgColor + ";";
}, function (_a) {
    var align = _a.align;
    return align && "text-align: " + align + ";";
}, function (_a) {
    var flex = _a.flex;
    return flex && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      flex: 1;\n    "], ["\n      display: flex;\n      flex: 1;\n    "])));
});
var templateObject_1, templateObject_2;
