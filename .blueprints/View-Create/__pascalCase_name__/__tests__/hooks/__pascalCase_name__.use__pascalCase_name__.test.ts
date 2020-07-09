import { renderHook } from '@testing-library/react-hooks';
import { use{{pascalCase name}} } from '../..';
import { mocks } from '..';

const INITIAL_STATE = { placeholder: false, actions: null };

describe('UI', () => {
  describe('views', () => {
    describe('{{pascalCase name}}', () => {
      describe('hooks', () => {
        test('use{{pascalCase name}}', () => {
          const { result } = renderHook(() => use{{pascalCase name}}(fixtures.PROPS));
          expect({ ...result.current, actions: null }).toEqual(INITIAL_STATE);
        });
      });
    });
  });
});
