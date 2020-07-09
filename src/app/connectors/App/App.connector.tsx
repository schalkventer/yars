import React, { FC } from 'react';
import { Base as UI } from '../../../ui/views';

/**
 * @name App
 *
 * @description TODO Add description
 */
export const App: FC = (props) => {
  const { children } = props;

  return (
    <UI header={null} footer={null}>
      {children}
    </UI>
  );
};

export default App;
