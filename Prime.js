function CheckPrime(N){
 
 let count = 0;
    for ( let i = 1; i <= N; i++){
        if ( N % i == 0){
            count++;
         }
     }
    if (count != 2){
      console.log("Prime");
     }else {
      console.log("Not Prime");
     }
}

CheckPrime(23);
