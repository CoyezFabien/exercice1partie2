function imgover()
{
document.getElementById("picture1").src ="Assets/IMG/pict1.jpg";
}
function imgout()
{
document.getElementById("picture1").src ="Assets/IMG/pict2.jpg";
}



//le chemin des images viens directement du html le javascript viens changer le chemin de l'image par exemple sur html le chemin source c'est toto dans javascript on va dire que quand on fait un evenement on changera le chemin et la source deviendra tata.



// on a créer une fonction pour le onmouseover et onmouseout avec leur titre rescpective écrite dans le html et avec leurs parenthèses et ensuite le bloc qui servira d'instrcution.

// à imgover ici on parle quand le curseur est sur l'élement le mouseover est déclenché
// document.getElementById("picture1").src
// le chemin en java les chemin des images partir du html, on manipule le dom document object model (en gros notre page web)

// à imgout on parle ici quand le curseur est en dehors le mouseout est déclenché
// document.getElementById("picture1").src 
//  ici on va dire qu'ici que img aura comme source

