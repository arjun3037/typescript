var person //: {
 
//name: string
//age:number
//} 
= {
    name: "arjun Singh",
    age: 30,
    hobbies: ['sport', 'cooking']
};
var favouriteActivity;
favouriteActivity = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);
