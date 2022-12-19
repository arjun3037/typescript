enum ROLE {ADMIN,READ_ONLY,AUTHOR};

const person = {
  name: "arjun Singh",
  age: 30,
  hobbies:['sport' , 'cooking'],
  role:ROLE.ADMIN
};

if(person.role === ROLE.ADMIN){
  console.log('inside admin ');
}

/* const person : {
    name: string;
    age:number;
    hobbies: string[];
    role:[number,string]
} 
= {
  name: "arjun Singh",
  age: 30,
  hobbies:['sport' , 'cooking'],
  role:[2,'author']
};

let favouriteActivity : string[];
favouriteActivity = ['sports'];

person.role.push('admin');

console.log(person.role[0]);

person.role


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()); // it won't work because map method belongs to array only

}


console.log(person.name);

 */