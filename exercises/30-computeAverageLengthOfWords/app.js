// Write your function here
function computeAverageLengthOfWords(word1, word2)
{
    let letrasWord1 = word1.length;
    let letrasword2 = word2.length;

    return (letrasWord1 + letrasword2) /2 ;
}

let result = computeAverageLengthOfWords ('code', 'programs');
console.log(result);