$(function(){

    // FF14 scroll event
  $(".FF14_info .screen_img").animate({"margin-top":"-1643"},8000,function(){
    $(".FF14_info .screen_img").animate({"margin-top":"0"},4000);
  });

  setInterval(FF14_screen,13500);

  function FF14_screen(){
    $(".FF14_info .screen_img").animate({"margin-top":"-1643"},8000,function(){
      $(".FF14_info .screen_img").animate({"margin-top":"0"},4000);
    }); 
  }
    // FF14 scroll event (mobile)
  $(".FF14_info .M_img").mouseenter(function(){
    $(this).find("img").stop().animate({"margin-top":"-517"},2500);
  });

  $(".FF14_info .M_img").mouseleave(function(){
    $(this).find("img").stop().animate({"margin-top":"0"},1500);
  });

  // Higashino scroll event
  $(".Higashino_info .screen_img").animate({"margin-top":"-1612"},8000,function(){
    $(".Higashino_info .screen_img").animate({"margin-top":"0"},4000);
  });

  setInterval(Higashino_screen,13500);

  function Higashino_screen(){
    $(".Higashino_info .screen_img").animate({"margin-top":"-1612"},8000,function(){
      $(".Higashino_info .screen_img").animate({"margin-top":"0"},4000);
    }); 
  }

  // Higashino scroll event (mobile)
  $(".Higashino_info .M_img").mouseenter(function(){
    $(this).find("img").stop().animate({"margin-top":"-1800"},8000);
  });

  $(".Higashino_info .M_img").mouseleave(function(){
    $(this).find("img").stop().animate({"margin-top":"0"},1500);
  });

    // CHANEL scroll event
    $(".CHANEL_info .screen_img").animate({"margin-top":"-2130"},8000,function(){
      $(".CHANEL_info .screen_img").animate({"margin-top":"0"},4000);
    });
  
    setInterval(CHANEL_screen,13500);
  
    function CHANEL_screen(){
      $(".CHANEL_info .screen_img").animate({"margin-top":"-2130"},8000,function(){
        $(".CHANEL_info .screen_img").animate({"margin-top":"0"},4000);
      }); 
    }
  
    // TEAM scroll event
    $(".team_info .screen_img").animate({"margin-top":"-1803"},8000,function(){
      $(".team_info .screen_img").animate({"margin-top":"0"},4000);
    });
  
    setInterval(team_screen,13500);
  
    function team_screen(){
      $(".team_info .screen_img").animate({"margin-top":"-1803"},8000,function(){
        $(".team_info .screen_img").animate({"margin-top":"0"},4000);
      }); 
    }
    
    // TEAM scroll event (mobile)
    $(".team_info .M_img").mouseenter(function(){
      $(this).find("img").stop().animate({"margin-top":"-1200"},8000);
    });

    $(".team_info .M_img").mouseleave(function(){
      $(this).find("img").stop().animate({"margin-top":"0"},1500);
    });
});