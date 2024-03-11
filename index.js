
var rastgeleSayı=Math.floor(Math.random()*5)+1;
var rastgeleResim="images/dice" + rastgeleSayı +".png";
document.querySelectorAll("img")[5].setAttribute("src",rastgeleResim);

if(rastgeleSayı===1)
    document.querySelector("h3").innerHTML= 
    "Bugs Bunny Seni Çok Seviyor !"


else if(rastgeleSayı===2){
    document.querySelector("h3").innerHTML=
   "Şirinler Seni Çok seviyor!"
} 
else if(rastgeleSayı===3){
    document.querySelector("h3").innerHTML=
  "Sünger Bob Seni Çok seviyor!"
} 
else if(rastgeleSayı===4){
    document.querySelector("h3").innerHTML=
 "Temel Reis Seni Çok seviyor!"
} 
else if(rastgeleSayı===5){
    document.querySelector("h3").innerHTML=
 "Tom ve Jerry Seni Çok seviyor!" 
} 


