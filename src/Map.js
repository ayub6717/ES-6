const favorite = new Map();
favorite.set('name', 'Ahmed Ayub');
favorite.set('job', 'student');
favorite.set('color', 'blue');
favorite.set('os', 'ubuntu');
favorite.set('mobileos', 'android');

favorite.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));
console.log(favorite);
console.log(favorite.size);