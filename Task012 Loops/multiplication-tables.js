

//this is part II multiplication tafel

const tafels= function(number){
   for (i=1; i<=10; i++){
      let result= number*i;
      console.log( i+"x"+number+" ="+result);
      }
};

tafels(9);


//this is part II multiplication tafel voor de bonuspunten
const tafels2= function(){

   for (i=1; i<=10; i++){
      for (j=1; j<=10; j++){
        let number=j;
        let result= j*i
         console.log( i+"x"+number+" ="+result);
         }
      
      }
};
tafels2();
