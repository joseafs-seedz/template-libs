"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
// import { ThemeUI } from '~/theme/theme-provider';
var _1 = require(".");
var component = function (disabled) { return (
// <ThemeUI>
react_2.default.createElement(_1.ButtonText, { text: "Text test", disabled: disabled })
// </ThemeUI>
); };
describe('ButtonText', function () {
    it('Should have text', function () {
        var queryByText = react_1.render(component()).queryByText;
        expect(queryByText('Text test')).toBeTruthy();
    });
});
