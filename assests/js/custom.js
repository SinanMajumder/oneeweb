// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 30) {
            jQuery('.header').addClass('fixed-top');
        } else {
            jQuery('.header').removeClass('fixed-top');
        }
    });
});


//wow js

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();



// jQuery ui Tabs

jQuery( function() {
    jQuery( "#tabs" ).tabs({
        hide: { effect: "fadeOut", duration: 500 },
    }).addClass( "ui-tabs-vertical ui-helper-clearfix" );
    jQuery( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );


// form typing animation

  jQuery( "input, #message" ).airChars( {
    duration: 1,
    upperLimit: 200,
    sizeInterval: [ 22, 80 ]
} );

