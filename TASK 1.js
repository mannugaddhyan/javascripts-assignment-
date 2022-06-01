//TASK 1 
function isSumN(x,N)
{
  let sum=0;
  while(x>=1)
  {
    sum = sum + (x%10)
    x = x/10;
    x = parseInt(x);
  }
  if(sum == N)
  return true;
  else 
  return false;
}

//first introduce a natural number N 
//we set N = 5 
var N = 5;
let i = 100

//run a while loop from 100 to 1000 
while(i<1000)
{
  if(isSumN(i,N))   //calling function isSumN to check if sum == N or not 
  console.log(i)
  i++;
}
