import { exec } from 'shelljs';
import kleur from 'kleur';
import { BRANCH_DELETION_ERROR, DELETED_BRANCHES } from '../strings';

export const deleteBranches = (branchesToDelete: string[]) => {
  if (branchesToDelete.length === 0) return;
  const branchesToDeleteString = branchesToDelete.join(' ');
  const { code } = exec(`git branch -D ${branchesToDeleteString}`);

  if (code === 0) {
    console.log(kleur.green(`${DELETED_BRANCHES} ${branchesToDelete.length}`));
  } else {
    console.log(kleur.red(BRANCH_DELETION_ERROR));
  }
};
