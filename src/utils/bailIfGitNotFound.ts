import { which, exit } from 'shelljs';
import { NO_GIT_ERROR } from '../strings';

export const bailIfGitNotFound = () => {
  if (!which('git')) {
    console.log(NO_GIT_ERROR);
    exit(1);
  }
};
