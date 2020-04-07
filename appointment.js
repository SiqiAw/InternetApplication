function formValidation() {
	var uname = document.appointment.name;
	var uphone = document.appointment.phone;
	var email = document.appointment.mail;
	var time = document.appointment.aTime;
	var ucount = document.appointment.count;
	var ukind = document.appointment.kind;

	if (allletter(uname)) {
	if (allnumberic(uphone)) {
	if (ValidateEmail(email)) {
	}
	}
	}
	return false;
}


function allLetter(uname) { 
	var letters = /^[A-Za-z]+$/;
		if(uname.value.match(letters)) {
			return true;

		} else {

		alert('Username must have alphabet characters only');
		uname.focus();
			return false;
		}
}

function allnumeric(uphone) { 
	var numbers = /^[0-9]+$/;
		if(uphone.value.match(numbers)) {
			return true;

		} else {

		alert('Phone number must in numeric characters only');
		uphone.focus();
			return false;
		}
}

function ValidateEmail(email){
	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(email.value.match(emailformat)) {
			return true;

		} else {

		alert("You have entered an invalid email address!");
		email.focus();
		return false;
		}
}