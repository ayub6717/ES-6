import * as Module_system from './Module-system';
import * as Spread_operator from './Spread-operator';
import {add, mod} from './Module-system';
import Person from './Classes';
import Student from './Inheritance';

console.log(Module_system.sub(10, 20));
console.log(mod(10, 3));
console.log(Spread_operator.obj2);

let p1 = new Person('MD. AYUB', 'ahmed1.ayub6717@gmail.com');
console.log(p1.name);
p1.print();

let st1 = new Student('Rohan Ahmed', 'ahmed1.ayub6717@gmail.com', '6717');
st1.print();

