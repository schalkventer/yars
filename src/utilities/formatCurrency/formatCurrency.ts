/**
 * A helper function that converts a raw number into a string displaying it as
 * South African Rands with appropriate spacing applied.
 */
export const toZAR = (value: number): string => {
    const valueString: string = Math.floor(value)
      .toString()
      .slice(-3);
  
    if (value < 1000) {
      return `R ${valueString}`;
    }
  
    const thousandString: string = Math.floor(value / 1000)
      .toString()
      .slice(-3);
  
    if (value < 1000000) {
      return `R ${thousandString} ${valueString}`;
    }
  
    const millionString: string = Math.floor(value / 1000000).toString();
  
    return `R ${millionString} ${thousandString} ${valueString}`;
  };
  
  /**
   * A helper function that converts a string formatted as ZAR
   * (i.e. `'R 100 000'`) back into a number.
   */
  export const toNumber = (value: string): number => {
    if (!value) {
      console.error('Provided value is null');
      return 0;
    }
    const trimmed = value.replace(/[R|\s]/g, '');
    return parseInt(trimmed, 10);
  };
  
  export default { toNumber, toZAR };
  