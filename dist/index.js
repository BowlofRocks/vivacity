"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("I hate you!");
});
app.get("/hi", (req, res) => {
    res.send("hi");
});
app.get("/awesome/applicant", (req, res) => {
    const funFacts = {
        name: "Microsoft Copilot",
        funFact1: "I can understand and communicate fluently in multiple languages.",
        funFact2: "I can generate creative content such as poems, stories, and even code!",
        funFact3: "I'm always learning and improving with each interaction."
    };
    res.json(funFacts);
});
app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});
