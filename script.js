$(document).ready(function() {
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '15%'
    });

    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-about').offset().top}, 1000);
    });
    $('.js--scroll-to-home').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-home').offset().top}, 1000);
    });
    $('.js--scroll-to-offers').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-offers').offset().top}, 1000);
    });
    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top}, 1000);
    });
    
    $('.js--mobile-nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200)
    });
    $('.js--main-nav li a').click(function() {
        var nav = $('.js--main-nav');
        console.log(screen.availWidth)
        if (screen.width <= 480){
            nav.slideToggle(200)
        }
        
    })
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

})