import faker from 'faker';
// import fakerE from 'faker-enhanced';
import { action } from '@storybook/addon-actions';
import { types } from '..';

/**
 * @name CALLBACKS
 *
 * @description See type for description.
 */
export const CALLBACKS: types.Callbacks = {
  placeholder: action('placeholder'),
};

/**
 * @name INITIAL_DATA
 *
 * @description See type for description.
 */
export const INITIAL_DATA: types.InitialData = {
  placeholder: false,
  id: faker.random.uuid(),
};

/**
 * @name Props
 *
 * @description See type for description.
 */
export const PROPS: types.LoadedProps = {
  callbacks: CALLBACKS,
  initialData: INITIAL_DATA,
};

/**
 * @name STATE
 *
 * @description See type for description.
 */
export const STATE: types.State = {
  placeholder: false,
};

/**
 * @name Actions
 *
 * @description See type for description.
 */
export const ACTIONS: types.Actions = {
  approvePlaceholder: action('approvePlaceholder'),
};
