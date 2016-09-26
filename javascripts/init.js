/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */


    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);



/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});



/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/


   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();
      $('#message-warning').fadeOut();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

if(contactName == "" || contactEmail=="" || contactMessage == "")
{
  msg = "Please Enter all mandatory fields."
  $('#image-loader').fadeOut();
  $('#message-warning').html(msg);
  $('#message-warning').fadeIn();
  $('#message-warning').focus();
}
else if(!isValidEmailAddress( contactEmail ))
{
  msg = "Please Enter valid email."
  $('#image-loader').fadeOut();
  $('#message-warning').html(msg);
  $('#message-warning').fadeIn();
  $('#message-warning').focus();
}
else {
  console.log({"name":contactName,"email":contactEmail,"subject":contactSubject,"message":contactMessage});
      emailjs.send("gmail", "avenkit_services",
          {"name":contactName,"email":contactEmail,"subject":contactSubject,"message":contactMessage})
      .then(function(response) {
         console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
         $('#image-loader').fadeOut();
         $('#message-warning').hide();
         $('#contactForm').fadeOut();
         $('#message-success').fadeIn();
      }, function(err) {
         console.log("FAILED. error=", err);
         $('#image-loader').fadeOut();
         $('#message-warning').html(msg);
        $('#message-warning').fadeIn();
      });

    }

    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };

      return false;
   });



   $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

});
