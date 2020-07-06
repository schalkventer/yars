import { useCallback, useRef } from 'react';
import { useToggle } from 'react-use';
// import { v4 as createId } from 'uuid';

import { types } from '.';

/**
 * @name useComponent
 *
 * @description TODO Add description
 */
export const useComponent = (
  props: types.LoadedProps,
): types.State & { actions: types.Actions } => {
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
