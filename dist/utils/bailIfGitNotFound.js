"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bailIfGitNotFound = void 0;
const shelljs_1 = require("shelljs");
const strings_1 = require("../strings");
const bailIfGitNotFound = () => {
    if (!(0, shelljs_1.which)('git')) {
        console.log(strings_1.NO_GIT_ERROR);
        (0, shelljs_1.exit)(1);
    }
};
exports.bailIfGitNotFound = bailIfGitNotFound;
//# sourceMappingURL=bailIfGitNotFound.js.map