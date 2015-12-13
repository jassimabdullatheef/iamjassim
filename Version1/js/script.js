// JavaScript Document
$(document).ready(function() {
	

	$(function(){

	// Instantiate MixItUp:

	$('#container').mixItUp({
	animation: {
		duration: 780,
		effects: 'fade rotateX(180deg) translateY(100%) stagger(64ms)',
		easing: 'ease'
	}
});

	$('.inner-nav').click(function(){
		link = document.getElementById($(this).data("link"));
		//alert($(link).offset().top);
		$('html, body').animate({
                        scrollTop: $(link).offset().top
                    }, 1000);
		//$(window).scrollTop($(this).data('link').scrollTop());
	})

});
	
    $("#option1").change(function() {
        $(".tab-content").css("margin-left","0px");
    });
	$("#option2").change(function() {
        $(".tab-content").css("margin-left","-100%");
    });
	$("#option3").change(function() {
        $(".tab-content").css("margin-left","-200%");
    });
	//$(".screen").height($(window).height());
	$(".navbar-toggle").click(function() {
        $("header").toggleClass('nav-hidden');
    });
	
	
	
$(window).scroll(function() {
	//Skill Meter
	$(".meter").each(function() {
			
			var thisPos = $(this).offset().top;
	
			var topOfWindow = $(window).scrollTop();
				if (thisPos < topOfWindow+600) {
					
					var value = $(this).attr('data-value')*3.6;
					var str1 = 'rotate(';
					var str2 = 'deg)';
					var item = $(this);
					var res = str1.concat(value,str2);	
					if(value<180){
							$(item).children('.left').css('transform',res);
							$(item).children('.left').css('-ms-transform',res);
							$(item).children('.left').css('-o-transform',res);
							$(item).children('.left').css('-o-transform',res);
							$(item).children('.left').css('-webkit-transform',res);	
						}
					else {
							var res = str1.concat(180,str2);
							$(item).children('.left').css('transform',res);
							$(item).children('.left').css('-ms-transform',res);
							$(item).children('.left').css('-o-transform',res);
							$(item).children('.left').css('-o-transform',res);
							$(item).children('.left').css('-webkit-transform',res);	
							value2=value-180;
							$(item).children('.left-overlay').css('visibility','hidden');
							var res = str1.concat(value2,str2);			
							$(item).children('.right').css('transform',res);
							$(item).children('.right').css('-ms-transform',res);
							$(item).children('.right').css('-o-transform',res);
							$(item).children('.right').css('-o-transform',res);
							$(item).children('.right').css('-webkit-transform',res);	
						}
				
				}
			});
		});
});
