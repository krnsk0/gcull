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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranches = void 0;
const shelljs_1 = require("shelljs");
const constants_1 = require("../constants");
const getBranches = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { stdout } = (0, shelljs_1.exec)('git branch');
    const allBranches = stdout.split('\n').map((branch) => branch.trim());
    return {
        branches: allBranches
            .map((branch) => branch.replace('* ', ''))
            .filter((branch) => !constants_1.MAIN_BRANCHES.includes(branch)),
        currentBranch: (_b = (_a = allBranches
            .find((branch) => branch.startsWith('* '))) === null || _a === void 0 ? void 0 : _a.replace('* ', '')) !== null && _b !== void 0 ? _b : '',
        mainBranch: (_c = allBranches.find((branch) => constants_1.MAIN_BRANCHES.includes(branch))) !== null && _c !== void 0 ? _c : '',
    };
});
exports.getBranches = getBranches;
//# sourceMappingURL=getBranches.js.map