"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranches = void 0;
const shelljs_1 = require("shelljs");
const kleur_1 = __importDefault(require("kleur"));
const deleteBranches = (branchesToDelete) => __awaiter(void 0, void 0, void 0, function* () {
    if (branchesToDelete.length === 0)
        return;
    const branchesToDeleteString = branchesToDelete.join(' ');
    const branchesToDeleteNewline = branchesToDelete.join('\n');
    const { code } = (0, shelljs_1.exec)(`git branch -D ${branchesToDeleteString}`);
    if (code === 0) {
        console.log(`${kleur_1.default.green(`Deleted:`)}\n${branchesToDeleteNewline}`);
    }
    else {
        console.log(`${kleur_1.default.red(`Failed to delete:`)}\n${branchesToDeleteNewline}`);
    }
});
exports.deleteBranches = deleteBranches;
//# sourceMappingURL=deleteBranches.js.map