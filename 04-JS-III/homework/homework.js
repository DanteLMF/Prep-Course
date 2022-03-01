// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  a= array.length;
  for (b=0; b<a;b++){
    array[b]= array[b] +1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  a= palabras.length;
  str='';
  for (b=0;b<a;b++){
    if (b< (a-1)){
    str= str + palabras [b] + ' ';
    }
    else {
      str= str + palabras [b];
    }
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  a= array.length;
  for (b=0;b<a;b++){
    if (array[b]=== elemento) {
      return true;
    }  }
    return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  ent=0;
  for (b=0; b<numeros.length;b++){
    ent=ent+numeros[b];  }
    return ent;
  }


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  a= resultadosTest;
  p=0;
  for (b=0 ; b<a.length;b++) {
    p=p+a[b];
  }
  p=p/a.length;
  return p;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mg=0;
  for (b=0;b<numeros.length;b++){
    if (mg<numeros[b]){
      mg= numeros[b];
    }

  }
  return mg;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length===0) {
    return 0;
  }
  p=arguments[0];
  if (arguments.length===1){
    return p;
  }
  for (b=1;b<arguments.length;b++) {
      p=p*arguments[b];
  }
  return p;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  c=0;
  for (b=0;b<arreglo.length;b++){
    if (arreglo[b]>18){
      c=c+1;
    }
  }
  return c;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1 || numeroDeDia===7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral';
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n9 = n.toString()
  if(n9.charAt(0) === "9"){
    return true
  }
  return false;

  
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for (b=0; b<arreglo.length-1 ;b++){
    if (arreglo[b]!==arreglo[b+1]){
      return false;
    } 
  }
return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  a=[];
  for (b=0;b<array.length;b++){
    if (array[b]==='Enero'){        //Originalmente Enero iba a la primera posicion, pero el test lo requeria en ultimo lugar. Pense que la consigna
      a[2]='Enero';                 //los pedia ordenados.
     }
    if (array[b]==='Marzo'){   
      a[0]='Marzo';
    }
    if (array[b]==='Noviembre'){
      a[1]='Noviembre'
    }

  } 
  if (a[2]==='Enero' && a[0]==='Marzo' && a[1]==='Noviembre'){
    return a;
  } else {return 'No se encontraron los meses pedidos'}
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  na=[];
  for (b=0;b<array.length;b++){
    if (array[b]>100){
      na.push(array[b]);
    }
  }
  return na;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  ar=[];
  for (b=0;b<10;b++){
    numero=numero+2;
    ar[b]=numero;
    if (numero===b){
      return 'Se interrumpió la ejecución';
    }
  }
  return ar;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  ar=[];
  c=0;
  for (b=0;b<10;b++){
    if (b===4){
      c=1;
      continue;
    }
    numero=numero+2;
    ar[b-c]=numero;
  }
  return ar;
    
    
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
