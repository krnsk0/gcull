import kleur from 'kleur';
import { deleteBranches } from './utils/deleteBranches';
import { getBranches } from './utils/getBranches';
import { getMergedBranches } from './utils/getMergedBranches';
import { makeMenu } from './utils/makeMenu';
import { EXITING } from './strings';

export const menu = async () => {
  const allBranches = getBranches();
  if (allBranches.branches.length === 0) {
    console.log(kleur.grey(EXITING));
    process.exit(1);
  } else {
    const mergedBranches = getMergedBranches(allBranches.mainBranch);
    const promptResult = await makeMenu(allBranches, mergedBranches);
    deleteBranches(promptResult.branches);
  }
};
