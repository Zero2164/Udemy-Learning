function NODEEXERCISE2 () {
   var scores = [90, 98, 89, 100, 100, 86, 94];
   var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
   
   function average(avrg) {
       //add all scores together
       var total = 0;
       avrg.forEach(function (score) {
           total += score;
       });
       //divide by total number of scores
       var avg = total/avrg.length;
       
       //round average
       console.log(Math.round(avg));
   }
   console.log("Average score for science class:");
   average(scores);
  
   console.log("Average score for chemistry class:");
   average(scores2);
   
}
NODEEXERCISE2 ();
