var data = { path: 'https://legal-abc.ru' }

export default function Mail() {
	jQuery(document).ready(function() {

		console.log("mail is here");
		//E-mail Ajax Send

		jQuery("#mailform").submit(function(e) { //Change
			e.preventDefault();
			console.log("mail");
			var th = jQuery(this);

			let text = jQuery('textarea[name="text"]').val(),
       //email = jQuery('input[name="email"]').val(),
       phone = jQuery('input[name="phone"]').val(),
			 //selected = jQuery('select[name="selected"]').val(),
			 //date = jQuery('input[name="date"]').val(),
			 name = jQuery('input[name="name"]').val();
			 //time = jQuery('input[name="time"]').val();

			jQuery.ajax({
				type: "POST",
				url: data.path+"/sendmail",
				contentType: "application/json; charset=utf-8", //Change
				data: JSON.stringify({ text, phone, name })
			}).done(function() {
				jQuery(".submit-wrap").show();
				setTimeout(function() { jQuery(".submit-wrap").fadeOut('slow'); }, 1500);
				th.trigger("reset");
				}, 2000);
			});
			return false;
		});

}
