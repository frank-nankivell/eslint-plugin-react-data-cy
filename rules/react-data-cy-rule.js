module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce data-cy attribute on configured components',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          testAttributes: {
            type: 'array',
            items: { type: 'string' },
          },
          components: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const config = context.options[0] || {};
    const validAttributes = config.testAttributes || ['data-cy'];
    const validComponents = new Set(config.components || []);
    const appliesToAllComponents = validComponents.has('*');

    return {
      JSXOpeningElement(node) {
        const componentName = node.name.name;

        // Apply rule to all components if '*' is present, otherwise check specific components
        if (!appliesToAllComponents && !validComponents.has(componentName))
          return;

        const hasValidAttribute = node.attributes.some(
          (attr) =>
            attr.type === 'JSXAttribute' &&
            validAttributes.includes(attr.name.name),
        );

        if (!hasValidAttribute) {
          context.report({
            node,
            message: `React components should have a valid attribute for e2e testing: ${validAttributes.join(
              ', ',
            )}`,
          });
        }
      },
    };
  },
};
