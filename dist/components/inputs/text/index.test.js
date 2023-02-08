"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var _1 = require(".");
var mockFn = jest.fn();
var inputValue = 'Yamamoto Genryuusai Shigekuni';
var component = (
// <ThemeUI>
react_2.default.createElement(_1.InputText, { name: "test", onChange: mockFn, label: "Input test" })
// </ThemeUI>
);
describe('InputText', function () {
    it('Should check input change', function () {
        var getByTestId = react_1.render(component).getByTestId;
        var input = getByTestId('input-test');
        react_1.fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
        expect(mockFn).toBeCalledTimes(1);
    });
});
