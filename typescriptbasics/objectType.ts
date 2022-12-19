// we can define the type of object like below.
//objectType
const person1 :{
    name:string,
    age:number,
    hobbies:string[]
} = {
    name: "arjun Singh",
    age: 30,
    hobbies:['sport' , 'cooking'],
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.hobbies);
//person1.name = 1; we can't assign integer value to name because we have defined the type of name in object defination.
person1.name = 'Rahul';
console.log('after name change' + person1.name);
console.log(person1)








