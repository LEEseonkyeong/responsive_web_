$(function(){
    $(".menu_toggle_btn").click(function(){
<<<<<<< HEAD
        $(".nav").stop().slideToggle("fast");
    }) // click
=======
        $(".gnb").stop().slideToggle("fast");
    }) // click

    $(".search_select_box span").hover(function(){
        $(this).next().stop().slideDown();
    },function(){
        $(this).next().stop().slideUp();
    }) // hover
>>>>>>> 5317bec (2nd commit)
}) // jQuery