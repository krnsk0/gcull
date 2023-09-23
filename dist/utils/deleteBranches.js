"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranches = void 0;
const shelljs_1 = require("shelljs");
const kleur_1 = __importDefault(require("kleur"));
const deleteBranches = (branchesToDelete) => {
    if (branchesToDelete.length === 0)
        return;
    const branchesToDeleteString = branchesToDelete.join(' ');
    const { code } = (0, shelljs_1.exec)(`git branch -D ${branchesToDeleteString}`);
    if (code === 0) {
        console.log(kleur_1.default.green(`Deleted ${branchesToDelete.length} branches`));
    }
    else {
        console.log(kleur_1.default.red(`Error deleting branches`));
    }
};
exports.deleteBranches = deleteBranches;
//# sourceMappingURL=deleteBranches.js.map