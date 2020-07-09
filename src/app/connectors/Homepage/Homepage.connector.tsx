// import { navigate } from 'gatsby';
import React, { FC, useRef, useState, useEffect } from 'react';

import { App } from '..';
import { useSession } from '../../hooks';
import { types as viewsTypes, Homepage as View } from '../../../ui/views';
import { getInitialData } from './helpers';

/**
 * @name Homepage
 *
 * Initialises the rendering of the {{ $targetView }} view component at a specific
 * route and populates it with initial date and app-logic-specific callback functions.
 */
export const Homepage: FC = () => {
  const { user } = useSession();

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/auth');
  //   }
  // }, [user]);

  const [initialData, setInitialData] = useState<viewsTypes.Homepage.InitialData | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!user || !user.token) return;
    getInitialData(user.token).then(setInitialData);
  }, [user]);

  /* @name callbacks
   *
   * @description TODO Add description
   */
  const callbacks: viewsTypes.Homepage.Callbacks = {
    placeholder: () => undefined,
  };

  const callbackRefs = useRef(callbacks);
  callbackRefs.current = callbacks;

  return (
    <App>
      <View initialData={initialData} callbacks={callbackRefs.current} />
    </App>
  );
};

export default Homepage;
