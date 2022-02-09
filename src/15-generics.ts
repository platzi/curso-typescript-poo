import { Dog } from './09-protected';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(1212).toFixed();
getValue<string>('1212').toLowerCase();
getValue<number[]>([1,1,1]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting
