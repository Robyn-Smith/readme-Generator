const prompts = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
      },
    {
      type: 'input',
      message: 'What is your description of this project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install this project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use this project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How can people contribute to this project?',
      name: 'contributing',
    },
    {
      type: 'list',
      message: 'What license does this project use?',
      name: 'license',
      choices: ['none', 'MIT', 'BSD 3', 'apache-2.0', 'gpl-3.0', 'ms-pl', 'osl-3.0']
    },
    {
      type: 'input',
      message: 'How is the project tested?',
      default: 'npm test',
      name: 'testing',
    },
    {
      type: 'input',
      message: 'What is your Github account username?',
      default: 'Robyn-Smith',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      default: 'robyn@email.com',
      name: 'email',
    },
];

module.exports = prompts;