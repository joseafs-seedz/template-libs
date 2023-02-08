"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
exports.default = {
    title: 'Components/Inputs/InputText',
    component: _1.InputText,
    args: {
        name: 'storybook',
        onChange: function (e) { return console.log('test Change', e.target.value); },
    },
};
var Template = function (args) { return (react_1.default.createElement(_1.InputText, __assign({}, args))); };
exports.Primary = Template.bind({});
exports.Primary.args = {};
