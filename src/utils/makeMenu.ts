import prompts from 'prompts';
import kleur from 'kleur';
import { GitBranches } from './getGitBranches';

export const makeMenu = (gitBranches: GitBranches) => {
  return prompts({
    type: 'multiselect',
    name: 'branches',
    message: `Which branches should we delete?`,
    instructions: `\n${kleur.green('space')} = select, ${kleur.green(
      'enter'
    )} = submit, ${kleur.green('a')} = select all\n`,
    warn: '- Cannot delete the current branch -',
    choices: gitBranches.branches.map((choice) => ({
      title: choice,
      value: choice,
      disabled: choice === gitBranches.currentBranch,
    })),
  });
};
