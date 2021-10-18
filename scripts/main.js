/*var prenom = 'Fourat';
var age = 21;

// on click on show
document.getElementById('bouton1').addEventListener('click', function(){
    var monPrenom = document.getElementById('nom').innerHTML='Hello ' + prenom;
    var laDate = document.getElementById('date').innerHTML= Date();
    var monAge = document.getElementById('age').innerHTML="You're " + age+ " years old";

    if(document.getElementById('nom').style.display === 'none'){
        document.getElementById('nom').style.display='block';
        document.getElementById('date').style.display='block';
        document.getElementById('age').style.display='block';
    }
    document.getElementById('bouton2').style.display='block';

});



// on click on Hide
document.getElementById('bouton2').addEventListener('click', function(){
    
    document.getElementById('nom').style.display='none';
    //document.getElementById('date').style.display='none';
    //document.getElementById('age').style.display='none';

    document.getElementById('bouton2').style.display='none';


})
*/

let myImage = document.getElementById('rh');

myImage.addEventListener('click', function(){

    let lien = myImage.getAttribute('src');
    console.log('working here');

    if(lien === "/multimedia/HR.png" ){
        myImage.setAttribute('src', "/multimedia/hacktoberfest1.png");
    }
    else{
        myImage.setAttribute('src', "/multimedia/HR.png" );
    }
}
);


let monBouton = document.getElementById('button1').addEventListener('click', function(){
    let prenom = prompt("Saisir nom d'utilisateur");
    let age = prompt("Saisir votre age");

    localStorage.setItem('userName', prenom);
    localStorage.setItem('userAge', age);

    monTexte.textContent = 'Bonjour'+ prenom;
    monTexte.textContent='Vous avez'+age + 'ans.';
});


let monTexte = document.getElementById('text1');

function changeUserName(){
    let prenom = prompt("Saisir nom d'utilisateur");
    localStorage.setItem('userName', prenom);
    localStorage.setItem('userAge', age);

    monTexte.textContent = 'Bonjour'+ prenom;
    monTexte.textContent='Vous avez'+age + 'ans.';
}

if (!localStorage.getItem('userName')){
    changeUserName();

}else{
    let prenomStocke = localStorage.getItem('userName');
    monTexte.textContent='Hello there ' + prenomStocke;
}

