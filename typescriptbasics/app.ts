let userInput:unknown;
let userName:string;

userInput =5;
userInput ='Max';

//userName = userInput; we can't assign unknown to string 

// thias function will never return anything
function generateError(message:string, code:number) :never{
    throw{message:message,errorCode:code};
}

// infinite loop function also never return anything

const result = generateError('An error occurred', 500);
console.log(result);