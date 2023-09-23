#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = __importDefault(require("kleur"));
const menu_1 = require("./menu");
(0, menu_1.menu)()
    .then(() => {
    console.log(kleur_1.default.grey('Exiting gcull'));
    process.exit(1);
})
    .catch((e) => {
    if (e.message === 'SIGINT') {
        console.log(kleur_1.default.red('Exiting gcull'));
    }
    process.exit(1);
});
//# sourceMappingURL=index.js.map