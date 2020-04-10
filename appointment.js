function formValidation() {
	var username = document.registration.name;
	var phone = document.registration.phone;
	var email = document.registration.mail;
	var time = document.registration.aTime;
	var count = document.registration.count;
	var kind = document.registration.kind;

		var letters = /^[A-Z\sa-z]+$/;
			if(username.value.match(letters)) {
				return true;

			} else {

			alert('Username must have alphabet characters only');
				username.focus();
				return false;
			}

		var numbers = /^[0-9]+$/;
			if(phone.value.match(numbers)) {
				return true;

			} else {

			alert('Phone number must in numeric characters only');
			phone.focus();
				return false;
			}

		var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(email.value.match(emailformat)) {
				return true;

			} else {

			alert("You have entered an invalid email address!");
			email.focus();
				return false;
		}

	alert("Thank You!")
	return true;
}