Find the nth greatest element.
let a =[20,30,50,40,60,80,70]

a.sort(function(a, b){return b-a});


var count=0
function test(n)
{
    for(let i=0;i<=n;i++)
    {
        count+=1   
    }
   
    if(count>a.length)
    {
        console.log(count-1);
        console.log(`Out of bound,array has only ${a.length} elements`);
        window.alert("Out of bound")
    }
    else
    {
     console.log(count-1);
    console.log(`The value at index ${n} is`,a[count]);
    }
}
test(10);

//-----------------------------------------------------------------------------


function dash(num){
const str = num.toString();
const result = [0,"-",str[0]];
for(let i = 1; i<str.length;i++)
{
  if(str[i-1]%2===0 && str[i]%2===0)
  {
    result.push('-',str[i]);
  }
  else
  {
    result.push(str[i]);
  }
}
console.log(result.join(''));
}
dash(0254645);
//---------------------------------------------------
//Inheritance

class Rectangle {
   constructor(length, width) {
       this.length = length;
       this.width = width;
   }
   getArea() {
       return this.length * this.width;
   }
 }
 class Square extends Rectangle {
   constructor(size) {
       super(size, size);
   }
 }
 let sqr=new Square(3,4);
 console.log("Area of square is",sqr.getArea());
    let rec=new Rectangle(3,4)
    console.log("Rectangle area is",rec.getArea());
