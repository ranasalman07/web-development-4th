//Task 01
// Math.random();
// Math.trunc(decimal);
// var decimal = Math.trunc(Math.random()*10);
// console.log(decimal);



//Task 02
// var string="ho-ho-ho";
// console.log(string.indexOf("h"));
// console.log(string.indexOf("o"));
// console.log(string.indexOf("-"));
// console.log(string.lastIndexOf('h'));
// console.log(string.lastIndexOf('o'));
// console.log(string.lastIndexOf('-'));



//Task 03
// var string="ho-ho-ho";
// console.log(string.split("-"));



//Task 04
// var greet="Hello, ";
// console.log(greet.toUpperCase());
// console.log(greet.toLowerCase()); 



//Task 05
// var clothes=[];
// clothes.push("Coat");
// clothes.push("Pent");
// clothes.push("Shirt");
// clothes.push("Tie");
// clothes.push("Waistcoat");
// clothes.pop("waistcoat");
// clothes.push("overcoat");
// console.log(clothes);
// console.log(clothes[0]);
// console.log(clothes[2]);



//Task 06
// var favcar ={};
// favcar.color="blue";
// favcar.convertile=true;
// console.log(favcar);



//Task 07
const car = {};
car.mileage = 19750;
car.color = "Black";
car.turnTheKey = function(i ) {
  if (i === 1) {
    console.log("The engine is running");
  } else {
    console.log("The engine is not running");
  }
};
car.lightsOn = function( j ) {
  if (j===2){
    console.log("The lights are on");}
    else{
        console.log("THe lights are off");
    }
};
car.turnTheKey(1); 
car.lightsOn(2);