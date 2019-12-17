


let hartbasis = -300;
let a = document.getElementById('a');


var tl = gsap.timeline({repeat: 0, repeatDelay: 0,});
tl.to(".hart", {x:-500}, ">0,8");
tl.to(".hart", {x:-200}, ">0,8");
tl.to(".hart",{x:hartbasis});

var letterslinks = [".d",".n",".a"];
var lettersrechts = [".e",".r",".s"];

var plus = 0;


var rainbow = gsap.timeline({repeat: 0, repeatDelay: 0,});
rainbow.to(letterslinks[0+plus],{fill:"#7ACBF5"},"0,1");
rainbow.to(lettersrechts[0+plus],{fill:"#7ACBF5"},"0,1");
rainbow.to(letterslinks[1+plus],{fill:"#EAACB8"},"0,2");
rainbow.to(lettersrechts[1+plus],{fill:"#EAACB8"},"0,2");
rainbow.to(letterslinks[2+plus],{fill:"#FFFFFF"},"0,3");
rainbow.to(lettersrechts[2+plus],{fill:"#FFFFFF"},"0,3");

function  movie(amount){

if(plus<2){
plus = plus + amount;
}
else{
  plus =0;
}
rainbow.play(0,plus);
return plus;

}

function doA(){
gsap.to(".wrapper",{duration:1,rotation:"+=360"},);
gsap.to(".wrapper",{duration:0, delay:1 ,rotation:0},);

}
