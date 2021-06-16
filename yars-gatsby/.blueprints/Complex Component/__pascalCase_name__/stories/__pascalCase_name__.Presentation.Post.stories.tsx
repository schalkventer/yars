import React from 'react';
import { Post } from '../{{pascalCase name}}.Presentation.Post';
import * as mocks from '../{{pascalCase name}}.mocks';

export default {
  title: 'views/{{ $viewName }}/{{pascalCase name}}/{{pascalCase name}}.Presentation.Post',
  component: Post,
}

export const Default = () =>  <Post {...mocks.POSTS[0]} />
