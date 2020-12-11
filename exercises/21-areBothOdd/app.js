// Write your function here
function areBothOdd(num1, num2)
{
    if (num1 % 2 !=0 && num2 % 2 != 0)
    {
           return true;
          
    }
return false;
}

var resultado = areBothOdd(8, 11);
console.log(resultado);