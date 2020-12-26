const name = 'MD AYUB SHAMIM';
const age = 23;
const email = 'ahmed1.ayub6717@gmail.com';

// const details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email
/* this is previous style and very annoying */

const details = `Name: ${name}; Age: ${age}; Email: ${email}`
console.log(details);
/* Easy  to concat that's why use template string*/