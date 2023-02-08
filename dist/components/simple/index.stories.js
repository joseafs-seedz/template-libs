"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
exports.default = {
    title: 'Components/Simple',
    component: index_1.Simple,
};
var Template = function () { return react_1.default.createElement(index_1.Simple, null); };
exports.Primary = Template.bind({});
exports.Primary.args = {};
