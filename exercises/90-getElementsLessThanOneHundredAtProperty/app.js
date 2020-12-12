// Write your function here
function getElementsLessThan100AtProperty(obj, key)
{
      let arr = [];
    //Si el array está vacío
    if(obj[key].length === 0)
    {
            return arr;
    }
    //Si el array no contiene ningún elemento igual a 10
    if(!obj[key] === 10)
    {
        return arr;
    }

    //Si la propiedad en esa key dada no es un array
    if(!Array.isArray(obj[key]))
    {
         return arr;
    }
    
    //Si no hay ninguna propiedad en dicha key
    if(!obj.hasOwnProperty(key))
    {
          return arr;
    }


     return obj[key].filter(function(item)
        {
                return item <= 100;
        });
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]