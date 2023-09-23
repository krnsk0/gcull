import { exec } from 'shelljs';
import kleur from 'kleur';

export const deleteBranches = async (branchesToDelete: string[]) => {
  if (branchesToDelete.length === 0) return;
  const branchesToDeleteString = branchesToDelete.join(' ');
  const { code } = exec(`git branch -D ${branchesToDeleteString}`);

  if (code === 0) {
    console.log(kleur.green(`Deleted ${branchesToDelete.length} branches`));
  } else {
    console.log(kleur.red(`Error deleting branches`));
  }
};
