const obj = {
    name: 'MD AYUB',
    print: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}
obj.print();