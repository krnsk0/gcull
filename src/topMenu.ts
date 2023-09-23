import { getBranches } from './utils/getBranches';
import { getMergedBranches } from './utils/getMergedBranches';
import { makeMenu } from './utils/makeMenu';

export const menu = async () => {
  const allBranches = await getBranches();
  const mergedBranches = await getMergedBranches(allBranches.mainBranch);

  const promptResult = await makeMenu(allBranches, mergedBranches);
  console.log('promptResult: ', promptResult);
};
