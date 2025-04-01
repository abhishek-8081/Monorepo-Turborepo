"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const input_1 = __importDefault(require("@repo/ui/input"));
const navigation_1 = require("next/navigation");
// import {useRouter} from "next/router";
function Home() {
    const router = (0, navigation_1.useRouter)();
    return (React.createElement("div", { style: {
            height: "100vh",
            width: "100vw",
            background: "black",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center"
        } },
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            } },
            React.createElement(input_1.default, { placeholder: "Room Name" }),
            React.createElement("button", { onClick: () => {
                    router.push("/chat/123");
                } }, "Join Room"))));
}
