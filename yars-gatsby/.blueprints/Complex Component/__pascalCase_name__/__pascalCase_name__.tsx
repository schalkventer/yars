import React, { FC, useContext, useState } from 'react';
import { useMount } from 'react-use';

import * as types from './{{pascalCase name}}.types';
import { context } from '@/api/example';
import { Presentation } from './{{pascalCase name}}.Presentation'
import { transformPosts } from './{{pascalCase name}}.transformPosts';

/**
 * @name {{pascalCase name}}
 *
 * @description TODO: Add description
 */
export const {{pascalCase name}}: FC<types.Props> = () => {
  const { getPosts } = useContext(context);
  const [posts, setPosts] = useState<types.Post[]>([])
  const [phase, setPhase] = useState<types.phase>('loading');

  /**
   * @name updatePosts
   *
   * @description TODO Add description
   */
  const updatePosts = async () => {
    if (phase !== 'loading') {
      setPhase('loading')
    }

    const response = await getPosts();
    
    if (response instanceof Error) {
      setPhase('error')
      return;
    }

    const posts = transformPosts(response);
    setPosts(posts);
    setPhase('resting');
  }

  /**
   * @name toggleSelect
   *
   * @description TODO: Add description
   */
  const toggleSelect = (id: string) => {
    const newPosts = posts.map((item) => ({ ...item, selected: item.id === id }));
    setPosts(newPosts);
  }

  /**
   * TODO: Add description
   */
  useMount(updatePosts)

  /**
   * @name actions
   *
   * @description TODO: Add description
   */
  const actions: types.Actions = {
    updatePosts,
    toggleSelect,
  }

  return <Presentation posts={posts} phase={phase} actions={actions} />
}

export default {{pascalCase name}};
