document.getElementById("random").innerHTML= '<img id="image" src="'+"visuels2/recycle.png"+'" />';



function obj (Dechet, couleur){
    this.Dechet= Dechet;
    this.couleur= couleur;
    }

var Tab = [];
Tab.push(new obj("visuels2/rouleau_carton(B).jpg","bleu"));
Tab.push(new obj("visuels2/bouteille_plastique(J).jpg", "jaune"));
Tab.push(new obj("visuels2/bouteille_verre(V).jpg", "vert"));
Tab.push(new obj("visuels2/brique_lait(J).jpg", "jaune"));
Tab.push(new obj("visuels2/conserve(J).jpg", "jaune"));
Tab.push(new obj("visuels2/deo(J).jpg", "jaune"));
Tab.push(new obj("visuels2/organiques(M).jpg", "marron"));
Tab.push(new obj("visuels2/papier_journal(B).jpg)", "bleu"));
Tab.push(new obj("visuels2/pot_confiture(V).jpg", "vert"));
Tab.push(new obj("visuels2/pot_plastique(M).jpg", "marron"));
console.log(Tab);


var random = Math.round(Math.random() * 9);
console.log(random);


document.getElementById("play").addEventListener("click", function (){
    random = Math.round(Math.random() * 9);
    document.getElementById("random").innerHTML= '<img id="image" src="'+Tab[random].Dechet+'" />';

    document.getElementById("play").disabled= true;

});

document.getElementById("next").addEventListener("click", function(){
     random = Math.round(Math.random() * 9);
    document.getElementById("random").innerHTML= '<img id="image" src="'+Tab[random].Dechet+'" />';
});

document.getElementById("reset").addEventListener("click", function (){
    document.getElementById("random").innerHTML= '<img id="image" src="'+"visuels2/recycle.png"+'" />';
    document.getElementById("icone").innerHTML= "";

    document.getElementById("play").disabled= false;
});

document.getElementById("jaune").addEventListener("click", function(){

    if (Tab[random].couleur=="jaune"){
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/right.png"+'" />';
        document.getElementById("points").innerHTML= "1";
    }

    else{
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/wrong.png"+'" />';
        document.getElementById("points").innerHTML="0";
    }

});

document.getElementById("bleu").addEventListener("click", function(){

    if (Tab[random].couleur=="bleu"){
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/right.png"+'" />';
        document.getElementById("points").innerHTML= "1";
    }

    else{
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/wrong.png"+'" />';
        document.getElementById("points").innerHTML="0";
    }
});

document.getElementById("vert").addEventListener("click", function(){

    if (Tab[random].couleur=="vert"){
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/right.png"+'" />';
        document.getElementById("points").innerHTML= "1";
    }

    else{
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/wrong.png"+'" />';
        document.getElementById("points").innerHTML="0";
    }
});

document.getElementById("marron").addEventListener("click", function(){

    if (Tab[random].couleur=="marron"){
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/right.png"+'" />';
        document.getElementById("points").innerHTML= "1";
    }

    else{
        document.getElementById("icone").innerHTML= '<img id="image" src="'+"visuels/wrong.png"+'" />';
        document.getElementById("points").innerHTML="0";
    }
});

