
// global variables
$navOverlayTrigger = $(".nav-overlay-trigger");
$navOverlay = $(".nav-overlay");
$navOverlayTriggerClose = $(".nav-overlay-trigger-close");
$body = $("body");
$floatingButton = $(".button");

$navLectures = $(".nav-lectures");
$navExercises = $(".nav-exercises");

// navigation toggle add & remove
$($navOverlayTrigger).click(function() {
	$navLectures.addClass('nav-open');
	$navLectures.addClass('.bounceOutUp');
	$body.css('overflow', 'hidden');
});

$($navOverlayTriggerClose).click(function() {
	$navLectures.removeClass('nav-open');
	$navExercises.removeClass('nav-open');
	$body.css('overflow', 'auto');
});

$($floatingButton).click(function() {
	$navExercises.addClass('nav-open');
	$body.css('overflow', 'hidden');
});

$(".scroll-and-overlay-close").click(function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top;
       }
       //go to destination
        $navLectures.removeClass('nav-open');
        $navExercises.removeClass('nav-open');
        $body.css('overflow', 'auto');
       $('html,body').animate({scrollTop:dest}, 1000,'swing');
 });


$(".scroll").click(function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top;
       }
       //go to destination
       $('html,body').animate({scrollTop:dest}, 1000,'swing');
 });