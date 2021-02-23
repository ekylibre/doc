// Adaptation par Ekylibre, https://doc.ekylibre.com

jQuery(function ($) {

	//When you click on a link with class of poplight and the href starts with a # 
	$('a.poplight').on('click', function () {
		var popID = $(this).data('rel'); //Get Popup Name
		var popWidth = $(this).data('width'); //Gets Popup Width

		//Fade in the Popup and add close button
		$('#' + popID).fadeIn().css({
			'width': popWidth
		}).prepend('<a href="#" class="close"><img src="../images/commun/close-pop-up.svg" width="20" class="btn_close" title="Fermer la modale" alt="Fermer" /></a>');
        
		//Define margin for center alignment (vertical + horizontal) - we add 80 to the height/width to accomodate for the padding + border width defined in the css
		var popMargTop = ($('#' + popID).height() + 50) / 2;
		var popMargLeft = ($('#' + popID).width() + 18) / 2;

		//Apply Margin to Popup
		$('#' + popID).css({
			'margin-top': -popMargTop,
			'margin-left': -popMargLeft
		});

		//Fade in Background
		$('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
		$('html').css({'overflow-y': 'hidden'});
		$('#fade').css({
			'filter': 'alpha(opacity=20)'
		}).fadeIn(); //Fade in the fade layer 

		return false;
	});

	//Close Popups and Fade Layer
	$('body').on('click', 'a.close, #fade', function () { //When clicking on the close or fade layer...
		$('#fade , .popup_block').fadeOut(function () {
			$('#fade, a.close').remove();
			$('html').css({'overflow-y': 'visible'});
		}); //fade them both out
		return false;
	});
});