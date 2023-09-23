import { exec } from 'shelljs';

// disallow listing/deleting these
const mainBranches = ['main', 'master', ''];

export interface GitBranchOutput {
  branches: string[];
  currentBranch: string;
  // main or master
  mainBranch: string;
}

export const getGitBranches = async (): Promise<GitBranchOutput> => {
  const { stdout } = exec('git branch');
  const allBranches = stdout.split('\n').map((branch) => branch.trim());

  return {
    branches: allBranches
      .map((branch) => branch.replace('* ', ''))
      .filter((branch) => !mainBranches.includes(branch)),
    currentBranch:
      allBranches
        .find((branch) => branch.startsWith('* '))
        ?.replace('* ', '') ?? '',
    mainBranch:
      allBranches.find((branch) => mainBranches.includes(branch)) ?? '',
  };
};
