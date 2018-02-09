function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    fn.call(obj); // <-- call site
}

var obj = {
    a: 2, 
    foo: foo
}

global.a = "oops, global";

doFoo(obj.foo);