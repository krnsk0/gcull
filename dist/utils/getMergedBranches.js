"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMergedBranches = void 0;
const shelljs_1 = require("shelljs");
const constants_1 = require("../constants");
const getMergedBranches = (mainBranchName) => {
    const { stdout } = (0, shelljs_1.exec)(`git branch --merged ${mainBranchName}`, {
        silent: true,
    });
    return {
        branches: stdout
            .split('\n')
            .map((branch) => branch.trim())
            .map((branch) => branch.replace('* ', ''))
            .filter((branch) => !constants_1.MAIN_BRANCHES.includes(branch)),
    };
};
exports.getMergedBranches = getMergedBranches;
//# sourceMappingURL=getMergedBranches.js.map