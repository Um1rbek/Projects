console.log(this);

// const user = {
//     name: "John",
//     age: 30,
// };

const user2 = {
    name: "Behruz",
    age: "50",
    info: function sayHello() {
        console.log(this.age);
    },
};

function sayHello() {
    console.log(this.name + " salom "  +  this.age + " yoshda ekansiz");
}

const user = {
    name: "John",
    age: 30,
};

sayHello.apply(user)