import { exec } from 'shelljs';
import { MAIN_BRANCHES } from '../constants';

export interface GitBranchOutput {
  branches: string[];
  currentBranch: string;
  // main or master
  mainBranch: string;
}

export const getBranches = (): GitBranchOutput => {
  const { stdout } = exec('git branch', { silent: true });
  const allBranches = stdout.split('\n').map((branch) => branch.trim());

  return {
    branches: allBranches
      .map((branch) => branch.replace('* ', ''))
      .filter((branch) => !MAIN_BRANCHES.includes(branch)),
    currentBranch:
      allBranches
        .find((branch) => branch.startsWith('* '))
        ?.replace('* ', '') ?? '',
    mainBranch:
      allBranches.find((branch) => MAIN_BRANCHES.includes(branch)) ?? '',
  };
};
