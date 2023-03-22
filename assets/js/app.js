const buttons = document.getElementById('buttons');
const input = document.getElementById('input');

let operandeGauche = '';
let operandeDroite = '';
let operateur = '';
let virgule = false;

buttons.addEventListener('click', (e) => {

  if(e.target.nodeName === 'BUTTON'){

    let valueOfButton = e.target.textContent;

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
