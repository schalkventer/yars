import { useCallback, useRef } from 'react';
import { useToggle } from 'react-use';
// import { v4 as createId } from 'uuid';

import { types, constants } from '../../..';

/**
 * @name  {{ $hook }}
 *
 * @description TODO add description
 */
export const {{ $hook }} = (props: types.LoadedProps): { placeholder: boolean, actions: {} } => {
  const { initialData, callbacks } = props;
  const [placeholder, setPlaceholder] = useToggle(initialData.placeholder);

  /**
   * @name togglePlaceholder
   *
   * @description Used as a shorthand wrapper to set the alert value of a
   * specific applicant in this hook (not exposed via the hook's API).
   */
  const approvePlaceholder = useCallback(() => {
    callbacks.placeholder();
    setPlaceholder(true);
  }, [setPlaceholder, callbacks]);

  /**
   * @name actions
   *
   * @description See description in types.
   */
  const actions: types.Actions = {
    approvePlaceholder,
  };

  const actionsRef = useRef(actions);
  actionsRef.current = actions;

  return {
    placeholder,
    actions: actionsRef.current,
  };
};

export default {{ $hook }};
