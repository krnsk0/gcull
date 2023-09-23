import { exec } from 'shelljs';

// disallow listing/deleting these
const excludedBranches = ['main', 'master', ''];

export interface GitBranches {
  branches: string[];
  currentBranch: string;
}

export const getGitBranches = async (): Promise<GitBranches> => {
  const { stdout } = exec('git branch');
  const allBranches = stdout
    .split('\n')
    .map((branch) => branch.trim())
    .filter((branch) => !excludedBranches.includes(branch));

  return {
    branches: allBranches.map((branch) => branch.replace('* ', '')),
    currentBranch:
      allBranches
        .find((branch) => branch.startsWith('* '))
        ?.replace('* ', '') ?? '',
  };
};
