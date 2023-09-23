import { getBranches } from './utils/getBranches';
import { makeMenu } from './utils/makeMenu';

export const menu = async () => {
  const branches = await getBranches();
  const result = await makeMenu(branches);
  console.log('result: ', result);
};
