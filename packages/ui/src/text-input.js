"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;
function TextInput({ placeholder }) {
    return React.createElement("input", { placeholder: placeholder, style: {
            padding: 10,
            margin: 10,
            borderColor: "black",
            borderWidth: 1
        } });
}
