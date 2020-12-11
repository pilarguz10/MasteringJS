function checkAge(name, age) {
  // your code here
  let resultado ="";
  if(age >= 21){
        resultado = "Welcome, "+name+"!" ;
  }else if (age <21){
      resultado= "Go home, "+name+"!" ;
    
  }
  return resultado;
}

let nombre = checkAge('Adrian', 17);
console.log(nombre);


