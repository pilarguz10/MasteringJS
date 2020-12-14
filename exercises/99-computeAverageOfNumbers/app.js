// Write your function here
function computeAverageOfNumbers(array)
{

    if(array.length === 0 )
    {
        return 0 ;
    }
    else
    {
        var sumatorio = 0;
        for (var i = 0; i < array.length; i++)
         {
            sumatorio += array[i];
        }
         var media = sumatorio / array.length;
        return media;
    }
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3