import { renderHook } from '@testing-library/react-hooks';
import { useNested } from '../../hooks';
import { mocks } from '..';

const INITIAL_STATE = { placeholder: false, actions: null };

describe('UI', () => {
  describe('views', () => {
    describe('Homepage', () => {
      describe('hooks', () => {
        test('useNested', () => {
          const { result } = renderHook(() => useNested(mocks.PROPS));

          expect({ ...result.current, actions: null }).toEqual(INITIAL_STATE);
        });
      });
    });
  });
});
