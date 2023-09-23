import { exec } from 'shelljs';
import kleur from 'kleur';

export const deleteBranches = async (branchesToDelete: string[]) => {
  if (branchesToDelete.length === 0) return;
  const branchesToDeleteString = branchesToDelete.join(' ');
  const branchesToDeleteNewline = branchesToDelete.join('\n');
  const { code } = exec(`git branch -D ${branchesToDeleteString}`);

  if (code === 0) {
    console.log(kleur.green(`Deleted:\n${branchesToDeleteNewline}`));
  } else {
    console.log(kleur.red(`Failed to delete:\n${branchesToDeleteNewline}`));
  }
};
