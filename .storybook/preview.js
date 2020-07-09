import React from 'react';
import { create } from '@storybook/theming';
import { addParameters, addDecorator } from '@storybook/react';

import { Base } from '../src/ui/views';

const ORDER = [
	'tokens',
	'elements',
	'custom',
	'views',
	'connectors',
]

/**
 * Wraps all Storybook previews in the `<Base />` component.
 */
addDecorator((Story) => <Base><Story /></Base>);

/*
 * Configure Storybook 
 */

const theme = create({
  base: 'light',
  brandTitle: 'Webapp Documentation',
});

addParameters({ 
	options: { 
		theme,
		name: 'Webapp Documentation',
		showRoots: true,
		storySort: (a, b) => {
			const aIndex = ORDER.findIndex(value => a[0].includes(value));
			const bIndex = ORDER.findIndex(value => b[0].includes(value));
			
			if (aIndex < bIndex) {
				return -1;
			}
			
			if (aIndex > bIndex) {
				return 1;
			}
			
			return 0;
    }
	} 
});
