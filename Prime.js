function CheckPrime(Number){
 
 
 let count = 0;
    for ( let i = 1; i <= Number; i++){
        if ( Number % i == 0){
            count++;
         }
     }
    if (count == 2){
      console.log(Number,"Prime");
     }else {
      console.log(Number,"Not Prime");
     }
}

CheckPrime(23);


