export function AddNums(value1, value2) {
    return value1 + value2;
}
export function SubNums(value1, value2){
    return value1-value2;
}
export function MulNums(value1, value2){
    return value1*value2;
}
export function DivNums(value1, value2){
    return value1/value2;
}
export function PowNums(value1, value2){
    return (Math.pow(value1,value2));
}
export function AndNums(value1, value2){
    return value1&value2;
}
export function OrNums(value1, value2){
    return value1|value2;
}
export function XorNums(value1, value2){
    if (!isNaN(value1) && !isNaN(value2)) {
        // Calculate the XOR
        var result = value1 ^ value2;
        return result;
        // Display the result
        //console.log("The XOR of " + value1 + " and " + value2 + " is: " + result);
      } else {
        console.log("Invalid input. Please enter valid numbers.");
      }
}