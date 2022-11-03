function CheckPrime(Nnumber){
 
 let count = 0;
    for ( let i = 1; i <= Number; i++){
        if ( Nnumber % i == 0){
            count++;
         }
     }
    if (count == 2){
      console.log(number,"Prime");
     }else {
      console.log(number,"Not Prime");
     }
}

CheckPrime(23);


