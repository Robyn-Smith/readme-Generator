const prompts = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'language',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
];

module.exports = prompts;