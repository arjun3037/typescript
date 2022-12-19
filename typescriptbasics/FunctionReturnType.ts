// function return type & void

// undefined also a type
let var2 :undefined;

function add2(n1:number , n2 : number){
    return n1+n2;
}

// function return type & void
function functionType(n1:number , n2 : number):string{
    return n1.toString()+n2.toString();
}

// it will not return anything fromt this method.
function printResult1(num:number) : void{
    console.log('Result ' + num);
}


printResult1(add2(5,12));

console.log(printResult1(add2(5,12)));

