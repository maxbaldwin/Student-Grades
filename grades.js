var gradeSchema = {
  gradeA: 0,
  gradeB: 0, 
  gradeC: 0, 
  gradeD: 0, 
  gradeF: 0, 
}

//given in instructions
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//for loop for how many letter grades each are
for (var i = 0; i < scores.length; i++) {
  if (scores[i] < 61) {
    gradeSchema.gradeF++; 
  }
  else if (scores[i] < 71) {
    gradeSchema.gradeD++;
  }
  else if (scores[i] < 81) {
    gradeSchema.gradeC++;
  }
  else if (scores[i] < 91) {
    gradeSchema.gradeB++; 
  }
  else if(scores[i] < 100) {
    gradeSchema.gradeA++;
  }
}

//console logs of grades in the scores variable that are in the letter grade range
console.log(gradeSchema.gradeA); 
console.log(gradeSchema.gradeB); 
console.log(gradeSchema.gradeC); 
console.log(gradeSchema.gradeD); 
console.log(gradeSchema.gradeF); 


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

