import { renderHook } from '@testing-library/react-hooks';
import { useHomepage } from '../..';
import { mocks } from '..';

const INITIAL_STATE = { placeholder: false, actions: null };

describe('UI', () => {
  describe('views', () => {
    describe('Homepage', () => {
      describe('hooks', () => {
        test('useHomepage', () => {
          const { result } = renderHook(() => useHomepage(mocks.PROPS));
          expect({ ...result.current, actions: null }).toEqual(INITIAL_STATE);
        });
      });
    });
  });
});
