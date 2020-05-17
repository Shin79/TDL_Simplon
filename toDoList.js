let entreeTache = document.getElementById("add"),
boutonAjout = document.getElementsByTagName("button")[0],
aFaire = document.getElementById("a_faire"),
termine = document.getElementById("complete");

// Création d'unede l'ossature liste de tâches
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
    console.log('Ajout d\'une nouvelle tâche');
    var listItem = nouvelleTache(entreeTache.value);
    if (entreeTache.value != "") {
      aFaire.appendChild(listItem);
      lierTaches(listItem, completeTache);
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
      //label devient la valeur de l'input
      label.innerText = inputEdit.value;
    }else{
      inputEdit.value = label.innerText;
    }
    // Si edit est défini, il la supprime et renvoie false sinon la crée et renvoie true
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

// Tâche terminée
var completeTache = function(){
  console.log("Tâche terminée");
  //Ajouter la liste de tâches sur #complete
  var listItem = this.parentNode;
  termine.appendChild(listItem);
  lierTaches(listItem,nocompleteTache);
}

// Tâche non terminée
var nocompleteTache = function(){
  console.log("Tâche non terminée");
  // Quand la checkbox n'est pas cochée, on ajoute la liste de tâches
  var listItem = this.parentNode;
  aFaire.appendChild(listItem);
  lierTaches(listItem,completeTache);
}

// L'expression de fonction pour lier 
var lierTaches = function(objetTache,typeTache){
  var checkbox = objetTache.querySelector("input[type=checkbox]");
  var boutonEdit = objetTache.querySelector("button.edit");
  var boutonSuppr = objetTache.querySelector("button.remove");
  
  boutonEdit.onclick = modifTache;
  boutonSuppr.onclick = supprTache;
  checkbox.onchange = typeTache;
}
// Boucle pour les tâches non terminées
for(var i=0;i<aFaire.children.length;i++){
  lierTaches(aFaire.children[i],completeTache);  // En cas de changement d'état
}

// Boucle pour les tâches terminées
for(var i=0;i<termine.children.length;i++){
  lierTaches(termine.children[i],nocompleteTache); // En cas de ch
}

boutonAjout.addEventListener("click",nouvelAjout); 