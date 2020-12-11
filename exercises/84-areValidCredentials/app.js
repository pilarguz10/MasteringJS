// Write your function here

function areValidCredentials (name, pwd)
{
    if (name.length > 3 && pwd.length >= 8){
        return true;
    }
    return false;
}

var output = areValidCredentials('Ritu','kjsdfljdsafi');
console.log(output);