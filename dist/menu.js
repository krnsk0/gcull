'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.menu = void 0;
const prompts_1 = __importDefault(require('prompts'));
const getBranches_1 = require('./utils/getBranches');
const kleur_1 = __importDefault(require('kleur'));
const makeMenu = (choices) => {
  return (0, prompts_1.default)({
    type: 'multiselect',
    name: 'branches',
    message: `Which branches should we delete?`,
    instructions: `\n${kleur_1.default.green(
      'space'
    )} = select, ${kleur_1.default.green(
      'enter'
    )} = submit, ${kleur_1.default.green('a')} = select all`,
    choices: choices.map((choice) => ({ title: choice, value: choice })),
  });
};
const menu = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const branches = yield (0, getBranches_1.getBranches)();
    const result = yield makeMenu(branches);
    console.log('result: ', result);
  });
exports.menu = menu;
//# sourceMappingURL=menu.js.map
