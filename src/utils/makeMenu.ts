import prompts from 'prompts';
import kleur from 'kleur';
import { GitBranchOutput } from './getBranches';
import { MergedGitBranches } from './getMergedBranches';
import { MENU_INSTRUCTIONS, MENU_MESSAGE, MENU_WARNING } from '../strings';

export const makeMenu = (
  gitBranches: GitBranchOutput,
  mergedBranches: MergedGitBranches
) => {
  return prompts({
    type: 'multiselect',
    name: 'branches',
    message: MENU_MESSAGE,
    instructions: MENU_INSTRUCTIONS,
    warn: MENU_WARNING,
    choices: gitBranches.branches.map((choice) => {
      const isMerged = mergedBranches.branches.includes(choice);
      const mergedText = isMerged ? ` ${kleur.grey('(merged)')}` : '';
      return {
        title: `${choice}${mergedText}`,
        value: choice,
        disabled: choice === gitBranches.currentBranch,
        selected: isMerged,
      };
    }),
  });
};
