$(window).load(function(){
    $(".loaderInner").delay(100).fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
$(document).ready(function(){
    function setHeaderSize(){
        $('header').css('width',$(window).width());
        $('header').css('height',$(window).height());
    }
    setHeaderSize();
    function setMenuMascSize(){
        $('.menu_masc').css('width',$(window).width());
        $('.menu_masc').css('height',$(window).height());
    }
    setMenuMascSize();
    function setHexHeight(){
        $('.hex').each(function(){
            var b=$(this).width();
            var a=parseInt(parseInt(Math.sqrt(b*b/2))*0.8155);
            $(this).css('height',a);
        });
    }
    setHexHeight();
    function phoneMenu(){
        var current=0
        $('.phoneMenu_btn').on('click',function(){
            if (current%2===0)
            {
                $('.phoneMenu_btn').addClass('phoneMenu_btn-active');
                $('.menu_masc').fadeIn();
            }
            else {
                $('.phoneMenu_btn').removeClass('phoneMenu_btn-active');
                $('.menu_masc').fadeOut();
            }
            current++;
        });
        $('.menu_item').on('click',function(){
            $('.phoneMenu_btn').removeClass('phoneMenu_btn-active');
            $('.menu_masc').fadeOut();
            current++;
        });
    }
    phoneMenu();
    $('#items').mixItUp();
    $(".portfolio_tab").on("click",function(){
        $(".portfolio_tab").removeClass('active');
        $(this).addClass('active');
    });
    function setMixedItemsHeight(){
        var a=300;
        $('.portfolio_item').each(function(){
            if (a>$(this).height()){a=$(this).height()}
        })
        $('.portfolio_item').css('height',a);
    }
//    setMixedItemsHeight();
    function setMapHeight(){
        $('.map').css("height",$('.map_img').height());
    }
    setMapHeight();
    function onTop(){
        window.onscroll = function(){
            if(window.pageYOffset>$(window).height()){
                $('.onTop').fadeIn();
            }
            else{
                $('.onTop').fadeOut();
            }
        };
    }
    onTop();
    $(window).resize(function(){
        setHeaderSize();
        setMenuMascSize();
        setHexHeight();
//        setMixedItemsHeight();
        setMapHeight();
        onTop();
    }); 
})();