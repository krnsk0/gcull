import { exec } from 'shelljs';
import kleur from 'kleur';

export const deleteBranches = (branchesToDelete: string[]) => {
  if (branchesToDelete.length === 0) return;
  const branchesToDeleteString = branchesToDelete.join(' ');
  const { code } = exec(`git branch -D ${branchesToDeleteString}`);

  if (code === 0) {
    console.log(kleur.green(`Deleted branches: ${branchesToDelete.length}`));
  } else {
    console.log(kleur.red(`Error deleting branches`));
  }
};
