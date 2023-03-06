/*const chiffre1 = document.getElementById('chiffre-1');
const chiffre2 = document.getElementById('chiffre-2');
const chiffre3 = document.getElementById('chiffre-3');
const chiffre4 = document.getElementById('chiffre-4');
const chiffre5 = document.getElementById('chiffre-5');
const chiffre6 = document.getElementById('chiffre-6');
const chiffre7 = document.getElementById('chiffre-7');
const chiffre8 = document.getElementById('chiffre-8');
const chiffre9 = document.getElementById('chiffre-9');*/
const buttons = document.getElementById('buttons');
const input = document.getElementById('input');

let operandeGauche = '';
let operandeDroite = '';
let operateur = '';
let Virgule = false;

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
          console.log(addNumber(valueOfButton));
          break;

        case 'operateur' :
          console.log('operateur');
          break;

        case 'virgule' :
          console.log('virgule');
          break;

        case 'reset' :
          console.log('reset');
          break;

        case 'total' :
          console.log('total');
          break;

      }
  }
  

  /*if(e.target.nodeName === 'BUTTON')
  {
      console.log(e.target.textContent);
  }*/

})

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

function addNumber(valeurBouton){

  input.value = valeurBouton;
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
