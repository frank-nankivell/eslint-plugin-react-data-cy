module.exports = {
  rules: {
    'react-data-cy-rule': require('./rules/react-data-cy-rule'),
  },
  configs: {
    recommended: {
      plugins: ['react-data-cy'],
      rules: {
        'react-data-cy/react-data-cy-rule': 'error',
      },
    },
  },
};
