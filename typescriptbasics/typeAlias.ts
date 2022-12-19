// type alias

type Combinable = number | string;
type conversionDescriptor = 'as-text' | 'as-number';


function combinableFunction(
    input1: Combinable,
    input2: Combinable,
    resultConversion: conversionDescriptor // literal type
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
  
  const combAge = combine1(30, 26, "as-number");
  console.log(combAge);
  
  const combStringAges = combine1("30", "26", "as-number");
  
  console.log(combStringAges);
  
  const CombStringNames = combine1("arjun", " singnjh", "as-text");
  console.log(CombStringNames);
  