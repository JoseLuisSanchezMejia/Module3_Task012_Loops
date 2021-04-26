
//this is part III

function assignGrade(score) {
   if (score > 90) {
       return 'A';
   } else if (score > 80) {
       return 'B';
   } else if (score > 70) {
       return 'C';
   } else if (score > 65) {
       return 'D';
   } else {
       return 'E';
   }
};

const gradePrinter = function(){
for (i=60; i<=100; i++){
      let result= assignGrade(i);
      console.log("Voor "+i+"punten, krijg je een "+result);}
   ;
};

gradePrinter();

