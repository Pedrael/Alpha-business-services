import jQuery from 'jquery';
//import * as data from '../server/axiospath.json';

export default function Mail() {
	jQuery(document).ready(function() {
		jQuery(".submit-message").hide();
		console.log("mail is here");
		//E-mail Ajax Send

		jQuery("#mailform").submit(function(e) { //Change
			e.preventDefault();
			console.log("mail");
			var th = jQuery(this);

			let text = jQuery('textarea[name="text"]').val(),
       email = jQuery('input[name="email"]').val(),
       phone = jQuery('input[name="phone"]').val(),
			 selected = jQuery('select[name="selected"]').val(),
			 date = jQuery('input[name="date"]').val();

			jQuery.ajax({
				type: "POST",
				url: //data.path+"/sendmail",
				contentType: "application/json; charset=utf-8", //Change
				data: JSON.stringify({
	 			 text,
	 			 email,
	 			 phone,
	 			 selected,
	 			 date
	 		 })
			}).done(function() {
				jQuery(".submit-message").show();
				setTimeout(function() { jQuery(".submit-message").fadeOut('slow'); }, 1500);
				}, 2000);
			});
			return false;
		});

}
