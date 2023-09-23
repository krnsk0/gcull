import { exec } from 'shelljs';
import { MAIN_BRANCHES } from '../constants';

export interface MergedGitBranches {
  branches: string[];
}

export const getMergedBranches = (
  mainBranchName: string
): MergedGitBranches => {
  const { stdout } = exec(`git branch --merged ${mainBranchName}`, {
    silent: true,
  });
  return {
    branches: stdout
      .split('\n')
      .map((branch) => branch.trim())
      .map((branch) => branch.replace('* ', ''))
      .filter((branch) => !MAIN_BRANCHES.includes(branch)),
  };
};
