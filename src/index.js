import * as Module_system from './Module-system';
import * as Spread_operator from './Spread-operator';
import {add, mod} from './Module-system';
import Person from './Classes';

console.log(Module_system.sub(10, 20));
console.log(mod(10, 3));
console.log(Spread_operator.obj2);

let p1 = new Person('MD. AYUB', 'ahmed1.ayub6717@gmail.com');
console.log(p1.name);
p1.print();

