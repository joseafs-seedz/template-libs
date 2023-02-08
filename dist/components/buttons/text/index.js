"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonText = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_1 = require("./styled");
var OgButtonText = function (_a) {
    var text = _a.text, type = _a.type, color = _a.color, disabled = _a.disabled;
    return (react_1.default.createElement(styled_1.Root, { type: type, color: color, disabled: disabled }, text));
};
exports.ButtonText = react_2.memo(OgButtonText);
