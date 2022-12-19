const person //: {
    //name: string
    //age:number
//} 
= {
  name: "arjun Singh",
  age: 30,
  hobbies:['sport' , 'cooking'],
  role:[2,'author']
};

let favouriteActivity : string[];
favouriteActivity = ['sports'];

person.role


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // it won't work because map method belongs to array only

}


console.log(person.name);

