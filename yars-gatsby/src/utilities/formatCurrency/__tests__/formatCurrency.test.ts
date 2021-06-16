import formatCurrency from '../formatCurrency';

describe('UI Components', (): void => {
  describe('Helpers', (): void => {
    describe('formatCurrency', (): void => {
      describe('toZAR', (): void => {
        describe('Unit Tests', (): void => {
          test('Tiny value', (): void => {
            expect(formatCurrency.toZAR(500)).toBe('R 500');
          });

          test('Small value', (): void => {
            expect(formatCurrency.toZAR(12345)).toBe('R 12 345');
          });

          test('Medium value', (): void => {
            expect(formatCurrency.toZAR(1234567)).toBe('R 1 234 567');
          });

          test('Large value', (): void => {
            expect(formatCurrency.toZAR(1234567890)).toBe('R 1234 567 890');
          });

          test('Huge value', (): void => {
            expect(formatCurrency.toZAR(99999999999999)).toBe('R 99999999 999 999');
          });
        });

        describe('toNumber', (): void => {
          test('Tiny value', (): void => {
            expect(formatCurrency.toNumber('R 500')).toBe(500);
          });

          test('Small value', (): void => {
            expect(formatCurrency.toNumber('R 12 345')).toBe(12345);
          });

          test('Medium value', (): void => {
            expect(formatCurrency.toNumber('R 1 234 567')).toBe(1234567);
          });

          test('Large value', (): void => {
            expect(formatCurrency.toNumber('R 1234 567 890')).toBe(1234567890);
          });

          test('Huge value', (): void => {
            expect(formatCurrency.toNumber('R 99999999 999 999')).toBe(99999999999999);
          });
        });
      });
    });
  });
});
