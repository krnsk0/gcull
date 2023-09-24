"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_GIT_ERROR = exports.EXITING = void 0;
const kleur_1 = __importDefault(require("kleur"));
exports.EXITING = kleur_1.default.grey('Exiting gcull');
exports.NO_GIT_ERROR = kleur_1.default.red('This script requires git');
//# sourceMappingURL=strings.js.map