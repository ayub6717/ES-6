const name = 'MD AYUB SHAMIM';
const age = 24;
const email = 'ahmed1.ayub6717@gmail.com';
const address = 'Dhaka';

// const details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email
/* this is previous style and very annoying */

const details = `Name: ${name}; Age: ${age}; Email: ${email}; Address: ${address}`
console.log(details);
/* Easy  to concat that's why use template string*/

