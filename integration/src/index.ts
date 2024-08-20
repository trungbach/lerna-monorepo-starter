import { Calculator } from "@trungbach/calculator";

const x = 1;
const y = 2;
const z = 0;
const sum = Calculator.add(x, y);
console.log(`${x} + ${y} = ${sum}`);

const sub = Calculator.sub(x, y);
console.log(`${x} - ${y} = ${sub}`);

const div = Calculator.div(x, y);
console.log(`${x} / ${y} = ${div}`);

const mul = Calculator.mul(x, y);
console.log(`${x} * ${y} = ${mul}`);
