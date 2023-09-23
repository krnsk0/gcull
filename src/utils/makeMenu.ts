import prompts from 'prompts';
import kleur from 'kleur';
import { GitBranchOutput } from './getBranches';
import { MergedGitBranches } from './getMergedBranches';

export const makeMenu = (
  gitBranches: GitBranchOutput,
  mergedBranches: MergedGitBranches
) => {
  return prompts({
    type: 'multiselect',
    name: 'branches',
    message: `Which branches should we delete?`,
    instructions: `\n${kleur.green('space')} = select, ${kleur.green(
      'enter'
    )} = submit, ${kleur.green('a')} = select all\n`,
    warn: '- Cannot delete the current branch -',
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
