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
exports.FormikScheduling = exports.SchedulingInitial = void 0;
var formik_1 = require("formik");
var react_1 = __importStar(require("react"));
var react_2 = require("react");
var text_1 = require("../../../components/inputs/text");
var grid_1 = require("../../../components/blocks/grid");
var text_2 = require("../../../components/buttons/text");
exports.SchedulingInitial = {
    name: '',
};
var OgFormikScheduling = function (_a) {
    var formRef = react_1.useRef(null);
    var _b = react_1.useState({}), data = _b[0], setData = _b[1];
    var handlerSubmit = function (values) {
        if (!values)
            return;
        setData(values);
        console.log('handlerSubmit', values);
    };
    var handlerValidate = function (values) {
        // const handlerValidate = (values: TpSchedulingItem) => {
        if (!values)
            return;
        // setValues(values);
        console.log('handlerValidate', values);
    };
    return (react_1.default.createElement(formik_1.Formik, { innerRef: formRef, initialValues: exports.SchedulingInitial, onSubmit: handlerSubmit, validate: handlerValidate },
        react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { component: text_1.InputText, id: "name", name: "name", placeholder: "Qualquer coisa" }),
            react_1.default.createElement(grid_1.Grid, { flex: true, mgn: [2, 1] },
                react_1.default.createElement(text_2.ButtonText, { color: "primary", text: "Agendar", type: "submit" })),
            react_1.default.createElement(grid_1.Grid, { flex: true, mgn: [2, 1] }, data && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                "Simula\u00E7\u00E3o de Valores enviados:",
                JSON.stringify(data)))))));
};
exports.FormikScheduling = react_2.memo(OgFormikScheduling);
