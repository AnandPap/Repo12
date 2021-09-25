// Only change code below this line
function sumFibonacci(num) {
    var i;
    var sum = 1;
    var previousElement1 = 1;
    var previousElement2 = 0;
    if (num < 1) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    for (i = 1; i <= num; i = previousElement2 + previousElement1 ) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
        previousElement2 = previousElement1;
        previousElement1 = i;
    }
    return sum;
}
// Only change code above this line
console.log(sumFibonacci(20)); // Change this line
module.exports = sumFibonacci;