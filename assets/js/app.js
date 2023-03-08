const buttons = document.getElementById('buttons');
const input = document.getElementById('input');

let operandeGauche = '';
let operandeDroite = '';
let operateur = '';
let virgule = false;

//let RegexCommenceParChiffre = new RegExp('^[0-9]');

//let ValeurInput = input.value;

/*let valinput = input.value = '5';

//if (valinput.match(CommenceParChiffre))
if (RegexCommenceParChiffre.test(valinput)){
  console.log("l'input commence par un chiffre");
}*/


//const buttons = document.getElementsByTagName('button');

//console.log(Array.from(buttons));

buttons.addEventListener('click', (e) => {

  //console.log(e);
  //console.log(e.target.nodeName);
  //e.target.nodeName ou e.target.tagName

  if(e.target.nodeName === 'BUTTON'){

    let valueOfButton = e.target.textContent;

    //addNumber(valueOfButton);

    switch(typeOfButton(valueOfButton)){

        case 'number' :
          addValue(valueOfButton);
          console.log('number');
          break;

        case 'operateur' :
          getOperandeGauche();
          getOperateur(valueOfButton)
          console.log('operateur');
          break;

        case 'virgule' :
          ecrireVirgule(valueOfButton);
          console.log('virgule');
          break;

        case 'reset' :
          resetValue();
          console.log('reset');
          break;

        case 'total' :
          getOperandeDroite();
          afficherResultat();
          console.log('total');
          break;
      }
  }
  

  /*if(e.target.nodeName === 'BUTTON')
  {
      console.log(e.target.textContent);
  }*/

})

function addValue(valeurBouton){

  if (input.value === '0'){
    input.value = valeurBouton;
  }
  else{
    input.value += valeurBouton;
  }
}

function resetValue(){

  input.value = '0';
}

function ecrireVirgule(valeurBouton){

  if (input.value.includes(valeurBouton)){
    virgule = true;
  }
  else{
    virgule = false;
    input.value += valeurBouton;
  }
}

function afficherResultat(){

  /*console.log(operandeGauche);
  console.log(operandeDroite);

  console.log(valeurOperateur);*/

  let resultat;

  if (operateur === '+'){
    resultat = operandeGauche + operandeDroite;
  }
  else if (operateur === '-'){
    resultat = operandeGauche - operandeDroite;
  }
  else if (operateur === '/'){
    resultat = operandeGauche / operandeDroite;
  }

  input.value = resultat;
}

function getOperandeGauche(){

  operandeGauche = parseInt(input.value);
  input.value = '0';

  console.log(operandeGauche);
}

function getOperandeDroite(){

  operandeDroite = parseInt(input.value);
  input.value = '0';

  console.log(operandeDroite);
}

function getOperateur(valeurOperateur){

  operateur = valeurOperateur;
}

function typeOfButton(button) {

  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let operators = ['+', '-', 'x', '/', '%'];


  if (numbers.includes(button)){
    return "number";
  }
  else if (operators.includes(button)){
    return "operateur";
  }
  else if (button === '.'){
    return "virgule";
  }
  else if (button === 'AC'){
    return "reset";
  }
  else if (button === '='){
    return "total";
  }
  else{
    return "erreur";
  }

}

/*const buttons = Array.from(document.getElementsByTagName('button'));

console.log(buttons);

buttons.forEach(elt => {

  elt.addEventListener('click', e => {
    console.log(e.target.textContent)
  })
})*/




/*const boutons = document.querySelectorAll("button");

//console.log(boutons);

console.log(boutons[4].textContent);

function afficherChiffre() {

    for (var i=0; i<boutons.length; i++) {
       
        var bouton = boutons[i];
    }
    
    console.log(bouton.textContent);
}

boutons.addEventListener("click", afficherChiffre);*/

/*chiffre2.addEventListener('click', function() {
    console.log(chiffre2.textContent);
});*/
  




/*chiffre2.addEventListener('click', () => {
  // du code 
})

//ET si j'ai besoin de l'event (e) :

chiffre2.addEventListener('click', (e) => {
  // du code 
  console.log(e)
})*/
