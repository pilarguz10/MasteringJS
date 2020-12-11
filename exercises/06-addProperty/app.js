function addProperty(obj, key) {
  // your code here
   obj[key] =true;
   return obj;
}

let person={
    mail: "person@domain.es",
    job: "lifeguard"
}

let resultado = addProperty (person, 'adress');
console.log (resultado);

