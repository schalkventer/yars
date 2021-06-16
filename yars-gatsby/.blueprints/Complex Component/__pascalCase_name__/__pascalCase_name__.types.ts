/**
 * @name phase
 *
 * @description TODO: Add description
 */
export type phase = 'loading' | 'resting' | 'error';

/**
 * @name Post
 *
 * @description TODO: Add description
 */
export interface Post {
  id: string;
  body: string;
  title: string;
  selected: boolean;
}

/**
 * @name State
 *
 * @description TODO: Add description
 */
export interface State {
  posts: Post[];
  phase: phase;
}

/**
 * @name Actions
 *
 * @description TODO: Add description
 */
export interface Actions {
  updatePosts: () => void,
  toggleSelect: (id: string) => void,
}

/**
 * @name Props
 *
 * @description TODO: Add description
 */
export interface Props {}