// union type we can opt multiple argument types.
function combine1(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // literal type
) {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if(resultConversion === 'as-number'){
    return +result;
  }else{
    return result.toString();
  }

  return result;
}

const combinedAge = combine1(30, 26, "as-number");
console.log(combinedAge);

const combinedStringAges = combine1("30", "26", "as-number");

console.log(combinedStringAges);

const CombinedStringNames = combine1("arjun", " singnjh", "as-text");
console.log(CombinedStringNames);
