//Mensaje de Bienvenida, te pide tu nombre para comenzar a jugar y seleccionar botones de basquet o soccer.
alert ('¡Bienvenido a la trivia deportiva! Introduce tu nombre y selecciona el deporte de tu preferencia. ¡Comencemos!');

//Declarar función para imprimir el nombre
function printName () {
  
//Obtener nombre y guardar en una variable
let userName= document.getElementById('user-name').value;
//console.log(userName);
  
  //Detonar el evento click del boton enviar
document.getElementById('send-name').addEventListener('click', printName);

  //Condicionar a que introduzca un nombre
  if (userName === '') {
    alert ('Por favor introduce tu nombre');
	}else{
    document.getElementById('print-name').innerHTML += 'Bienvenidx ' + userName;
	}
return(printName)
}
//Detonar eventos c/u botones
document.getElementById('startGameB').addEventListener('click', basquetQuestion);
//document.getElementById('startGameS').addEventListener('click', soccerQuestion);

//Declarar funcion para lanzar las preguntas.
function basquetQuestion () {
  
//Declarar variables donde se guardaran las respuestas
  let soccerAnswers = '';
  let basquetAnswers = '';
//Se lanza la pregunta 1 con alternativas, el usuario responde, luego se lanza la pregunta 2 y luego la 3.
  answerQuestionB = prompt('¿A cuantos metros está el aro del suelo?' + 'A- 3.05 ' + 'B- 1 ' + 'C- 4 ');
 console.log(answerQuestionB);
}


//3.2 Hacer función para preguntas de basquet
//function basquetQuestion() {
  //prompt ('¿Cuantos periodos tiene un partido de basquet?');
//}

//function soccerQuestion () {
  
//}
//3.3 Invocar función
//basquetQuestion();
//4) Pantalla de resultados (respuestas correctas e incorrectas) y dos botones de volver a jugar:
//Jugar con preguntas de tipo A (Por ejemplo: sobre comida)
//Jugar con preguntas de tipo B (Por ejemplo: sobre cervezas)


// Invocar funciónes
printName ()



