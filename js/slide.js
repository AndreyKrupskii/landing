(function(){
    $('.nav_item').on('click',function(e){
        var scrollSpeed = 1300;
                var scrollTop = $(window).scrollTop();
                var id = $(this).data('slide');
                var goTo =  $('section.'+ id).offset().top;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
    $('.menu_item').on('click',function(e){
        var scrollSpeed = 1000;
                var scrollTop = $(window).scrollTop();
                var id = $(this).data('slide');
                var goTo =  $('section.'+ id).offset().top;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
    $('.btn-next').on('click',function(e){
        var scrollSpeed = 1000;
                var scrollTop = $(window).scrollTop();
                var id = $(this).data('slide');
                var goTo =  $('.section'+ id).offset().top;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
    $('.onTop').on('click',function(e){
        var scrollSpeed = 1000;
                var scrollTop = $(window).scrollTop();
                var goTo =  $('header').offset().top;
        e.preventDefault();
          $("html, body").animate({ scrollTop: goTo }, scrollSpeed);  
    });
})();