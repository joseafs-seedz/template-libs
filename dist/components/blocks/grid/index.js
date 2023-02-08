"use strict";
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
exports.Grid = void 0;
var react_1 = __importStar(require("react"));
var styled_1 = require("./styled");
var OgGrid = function (_a) {
    var children = _a.children, mgn = _a.mgn, align = _a.align, pdg = _a.pdg, zind = _a.zind, bgColor = _a.bgColor, overflow = _a.overflow, flex = _a.flex, className = _a.className;
    return (react_1.default.createElement(styled_1.Root, { zind: zind, mgn: mgn, align: align, pdg: pdg, bgColor: bgColor, overflow: overflow, className: className, flex: flex }, children));
};
exports.Grid = react_1.memo(OgGrid);
