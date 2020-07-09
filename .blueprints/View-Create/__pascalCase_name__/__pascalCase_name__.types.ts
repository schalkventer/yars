// import * as types from './types'; export * from './types;
// import * as types from './types'; export * from './types;

/**
 * @name alert
 *
 * @description A specific, mutually exclusive, alert that can be shown on an
 * applicant.
 *
 * These keys correspond to the following situations:
 *
 * - '...': ...
 */
export type alert = 'placeholder';

/**
 * @name phase
 *
 * @description One of several mutually exclusive states that the entire
 * component can be in.
 */
export type phase = 'starting';

/**
 * @name Callbacks
 *
 * @description Functions passed from the core app logic to the view-layer in
 * order to interact with the app/API after the view has loaded.
 */
export interface Callbacks {
  placeholder: () => void;
}

/**
 * @name InitialData
 *
 * @description The initial data loaded to this view from outside. This value
 * never changes once loaded, all additional responses from outside the view
 * should be requested via the callbacks property.
 */
export interface InitialData {
  /**
   * TODO Add description
   */
  placeholder: boolean;

  /**
   *
   */
  id: string;
}

/**
 * @name Props
 *
 * @description The props exposed by this view. This project object serve as the
 * primary API between the view-layer and the core app logic. This is the only
 * place where the initial data and callbacks pass through.
 */
export interface Props {
  initialData?: InitialData;
  callbacks: Callbacks;
}

/**
 * @name LoadedProps
 *
 * @description This is the state of the view's props when the initial data has
 * finished loading and it can be guaranteed to be present.
 */
export type LoadedProps = Required<Props>;

/**
 * @name State
 *
 * @description These are (interactive/changeable) values provided by this
 * component's primary hook.
 *
 * Note that components that consume any of these values will re-render as the
 * values change.
 */
export interface State {
  /**
   * TODO Add description
   */
  placeholder: boolean;
}

/**
 * @name Actions
 *
 * @description Actions supplied to the presentation layer from this component's
 * primary hook.
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
  approvePlaceholder: () => void;
}
