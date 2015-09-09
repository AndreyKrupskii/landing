var $=(jQuery);
function Slider(container, nav, imgs){
    this.container=container;
    this.nav=nav;
    this.imgs=imgs;
    this.imgWidth=0;
    this.imgLen=this.imgs.length;
    this.current=0;
}
Slider.prototype.thransition=function(){
    this.imgWidth=this.imgs.width();
    this.container.animate({
        "margin-left":-(this.current*this.imgWidth)
    });
    console.log(this.imgWidth)
};
Slider.prototype.setCurrent=function(dir){
    var pos=this.current;
    pos+=~~(dir==="next")||-1;
    this.current=(pos<0)? this.imgLen-1: pos % this.imgLen;
};
function setSliderWidth(){
    $('.slider ul').css('width', ($('.slider').find('.slider_item').length)*($(window).width()));
    $('.slider_item').css('width', $(window).width())
}
setSliderWidth();
$(window).resize(function(){
    setSliderWidth();
})
var container=$('.slider ul');
var imgs=$('.slider ul').find('li');
var nav=$(".slider_nav").find('.button');
//------------------------------------------------------------------------------
var slider=new Slider(container,nav,imgs);
slider.nav.on("click",function(){
    var dir= $(this).data('dir');
    slider.setCurrent(dir);
    slider.thransition();
});
