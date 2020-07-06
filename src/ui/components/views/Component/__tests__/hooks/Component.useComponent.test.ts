import { renderHook } from '@testing-library/react-hooks';
import { useComponent } from '../..';
import { fixtures } from '..';

const INITIAL_STATE = { placeholder: false, actions: null };

describe('UI', () => {
  describe('views', () => {
    describe('Component', () => {
      describe('hooks', () => {
        test('useComponent', () => {
          const { result } = renderHook(() => useComponent(fixtures.PROPS));
          expect({ ...result.current, actions: null }).toEqual(INITIAL_STATE);
        });
      });
    });
  });
});
