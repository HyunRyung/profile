$(function(){
  $(".FF14_info .M_img").mouseenter(function(){
    $(this).find("img").stop().animate({"margin-top":"-520"},2500);
  });

  $(".FF14_info .M_img").mouseleave(function(){
    $(this).find("img").stop().animate({"margin-top":"0"},1500);
  });
});