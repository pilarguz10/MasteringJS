// Write your function here
function keep (arr, element)
{
       return arr.filter(function(value) {
        return value === element;
    });
}


var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // [2, 2]