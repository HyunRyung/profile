$(document).ready(function(){
  var typingBool = false;
  var typingBool_back = false;
var typingIdx=0; 
var typingIdx_back=0;

var typingTxt = $(".title_text").text(); 
var typingTxt_back = $(".title_back_text").text(); 

typingTxt=typingTxt.split(""); 
typingTxt_back=typingTxt_back.split(""); 

if(typingBool==false){ 

   typingBool=true;     
   var tyInt = setInterval(typing,100);
} 

if(typingBool_back==false){

  typingBool_back=true;
  var tyInt_back = setInterval(typing_back,1);
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

function typing_back() {
  if(typingIdx_back<typingTxt_back.length){
    $(".back_text_blink").append(typingTxt_back[typingIdx_back]);
    typingIdx_back++;
  } else{
    clearInterval(tyInt_back);
    $(".back_text_blink").append("<span>_</span>");
  }
}

});