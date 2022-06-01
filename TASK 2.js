//TASK 2
const sides = [3, 2, 2];

function checkValidity(sides)
{
     const [a, b, c] = sides;

    // check condition
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}

const areaOfTriangle = sides => {
   const [a, b, c] = sides;
   const sp = (a + b + c) / 2;
   const aD = sp - a;
   const bD = sp - b;
   const cD = sp - c;
   const area = Math.sqrt(sp * aD * bD * cD);
   return area;
};

if(checkValidity(sides))
console.log(areaOfTriangle(sides))
else
console.log("Sides of the triangles are not valid")
