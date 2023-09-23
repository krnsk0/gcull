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
exports.menu = void 0;
const deleteBranches_1 = require("./utils/deleteBranches");
const getBranches_1 = require("./utils/getBranches");
const getMergedBranches_1 = require("./utils/getMergedBranches");
const makeMenu_1 = require("./utils/makeMenu");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBranches = yield (0, getBranches_1.getBranches)();
    const mergedBranches = yield (0, getMergedBranches_1.getMergedBranches)(allBranches.mainBranch);
    const promptResult = yield (0, makeMenu_1.makeMenu)(allBranches, mergedBranches);
    (0, deleteBranches_1.deleteBranches)(promptResult.branches);
});
exports.menu = menu;
//# sourceMappingURL=topMenu.js.map