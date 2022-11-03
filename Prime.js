function CheckPrime(N){
 
 let factor = 0;
    for ( let i = 1; i <= N; i++){
        if ( N % i == 0){
            factor++;
         }
     }
    if (factor == 2){
      console.log("Prime");
     }else {
      console.log("Not Prime");
     }
}

CheckPrime(23);
