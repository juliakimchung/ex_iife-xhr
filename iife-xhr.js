


function listCarnivores (carnivores) {

      
      var list = document.getElementById("carnivores-list");
      var outputDom = " ";
      //for(var i = 0; i < carnivores.length; i++) {
      //var currentCarnivores = carnivores[i];

       carnivores.forEach(function(currentCarnivores) {
          outputDom += `<h2>${currentCarnivores.Dinosaur}</h2>`;

          //console.log("carnivores", currentCarnivores);
      list.innerHTML = outputDom;
      
      });
    
}


function listHerbivores (herbivores) {

      
      var list = document.getElementById("herbivores-list");
      var outputDom = " ";
      //for(var i = 0; i < carnivores.length; i++) {
      //var currentCarnivores = carnivores[i];

        herbivores.forEach(function(currentHerbivores) {
          outputDom += `<h2>${currentHerbivores.Dinosaur}</h2>`;

        list.innerHTML = outputDom;  
        
      });
    
}



Predator.loadCarnivores(listCarnivores);
Predator.loadHerbivores(listHerbivores);
