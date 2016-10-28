var Predator = (function () {
  var dinoCarnivores = [];
  var dinoHerbivores = [];
  return {
    

      loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.open("GET","carnivores.JSON");
      loader.send();
      
      loader.addEventListener("load", function () {
      dinoCarnivores = JSON.parse(this.responseText).carnivores;
      console.log("carnivores", dinoCarnivores );
      callbackToInvoke(dinoCarnivores);
      
       });   
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument   

    },

     loadHerbivores: function (callbackToInvoke) {

      var loader = new XMLHttpRequest();

      loader.open("GET","herbivores.JSON");
      loader.send();
      
      loader.addEventListener("load", function () {
      dinoHerbivores = JSON.parse(this.responseText).herbivores;
      console.log("herbivores", dinoHerbivores );
      callbackToInvoke(dinoHerbivores);
      
       });   

    }
    
  }


})();


















