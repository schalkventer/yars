import { renderHook } from '@testing-library/react-hooks';
import { {{ $hook }} } from '../../hooks';
import { mocks } from '..';

const INITIAL_STATE = { placeholder: false, actions: null };

describe('UI', () => {
  describe('views', () => {
    describe('{{ $view }}', () => {
      describe('hooks', () => {
        test('{{ $hook }}', () => {
          const { result } = renderHook(() => {{ $hook }}(mocks.PROPS));
          
          expect({ ...result.current, actions: null }).toEqual(INITIAL_STATE);
        });
      });
    });
  });
});
