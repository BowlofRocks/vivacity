"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("HAHAHAAHHAHAHA");
});
app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});
