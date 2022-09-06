// //To find the volume of cylinder,sphere and cone = πr2h

// class cylinder{
//     constructor(r,h){
//     this.r=r;
//     this.h=h;
// }}

// function getVolume(r,h)
// {
//     let volume=1
//     let p=Math.PI
//      volume=p*((r*r)*h)
//     console.log(volume.toFixed(4));
// }

// function getVolum(r)
// {
//     let p=Math.PI
//     let vol=(3/4)*p*(r*r*r)
//     console.log(vol.toFixed(4));
// }
// //Volume= πr2h/3

// function cube(r,h)
// {
//     let p=Math.PI
//     let vol=(p*(r*r)*h)/3
//     console.log(vol.toFixed(4));
// }
// let obj= new cylinder(2,2);
// obj.getVolume();
// getVolum(2)
// cube(2,2);

class cylinder
{
    constructor(r,h){
        this.r=r;
        this.h=h;

    }
    get area() {
        return this.getVolume().toFixed(4);
      }
    getVolume()
    {
        let p=Math.PI
     let  volume=p*((this.r*this.r)*this.h)
     return volume;
    //console.log(volume.toFixed(4));
    }
   
}
const cyl = new cylinder(2,2);

console.log("Volume of cylinder is",cyl.area);


//sphere
class Sphere 
{
    constructor(r1,h1){
    this.r1=r1;
    this.h1=h1;
    }
    get area2() {
        return this.getVolum().toFixed(4);
      }
      get area3(){
          return this.getVolumes().toFixed(4);

      }
      getVolum()
      {
          let p=Math.PI
          let vol=(3/4)*p*(this.r1*this.r1*this.r1)
          return vol;
      }//(p*(this.r1*this.r1)*this.h1)/3
      getVolumes()
      {
        let p=Math.PI
           let vols=(p*(this.r1*this.r1)*this.h1)/3
           return vols
        
      }

}
const cyl1=new Sphere(2);
console.log("Volume of cylinder is",cyl1.area2);
 const cyl2=new Sphere(2,2)
console.log("Volume of cylinder is",cyl2.area3);

