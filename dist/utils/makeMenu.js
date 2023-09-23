"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMenu = void 0;
const prompts_1 = __importDefault(require("prompts"));
const kleur_1 = __importDefault(require("kleur"));
const makeMenu = (gitBranches) => {
    return (0, prompts_1.default)({
        type: 'multiselect',
        name: 'branches',
        message: `Which branches should we delete?`,
        instructions: `\n${kleur_1.default.green('space')} = select, ${kleur_1.default.green('enter')} = submit, ${kleur_1.default.green('a')} = select all\n`,
        warn: '- Cannot delete the current branch -',
        choices: gitBranches.branches.map((choice) => ({
            title: choice,
            value: choice,
            disabled: choice === gitBranches.currentBranch,
        })),
    });
};
exports.makeMenu = makeMenu;
//# sourceMappingURL=makeMenu.js.map