"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var styled_1 = require("./styled");
var OgInputText = function (_a) {
    var name = _a.name, type = _a.type, label = _a.label, value = _a.value, min = _a.min, max = _a.max, required = _a.required, placeholder = _a.placeholder, onChange = _a.onChange;
    return (react_1.default.createElement(styled_1.Root, null,
        label && react_1.default.createElement(styled_1.Label, { htmlFor: name }, label),
        react_1.default.createElement(styled_1.Input, { id: name, required: required, "data-testid": "input-" + name, name: name, min: min, max: max, type: type, value: value, placeholder: placeholder, onChange: onChange })));
};
exports.InputText = react_2.memo(OgInputText);
