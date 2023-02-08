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
exports.FormSimple = exports.SchedulingInitial = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("react");
var text_1 = require("../../../components/inputs/text");
var grid_1 = require("../../../components/blocks/grid");
var text_2 = require("../../../components/buttons/text");
exports.SchedulingInitial = {
    name: '',
};
var OgFormSimple = function (_a) {
    var _b = react_1.useState({}), data = _b[0], setData = _b[1];
    var handlerSubmit = function (event) {
        event.preventDefault();
        console.log('handlerSubmit', data);
    };
    return (react_1.default.createElement("form", { onSubmit: handlerSubmit },
        react_1.default.createElement(text_1.InputText, { name: "name", placeholder: "Form simples", onChange: function (e) { return setData(e.target.value); } }),
        react_1.default.createElement(grid_1.Grid, { flex: true, mgn: [2, 1] },
            react_1.default.createElement(text_2.ButtonText, { color: "primary", text: "Agendar", type: "submit" })),
        react_1.default.createElement(grid_1.Grid, { flex: true, mgn: [2, 1] }, data && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            "Simula\u00E7\u00E3o de Valores enviados:",
            JSON.stringify(data))))));
};
exports.FormSimple = react_2.memo(OgFormSimple);
