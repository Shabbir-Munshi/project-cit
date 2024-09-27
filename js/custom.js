$(function(){
    $('.slick_slider').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 3000
    });
    // Counter Up 
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
    // Leader slick slider 
    $('.leader_slick_slider').slick({
        autoplay: false,
        arrows: true,
        dots: false,
        fade: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
        prevArrow:'<i class="fa fa-long-arrow-left prev" ></i>',
        nextArrow:'<i class="fa fa-long-arrow-right next"></i>'
    });
    // back to top 
    // back to top button 
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 500){
        $('.back_to_top').fadeIn(200);
    } else{
        $('.back_to_top').fadeOut(400);
    }
  });
  //==== Animate the scroll to top
  $('.back_to_top').on('click', function(event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
  });
});