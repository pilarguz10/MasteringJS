// Write your function here

// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3)
{
    let cant1 = word1.length;
    let cant2 = word2.length;
    let cant3 = word3.length;

    let mayor = Math.max(cant1, cant2, cant3);
    return mayor;
    
}


var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3