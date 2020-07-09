/**
 * @name User
 *
 * @description TODO Add description
 */
export interface User {
  /**
   * The full name of the user that is currently logged in. For example `'John
   * Smith'.
   */
  name: string;

  /**
   * The email address of the user that is currently logged in. For example
   * `'john@smith.com'.
   */
  email: string;

  /**
   * An [access token](https://en.wikipedia.org/wiki/Access_token) that is
   * associated with the logged in user. This should be included in the
   * `Authorization` header of all HTTP requests. *
   */
  token: string;

  /**
   * TODO Add description
   */
  validUntil: Date;
}

/**
 * @name State
 *
 * @description These are (interactive/changeable) values provided by the hook.
 *
 * Note that components that consume any of these values will re-render as the
 * values change.
 */
export interface State {
  /**
   * If a user is logged in then `user` value will be an object. However `null`
   * means that no user is logged in, whereas `undefined` means that we don't
   * know yet whether a user is logged in or not (i.e. the relevant data is
   * still loading).
   */
  user: undefined | null | User;
}

/**
 * @name Actions
 *
 * @description Actions supplied from this hook.
 *
 * Note that this object is stored in a React ref, this means that any changes
 * to the `Action` object will not trigger a UI re-render.
 *
 * This allows us to pass the `actions` object (as is) to all our presentation
 * components  without worrying that it might trigger unneeded re-renders. This
 * is similar to how the `dispatch` callback is intended to be used when using
 * React's `useReducer`.
 */
export interface Actions {
  signOut: () => Promise<void>;
  signIn: (props: { email: string; password: string }) => Promise<boolean | Error>;
}

/**
 * @name Props
 *
 * @description TODO Add description
 */
export interface Props {
  onChange: (props: State) => void;
}

/* eslint-disable camelcase */

/**
 * @name ServerResponse
 *
 * @description TODO Add description
 */
export interface ServerResponse {
  access_token: string;
  token_type: 'bearer';
  expires_in: number;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
    permissions: [];
  };
}

/* eslint-disable camelcase */
