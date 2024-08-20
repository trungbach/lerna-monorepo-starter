export const Calculator = {
  add: (a: number, b: number): number => {
    return a + b;
  },
  sub: (a: number, b: number): number => {
    return a - b;
  },
  mul: (a: number, b: number): number => {
    return a * b;
  },
  div: (a: number, b: number): number => {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  },
  pow: (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
  },
  sqrt: (value: number): number => {
    if (value < 0) {
      throw new Error("Cannot take the square root of a negative number");
    }
    return Math.sqrt(value);
  },
};
