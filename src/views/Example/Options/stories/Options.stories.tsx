import React from 'react';
import { action } from '@storybook/addon-actions';
import { Options } from '../../Options';
import { createAsyncMock } from '@/utilities/createAsyncMock';

export default {
  title: 'views/Example/Options/Options',
  component: Options,
}

export const Default = () => <Options onExport={null} onEntering={action('onEntering')} onUpdate={createAsyncMock(undefined, 'onUpdate')} />
