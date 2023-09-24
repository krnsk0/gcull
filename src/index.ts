#! /usr/bin/env node
import kleur from 'kleur';
import { menu as topMenu } from './topMenu';
import { EXITING } from './strings';

topMenu()
  .then(() => {
    console.log(kleur.grey(EXITING));
    process.exit(1);
  })
  .catch((e: Error) => {
    if (e.message === 'SIGINT') {
      console.log(kleur.red(EXITING));
    }
    process.exit(1);
  });
