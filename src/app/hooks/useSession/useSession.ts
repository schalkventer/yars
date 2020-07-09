import { useCallback, useRef, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import axios from 'axios';
import { addSeconds as addSecondsToDate } from 'date-fns';

import { types } from '.';

export const useSession = (props?: types.Props): types.State & { actions: types.Actions } => {
  const { onChange } = props || {};

  const [user, setUser] = useLocalStorage<undefined | null | types.User>('session.user', null);

  useEffect(() => {
    if (onChange && user !== undefined) {
      onChange({ user });
    }
  });

  /**
   * @name signOut
   *
   * @description TODO Add description
   */
  const signOut = useCallback(async () => {
    if (!user) {
      throw new Error('User needs to be logged in, in order to sign out.');
    }

    const { data } = await axios.post<{
      message: 'Unauthenticated' | 'Successfully logged out';
    }>(
      `${process.env.AUTH_API}/auth/logout`,
      {},
      { headers: { Authorization: `Bearer ${user.token}` } },
    );

    if (data.message === 'Unauthenticated') {
      throw new Error('User needs to be logged in, in order to sign out.');
    }

    if (data.message !== 'Successfully logged out') {
      throw new Error('Request to API failed');
    }

    setUser(null);
  }, [user, setUser]);

  /**
   * @name signIn
   *
   * @description TODO Add description
   */
  const signIn = useCallback(
    async (innerProps: { email: string; password: string }): Promise<Error | boolean> => {
      const { data } = await axios.post<{ error: 'Unauthorized' } | types.ServerResponse>(
        `${process.env.AUTH_API}/auth/login`,
        {
          email: innerProps.email,
          password: innerProps.password,
        },
      );

      if ('error' in data && data.error === 'Unauthorized') {
        return false;
      }

      if ('error' in data) {
        return new Error();
      }

      setUser({
        email: data.user.email,
        name: data.user.name,
        token: data.access_token,
        validUntil: addSecondsToDate(new Date(), data.expires_in),
      });

      return true;
    },
    [setUser],
  );

  /**
   * @name actions
   *
   * @description See description in types.
   */
  const actions: types.Actions = {
    signOut,
    signIn,
  };

  const actionsRef = useRef(actions);
  actionsRef.current = actions;

  return {
    user,
    actions,
  };
};
