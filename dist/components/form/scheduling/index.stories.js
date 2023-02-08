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
exports.Scheduling = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
exports.default = {
    title: 'Components/Form/Simple',
    component: _1.FormSimple,
    args: {
        name: 'lorem',
    },
};
var Template = function (args) { return (react_1.default.createElement(_1.FormSimple, __assign({}, args))); };
exports.Scheduling = Template.bind({});
exports.Scheduling.args = {};
