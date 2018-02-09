var o = {
    x: 1,
    y: 2,
    z: 3
};

function NewObject() {
    this.a = 10;
    this.b = 20;
    this.c = 30;
}

var obj = new NewObject();
obj.y = 40;

console.log(obj.hasOwnProperty('a'));