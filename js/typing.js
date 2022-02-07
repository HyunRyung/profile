$(document).ready(function(){
  var typingBool = false; 
var typingIdx=0; 

var typingTxt = $(".title_text").text(); 

typingTxt=typingTxt.split(""); 

if(typingBool==false){ 

   typingBool=true;     
   var tyInt = setInterval(typing,100);
} 
     
function typing(){ 
  if(typingIdx<typingTxt.length){ 
    $(".title_blink").append(typingTxt[typingIdx]);
    typingIdx++; 
   } else{ 
    clearInterval(tyInt);
    $(".title_blink").append("<span></span>");
   } 
   
}  
});