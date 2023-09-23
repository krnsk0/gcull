import { deleteBranches } from './utils/deleteBranches';
import { getBranches } from './utils/getBranches';
import { getMergedBranches } from './utils/getMergedBranches';
import { makeMenu } from './utils/makeMenu';

export const menu = async () => {
  const allBranches = await getBranches();
  const mergedBranches = await getMergedBranches(allBranches.mainBranch);
  const promptResult = await makeMenu(allBranches, mergedBranches);
  deleteBranches(promptResult.branches);
};
