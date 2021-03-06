/*
	Landed by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			if (skel.vars.mobile)
				$body.addClass('is-touch');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 2000
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right',
				hideDelay: 350
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Parallax.
		// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
			if (skel.vars.browser == 'ie'
			||	skel.vars.mobile) {

				$.fn._parallax = function() {

					return $(this);

				};

			}
			else {

				$.fn._parallax = function() {

					$(this).each(function() {

						var $this = $(this),
							on, off;

						on = function() {

							$this
								.css('background-position', 'center 0px');

							$window
								.on('scroll._parallax', function() {

									var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);

									$this.css('background-position', 'center ' + (pos * -0.15) + 'px');

								});

						};

						off = function() {

							$this
								.css('background-position', '');

							$window
								.off('scroll._parallax');

						};

						skel.on('change', function() {

							if (skel.breakpoint('medium').active)
								(off)();
							else
								(on)();

						});

					});

					return $(this);

				};

				$window
					.on('load resize', function() {
						$window.trigger('scroll');
					});

			}

		// Spotlights.
			var $spotlights = $('.spotlight');

			$spotlights
				._parallax()
				.each(function() {

					var $this = $(this),
						on, off;

					on = function() {

						// Use main <img>'s src as this spotlight's background.
							$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

						// Enable transitions (if supported).
							if (skel.canUse('transition')) {

								var top, bottom, mode;

								// Side-specific scrollex tweaks.
									if ($this.hasClass('top')) {

										mode = 'top';
										top = '-20%';
										bottom = 0;

									}
									else if ($this.hasClass('bottom')) {

										mode = 'bottom-only';
										top = 0;
										bottom = '20%';

									}
									else {

										mode = 'middle';
										top = 0;
										bottom = 0;

									}

								// Add scrollex.
									$this.scrollex({
										mode:		mode,
										top:		top,
										bottom:		bottom,
										initialize:	function(t) { $this.addClass('inactive'); },
										terminate:	function(t) { $this.removeClass('inactive'); },
										enter:		function(t) { $this.removeClass('inactive'); },

										// Uncomment the line below to "rewind" when this spotlight scrolls out of view.

										//leave:	function(t) { $this.addClass('inactive'); },

									});

							}

					};

					off = function() {

						// Clear spotlight's background.
							$this.css('background-image', '');

						// Disable transitions (if supported).
							if (skel.canUse('transition')) {

								// Remove scrollex.
									$this.unscrollex();

							}

					};

					skel.on('change', function() {

						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();

					});

				});

		// Wrappers.
			var $wrappers = $('.wrapper');

			$wrappers
				.each(function() {

					var $this = $(this),
						on, off;

					on = function() {

						if (skel.canUse('transition')) {

							$this.scrollex({
								top:		250,
								bottom:		0,
								initialize:	function(t) { $this.addClass('inactive'); },
								terminate:	function(t) { $this.removeClass('inactive'); },
								enter:		function(t) { $this.removeClass('inactive'); },

								// Uncomment the line below to "rewind" when this wrapper scrolls out of view.

								//leave:	function(t) { $this.addClass('inactive'); },

							});

						}

					};

					off = function() {

						if (skel.canUse('transition'))
							$this.unscrollex();

					};

					skel.on('change', function() {

						if (skel.breakpoint('medium').active)
							(off)();
						else
							(on)();

					});

				});

		// Banner.
			var $banner = $('#banner');

			$banner
				._parallax();

	});



   ///*************************** Addition by IZV ***************************
    Curr_mode = "350h"
    Curr_link="https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTcwNjA5ODI2MDU5IiwiYW1vdW50IjoiMzUwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCe0L%2FQu9Cw0YLQsCDRgtGA0LXQvdGW0L3Qs9GDIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUiLCJwYXlfd2F5IjoiY2FyZCxsaXFwYXksZGVsYXllZCxpbnZvaWNlLHByaXZhdDI0In0%3D&signature=X9Vc%2FLv3z20hAisB5qSQclIQZIA%3D";
	if ($('#350UAH').attr("checked", "checked")){
		$('#payment_inField').val("350UAH")
	}
	else if($('#500UAH').attr("checked", "checked")){
		$('#payment_inField').val("500UAH")
	}
	else if($('#100UAH').attr("checked", "checked")){
		$('#payment_inField').val("100UAH")
	}


$( ".rb_pay" ).change(function() {
	if ($("#350UAH").is(":checked")){
		$('#payment_inField').val("350UAH")
        Curr_mode = "350h"
        Curr_link = "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTcwNjA5ODI2MDU5IiwiYW1vdW50IjoiMzUwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCe0L%2FQu9Cw0YLQsCDRgtGA0LXQvdGW0L3Qs9GDIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUiLCJwYXlfd2F5IjoiY2FyZCxsaXFwYXksZGVsYXllZCxpbnZvaWNlLHByaXZhdDI0In0%3D&signature=X9Vc%2FLv3z20hAisB5qSQclIQZIA%3D"
	}
	else if($("#500UAH").is(":checked")){
		$('#payment_inField').val("500UAH")
        Curr_mode = "500h"
        Curr_link = "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTcwNjA5ODI2MDU5IiwiYW1vdW50IjoiNTAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCe0L%2FQu9Cw0YLQsCDRgtGA0LXQvdGW0L3Qs9GDIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUiLCJwYXlfd2F5IjoiY2FyZCxsaXFwYXksZGVsYXllZCxpbnZvaWNlLHByaXZhdDI0In0%3D&signature=fXZqz8fwDOiZv1txSpGMA6IEXa0%3D"
	}
	else if($('#100UAH').attr("checked", "checked")){
		$('#payment_inField').val("100UAH")
        Curr_mode = "100h"
        Curr_link = "https://www.liqpay.com/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTcwNjA5ODI2MDU5IiwiYW1vdW50IjoiMTAwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCf0LXRgNC10LTQvtC%2F0LvQsNGC0LAg0LfQsCDRgtGA0LXQvdGW0L3QsyIsInR5cGUiOiJidXkiLCJsYW5ndWFnZSI6InJ1IiwicGF5X3dheSI6ImNhcmQsbGlxcGF5LGRlbGF5ZWQsaW52b2ljZSxwcml2YXQyNCJ9&signature=Gv3NswmzmezBIC%2F3Yhq%2BrP70syQ%3D"
	}
  
});
    $(".Thnx").css("width",window.outerWidth+"px")
    $(".Thnx").css("heigth",window.outerHeight+"px")
$("#Make_subscribe").click(function(){
    //check if all fields are ok
    if ($("#name").val()!=="" && $("#phone").val()!==""&&validateEmail($("#email").val())) {


        $.ajax({
            url: "//formspree.io/kyiv.ph@gmail.com",
            method: "POST",
            data: {Payment: Curr_mode,
                Name: $("input[type='text'][name='name']").val(),
                Email: $("input[type='email'][name='email']").val(),
                Phone: $("input[type='tel'][name='phone']").val()},
            dataType: "json"
        });

        $(".Thnx").css("display","block");
        $("body").css("opacity","0.7");

      /*  $.ajax({
            url: 'functions/payment.php',
            type: 'POST',
            data: ({'Mode': Curr_mode}),
            dataType: "json",
            success: function (result) {

                pay_signat = result['signat'];
                pay_data = result['data'];

                $("input[type='hidden'][name='data']").val(pay_data)
                $("input[type='hidden'][name='signature']").val(pay_signat)

                //$("input[type='submit'][name='LiquidCall']").click()

               // liqpay_link = "https://www.liqpay.com/api/3/checkout?"+"data="+encodeURIComponent(pay_data)+"&signature="+encodeURIComponent(pay_signat);


            },
            error: function() {
                liqpay_link = "#";
                alert("server restrictions")
            }
        }),*/
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        if (isChrome){




        }
        else if(isOpera){

        }
        else{
            //window.open(Curr_link,'_blank')
        }

    }
        return false
}

)

$(".Form_close").click(function(){
        $(".Thnx").css("display","none")
        //$("input[type='submit'][name='LiquidCall']").click()
        window.open(Curr_link,'_blank')
    $("body").css("opacity","1");
})

})(jQuery);
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
