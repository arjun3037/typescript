var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//userName = userInput; we can't assign unknown to string 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred', 500);
console.log(result);
