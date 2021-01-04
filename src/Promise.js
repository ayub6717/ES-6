fetch('https://jsonplaceholder.typicode.com/users')
.then((resonse) => resonse.json())
.then((body) => {

    const lis = body.map(data => {
        let li = document.createElement('li');
        let text = `Name: ${data.name}, Email: ${data.email}`
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);

        return li;
    });

    lis.forEach((li) => {
     document.getElementById('mylist').appendChild(li);   
    });
})
.catch((err) => console.log(err));