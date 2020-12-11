// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3)
{
    let cant1 = word1.length;
    let cant2 = word2.length;
    let cant3 = word3.length;

    let menor = Math.min(cant1, cant2, cant3);
    return menor;
    
}

var output = findMinLengthOfThreeWords('aa', 'beaaa', 'seeaaaa');
console.log(output); // --> 1