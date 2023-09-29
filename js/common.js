$(function(){

    $(".btn-mob").click(function(){
        $(".collapse").slideToggle()
    })

    $(".accordion a").click(function(e){
        e.preventDefault();

    if( $(this).hasClass("active") ){
      $(this).next("p").slideUp();
      $(this).removeClass("active");
    }
    else{
      $(".accordion a").removeClass("active");
      $(".accordion p").slideUp();
      $(this).next("p").slideDown();
      $(this).addClass("active");
    }
    });


    //$("h1").css({color:"blue"})
    //$("h1").animate({"font-size":"50px"},1000);
    
    $("nav a").click(function(e){
        e.preventDefault();
        //$("nav a").removeClass("active");
        //$(this).addClass("active");
        let id=$(this).attr("href");
        let top=$(id).offset().top;

        $("html,body").animate({
            scrollTop:top-80
        })
    });

    $(".top").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0})
    });

    $("#portfolio .btn").click(function(){
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){$(".work").fadeIn();}
        else if( $(this).text()=="Website"){
            $(".work").fadeOut();
            $(".work:eq(0),.work:eq(1),.work:eq(2)").fadeIn();
        }
        else if( $(this).text()=="Branding"){
            $(".work").fadeOut();
            $(".work:eq(3),.work:eq(4),.work:eq(5)").fadeIn();
        }

    });


    $(window).scroll(function(){
        const top=$(this).scrollTop();


        if(top>=1000){
            $(".top").fadeIn();
        }
        else{
            $(".top").fadeOut();
        }



        if( top>=$("#contact").offset().top-$(window).height()/2 ){
            $("nav a").removeClass("active");
            $("nav li:nth-child(5) a").addClass("active");
        }
        else if( top>=$("#about").offset().top-$(window).height()/2 ){
            $("nav a").removeClass("active");
            $("nav li:nth-child(4) a").addClass("active");
        }
        else if( top>=$("#portfolio").offset().top-$(window).height()/2 ){
            $("nav a").removeClass("active");
            $("nav li:nth-child(3) a").addClass("active");
        }
        else if( top>=$("#services").offset().top-$(window).height()/2 ){
            $("nav a").removeClass("active");
            $("nav li:nth-child(2) a").addClass("active");
        }
        else{
            $("nav a").removeClass("active");
            $("nav li:nth-child(1) a").addClass("active");
        }
    });


    $(".signup").click(function(){
        $("body").append('<div class="overlay"></div>')
        $("body").append('<div class="popup"></div>')
        $(".popup").append($(".popupform").html());

        $(".overlay, .popup .close").click(function(){
            $(".popup, .overlay").remove();
        })

    });

    $(window).keyup(function(e){
        if(e.which==27){
            $(".popup, .overlay").remove()
        }
    });


    $(".popuppic").magnificPopup({
        type: 'image'
    });

    $(".slider").bxSlider({
        controls:false,
        auto:true,
        pause:3000,
        autoHover:true
    })

});