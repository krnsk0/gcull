import prompts from 'prompts';

const makeMenu = () => {
  return prompts({
    type: 'multiselect',
    name: 'branches',
    message: 'Which branches should we delete?',
    choices: [{ title: 'master', value: 'master' }],
  });
};

export const menu = async () => {
  const result = await makeMenu();
  console.log('result: ', result);
};
