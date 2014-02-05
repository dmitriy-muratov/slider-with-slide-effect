jQuery(document).ready(function(){

	jQuery('ul#slider').wrap('<div id="slider-wrapper" />');
	jQuery('<a id="prev" href="#">Prev</a>').appendTo("#slider-wrapper");
	jQuery('<a id="next" href="#">Next</a>').appendTo("#slider-wrapper");
	
	var slider = jQuery("#slider");
	var count_slide_items = jQuery(".slide").length;
	var slide_width = jQuery(".slide").outerWidth();
	var full_width = slide_width*count_slide_items;
    var movement = 0;
    
	slider.css("width", full_width);
	
	jQuery("#prev").click(function(){
    
        slider.stop();
        
        movement = movement - slide_width;    
		if (movement > 0) {
			$(slider).animate({left: -movement}, 700);
		}
		else {
			slider.animate({left: "0"}, 700);
            movement = 0;
		}      
        return false;  
	});
    
	jQuery("#next").click(function(){
        
        slider.stop();
        
        movement = movement + slide_width;     
		if ( movement != full_width ) {
			$(slider).animate({left: -movement}, 700);
		}
		else {
			slider.animate({left: "0"}, 700);
            movement = 0;
		}
        return false;
	});

	
});