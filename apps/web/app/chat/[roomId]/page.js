"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const input_1 = __importDefault(require("@repo/ui/input"));
function default_1() {
    return React.createElement("div", { style: {
            width: "100vw",
            height: "100vh",
            display: "fl ex",
            justifyContent: "space-between",
            flexDirection: "column"
        } },
        React.createElement("div", null, "Chat Room this is"),
        React.createElement("div", null,
            React.createElement(input_1.default, { placeholder: "Chat Here" })));
}
