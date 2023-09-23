import { exec } from 'shelljs';
import { MAIN_BRANCHES } from '../constants';

export interface MergedGitBranches {
  branches: string[];
}

export const getMergedBranches = async (
  mainBranchName: string
): Promise<MergedGitBranches> => {
  const { stdout } = exec(`git branch --merged ${mainBranchName}`);
  return {
    branches: stdout
      .split('\n')
      .map((branch) => branch.trim())
      .map((branch) => branch.replace('* ', ''))
      .filter((branch) => !MAIN_BRANCHES.includes(branch)),
  };
};
