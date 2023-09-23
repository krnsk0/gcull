"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranches = void 0;
const shelljs_1 = require("shelljs");
const constants_1 = require("../constants");
const getBranches = () => {
    var _a, _b, _c;
    const { stdout } = (0, shelljs_1.exec)('git branch', { silent: true });
    const allBranches = stdout.split('\n').map((branch) => branch.trim());
    return {
        branches: allBranches
            .map((branch) => branch.replace('* ', ''))
            .filter((branch) => !constants_1.MAIN_BRANCHES.includes(branch)),
        currentBranch: (_b = (_a = allBranches
            .find((branch) => branch.startsWith('* '))) === null || _a === void 0 ? void 0 : _a.replace('* ', '')) !== null && _b !== void 0 ? _b : '',
        mainBranch: (_c = allBranches.find((branch) => constants_1.MAIN_BRANCHES.includes(branch))) !== null && _c !== void 0 ? _c : '',
    };
};
exports.getBranches = getBranches;
//# sourceMappingURL=getBranches.js.map