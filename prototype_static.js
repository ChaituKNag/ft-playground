function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.toString = function () {
    return `Rectangle of width ${this.width} and height ${this.height}.`;
}

Rectangle.Max = function(r1, r2) {
    if(r1.area() === r2.area()) return null;
    else return r1.area() > r2.area()? r1: r2;
}

let r1 = new Rectangle(5, 6);

console.log(`Area of r1 is ${r1.area()}`);

let r2 = new Rectangle(5, 7);

console.log(`Area of r2 is ${r2.area()}`);

let max = Rectangle.Max(r1, r2);

if(max) console.log(`Rectangle with max area is ${max.toString()}`);

