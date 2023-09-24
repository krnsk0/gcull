import kleur from 'kleur';

export const NO_GIT_ERROR = kleur.red('This script requires git');

export const MENU_MESSAGE = `Which branches should we delete?`;

export const MENU_INSTRUCTIONS = `\n${kleur.green(
  'space'
)} = select, ${kleur.green('enter')} = submit, ${kleur.green(
  'a'
)} = select all\n`;

export const MENU_WARNING = '- Cannot delete the current branch -';

export const DELETED_BRANCHES = 'Deleted branches:';

export const BRANCH_DELETION_ERROR = 'Error deleting branches';

export const EXITING = kleur.grey('Exiting gcull');
