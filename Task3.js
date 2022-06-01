function atIndex(x,arr)
{
  let i =0;
  while(i<20)
  {
    if(arr[i] == x)
    {break;}
    i++;
  }
  return i+1
}

let arr = []
let x = 0
while(x<20)
{
  arr.push(Math.floor(Math.random() * 1000));
  x++;
}

//printing 1st line 
console.log(arr)
let i =0

//sorting the random integers now 
let temp = []
while(i<20){
  temp.push(arr[i])
  i++
}
temp.sort()
let locationArr = []
let y;
i=0
while(i<20)
{
  y = atIndex(temp[i],arr)
  locationArr.push(y)
  i++;
}

console.log(temp)

console.log(locationArr)