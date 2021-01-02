import Person from "./Classes";

class Student extends Person{
    constructor(name, email, id){
        super(name,email);
        this.id = id;
    }
    print (){
        super.print();
        console.log(`ID: ${this.id}`);
    }
}
export default Student;