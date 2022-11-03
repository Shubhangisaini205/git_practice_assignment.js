function prime_checker(number){

  let factors=0;
for(i=1;i<number; i++){
  if(number%i==0){
          factor++
  }
if(factor==2){
     
   return true
}
   return false
}


}  
let  answer=prime_checker(14)
    (answer==true)?console.log(answer,"is prime"):consle.log(answer, "is not prime");