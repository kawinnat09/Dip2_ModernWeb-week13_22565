"use strict";
let i;
let arr2;
arr2 = [10, 20, 30, 40];
for (i in arr2) {
    console.log(`${arr2[i]}`);
}
let p;
// const province:string[] = new Array("Trat","Chantaburi","Rayong")
const province = ["Trat", "Chantaburi", "Rayong"];
for (p in province) {
    console.log(`${province[p]}`);
}
let a;
let animal = new Array("Cat", "Dog", "Rabbit");
function display(arr_value) {
    for (a in animal) {
        console.log(`${animal[a]}`);
    }
}
display(animal);
// console.log(${arr2[0]})
// console.log(${arr2[1]})
// console.log(${arr2[2]})
// console.log(${arr2[3]})
