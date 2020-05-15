let entreeTache = document.getElementById("add"),
boutonAjout = document.getElementsByTagName("button")[0],
aFaire = document.getElementById("a_faire"),
termine = document.getElementById("complete");

// Création d'une nouvelle case liste de tâches
let nouvelleTache = function(entree){
    let li = document.createElement("li"),
    inputCheckbox = document.createElement("input"),
    label = document.createElement("label"),
    inputEdit = document.createElement("input"),
    BoutonEdit =document.createElement("button"),
    BoutonSuppr = document.createElement("button");

    li.appendChild(inputCheckbox);
    li.appendChild(label);
    li.appendChild(inputEdit);
    li.appendChild(BoutonEdit);
    li.appendChild(BoutonSuppr);

    inputCheckbox.type="checkbox";
    label.innerHTML = entree;
    inputEdit.type ="text";
    BoutonEdit.className = "edit";
    BoutonEdit.textContent = "Editer";
    BoutonSuppr.className = "remove";
    BoutonSuppr.textContent = "Supprimer";

    return li;
};

    //Fonction ajouter nouvelle tâche
var nouvelAjout = function() {
    console.log('Ajout d\'une nouvelle tâche..........');
    var listItem = nouvelleTache(entreeTache.value);
    if (entreeTache.value != "") {
      aFaire.appendChild(listItem);
      //bindTaskEvents(listItem, taskComplete);
      entreeTache.value = "";
    } else {
      entreeTache.placeholder = "Ajouter une nouvelle tâche.";
    }}
 
    // Fonction modifier tâche
var modifTache = function(){
    console.log("Modification de tâche");
    var listItem = this.parentNode;
    var inputEdit = listItem.querySelector("input[type=text]");
    var label =listItem.querySelector("label");
    var classConteneur = listItem.classList.contains("edit");
    // Si la classe de parent est .edit
    if(classConteneur){
      // On switche sur .edit
      //label devient la valeur des input
      label.innerText = inputEdit.value;
    }else{
      inputEdit.value = label.innerText;
    }
    // On bascule .edit vers le parent
    listItem.classList.toggle("edit")
}

    // Supprimer tâche
var supprTache = function(){
  console.log("Suppression de tâche");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  // On supprime la liste parent de ul
  ul.removeChild(listItem);
}