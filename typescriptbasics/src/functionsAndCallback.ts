function mul(n1:number , n2 : number){
    return n1 * n2;
}

function prints(){
    console.log('Prints Value');
}

function addAmdHandle(n1:number , n2 : number , cb : (num : number) => void){
    const result = n1 + n2 ;
    cb(result);

}

let combinedMul : (a:number,b:number) => number;

combinedMul = mul;
//combinedMul = prints; we can't assign prints function to combinedMul function  because we have already defined the type of function which is differ;.

//combinedMul = 7; we cannot assign any other value because its type is Function

console.log(combinedMul(8,8));


addAmdHandle(10,20 , (result) => {
    console.log(result);
});