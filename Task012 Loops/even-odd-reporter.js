
//this is part I: 

const checker= function(){
   for (i=0; i<20; i++){
      getalN= i%2;
      if (getalN === 0){
         console.log( i+" is even");
      }
      else if (getalN=NaN || undefined){
         console.log(i+ "is even")
      }

      else {console.log( i+" is oneven");
         }
   }
};

checker();
