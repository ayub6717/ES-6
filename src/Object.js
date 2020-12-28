let Name = 'MD AYUB SHAMIM';
let Email = 'ahmed1.ayub6717@gmail.com';
const Info = {
    Name,
    Email,
    print() {
        console.log(this.Name, this.Email);
    }
}
Info.print();
console.dir(Info);