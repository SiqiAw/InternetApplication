function formValidation() {
	var username = document.registration.name;
	var phone = document.registration.phone;
	var email = document.registration.mail;
	var time = document.registration.aTime;
	var count = document.registration.count;
	var kind = document.registration.kind;

	// var letters = /^[A-Z\Sa-z]+$/;
	// var numbers = /^[0-9]+$/;
	// var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	// 	if (username !== letters) {
	// 		alert ("Username must in alphabet only!");
	// 		return false;
	// 	}

	// 	if (phone !== numbers) {
	// 		alert ("Please enter the valid phone number!");
	// 		return false;
	// 	}

	// 	if (email !== emailformat) {
	// 		alert ("Enter the valid email!");
	// 		return false;
	// 	}

	// 	alert ("Successful!");
	// 	return true;

		var letters = /^[A-Z\sa-z]+$/;
			if(username.value.match(letters)) {
				// return true;

			} else {

			alert('Username must have alphabet characters only');
				username.focus();
				return false;
			}

		var numbers = /^[0-9]+$/;
			if(phone.value.match(numbers)) {
				// return true;

			} else {

			alert('Phone number must in numeric characters only');
			phone.focus();
				return false;
			}

		var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(email.value.match(emailformat)) {
				// return true;

			} else {

			alert("You have entered an invalid email address!");
			email.focus();
				return false;
		}

	alert("We will contact with you to comfirm you appointment!")
	return true;
}