// Write your function here
function isEvenAndGreaterThanTen (num)
{
    if (num % 2 === 0 && num > 10)
    {
            return true;
    }
    return false;
}
let result = isEvenAndGreaterThanTen(20);
console.log(result);