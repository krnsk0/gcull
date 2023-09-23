import { getGitBranches } from './utils/getGitBranches';
import { makeMenu } from './utils/makeMenu';

export const menu = async () => {
  const branches = await getGitBranches();
  const result = await makeMenu(branches);
  console.log('result: ', result);
};
