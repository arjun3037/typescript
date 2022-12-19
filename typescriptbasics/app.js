function mul(n1, n2) {
    return n1 * n2;
}
function prints() {
    console.log('Prints Value');
}
function addAmdHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedMul;
combinedMul = mul;
//combinedMul = prints; we can't assign prints function to combinedMul function  because we have already defined the type of function which is differ;.
//combinedMul = 7; we cannot assign any other value because its type is Function
console.log(combinedMul(8, 8));
addAmdHandle(10, 20, function (result) {
    console.log(result);
});
