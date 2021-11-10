$(document).ready(function() {
          resizeDiv();
        });

        window.onresize = function(event) {
          resizeDiv();
        }

        function resizeDiv() {
           vpw=$(window).width();
           vph=$(window).height();
            $("#title").css({"height":vph + "px"});
        }

/* affix the navbar after scroll below header $('#intro').height()*/
$('#nav').affix({
      offset: {
        top: $(window).height()-$('#nav').height()
      }
}); 

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function() {
 $('.scrollTo').click( function() { // Au clic sur un élément
 var page = $(this).attr('href'); // Page cible
 var speed = 100; // Durée de l'animation (en ms)
 $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 return false;
 });
 });

/* particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', 'https://api.myjson.com/bins/2smr4', function() {
  console.log('callback - particles.js config loaded');
});*/

$(function () {
  $('[data-toggle="popover"]').popover()
});

/* LOADER */
$(window).load(function() {
      $(".loader").fadeOut(2000);
});