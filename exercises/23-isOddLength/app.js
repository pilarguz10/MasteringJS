// Write your function here

function isOddLength(word)
{
    let numLetras = word.length;
    if (numLetras % 2 != 0)
    {
        return true;
    }

    return false;
}

let result = isOddLength('pilaar');
console.log(result);