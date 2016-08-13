var gradeSchema = {
  gradeA = 0; 
  gradeB = 0; 
  gradeC = 0; 
  gradeD = 0; 
  gradeF = 0; 
}

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];



//How many of each grade?
var count = 0;
for(var i = 0; i < scores.length; ++i){
    if(scores[i] == 1)
        count++;
}
console.log(scores.length);

//What is the lowest grade?
var minMath = Math.min(...scores); 
console.log(minMath); 

//What is the highest grade?
var maxMath = Math.max(...scores); 
console.log(maxMath); 

