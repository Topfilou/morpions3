
//le morpion n'est pas de moi, ce n'est pas à ma portée: j'ai juste cherché à faire 2 3 modifs.


function estValide(button) {
    return button.innerHTML.length == 0;
  }
  
  function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
  }
  
  function rechercherVainqueur(pions, joueurs, tour) {
      var x = "#eff2d2"
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[1].innerHTML == joueurs[tour] &&
      pions[2].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = x;
      pions[1].style.backgroundColor = x;
      pions[2].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[3].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour]
    ) {
      pions[3].style.backgroundColor = x;
      pions[4].style.backgroundColor = x;
      pions[5].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[6].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[6].style.backgroundColor = x;
      pions[7].style.backgroundColor = x;
      pions[8].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[3].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = x;
      pions[3].style.backgroundColor = x;
      pions[6].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[1].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour]
    ) {
      pions[1].style.backgroundColor = x;
      pions[4].style.backgroundColor = x;
      pions[7].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = x;
      pions[5].style.backgroundColor = x;
      pions[8].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = x;
      pions[4].style.backgroundColor = x;
      pions[8].style.backgroundColor = x;
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = x;
      pions[4].style.backgroundColor = x;
      pions[6].style.backgroundColor = x;
      return true;
    }
  }



  function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
      if (pions[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }
  
  var Afficheur = function(element) {
    var affichage = element;
  
    function setText(message) {
      affichage.innerHTML = message;
    }
  
    return { sendMessage: setText };
  };
  
  function main() {
    var pions = document.querySelectorAll("#Jeu button");
    var joueurs = ["X", "O"];

    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
      "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tour] +
        " c'est votre tour."
    );
    for (var i = 0, len = pions.length; i < len; i++) {
      pions[i].addEventListener("click", function() {
        if (jeuEstFini) return;
  
        if (!estValide(this)) {
          afficheur.sendMessage(
            "Case occupée ! <br />Joueur " +
              joueurs[tour] +
              " c'est toujours à vous !"
          );
        } else {
          setSymbol(this, joueurs[tour]);
          jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
  
          if (jeuEstFini) {
            afficheur.sendMessage(
              "Le joueur " +
                joueurs[tour] +
                ' a gagné ! '
            );
            return;
          }



          if (matchNul(pions)) {
            afficheur.sendMessage(
              'Match Nul !' 
            );
            return;
          }

          tour++;
          tour = tour % 2;
          afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
        }
      });
    }
  }
  main();
                 
                     //code perso
function reset() {
    window.location.href = "morpion3.html"
}
document.getElementById("rejouer").addEventListener("click", reset);
 
                          //IMC

function IMC() {
  var taille = Number(document.getElementById("zone1").value);
  var poids = Number(document.getElementById("zone2").value);

  var x  = (poids / (taille **2)) * 10000;
  x = Math.round(x * 100) / 100;

  var reponse;

    if (x < 18.5) {reponse = ":" + " "  + "Vous êtes trop maigre";
  }
    if (x >= 18.5 && x < 25) {reponse = ":" + " " + "Votre corpulence est normale";
  }
    if (x >= 25 && x < 30) {reponse = ":" + " " + "Vous êtes en surpoids";
  }
    if (x >= 30 && x < 35) {reponse = ":" + " " + "Vous êtes en obésité modérée";
  }
    if (x >= 35 && x < 40) {repone = " " + "Vous êtes en obésité sévère";
  }
    if (x > 40) {reponse = ":" + " " + "Vous êtes en obésité morbide";
  }



         document.getElementById("essai1").innerHTML = x + reponse;

          
}
document.getElementById("valider").addEventListener("click", IMC).top;



