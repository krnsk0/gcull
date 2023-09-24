#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = __importDefault(require("kleur"));
const topMenu_1 = require("./topMenu");
const strings_1 = require("./strings");
(0, topMenu_1.menu)()
    .then(() => {
    console.log(kleur_1.default.grey(strings_1.EXITING));
    process.exit(1);
})
    .catch((e) => {
    if (e.message === 'SIGINT') {
        console.log(kleur_1.default.red(strings_1.EXITING));
    }
    process.exit(1);
});
//# sourceMappingURL=index.js.map