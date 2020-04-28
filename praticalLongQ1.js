function validate() {
	if(document.vaForm.venue.value == 0) {
		alert("Pleae choose!");
		return false;
	}
	if(document.vaForm.name.value.length < 1) {
		alert("Your name is too short!");
		return false;
	}
	if(document.vaForm.phone.value.length < 10) {
		alert("Please enter the valid phone number!");
		return false;
	}
	if(document.vaForm.apply.value.length < 1) {
		alert("Please decleared the reason for apply!");
		return false;
	}
	if(document.vaForm.event.value.length < 1) {
		alert("Please enter the event!");
		return false;
	}
	if(document.vaForm.datetime.value.length == "") {
		alert("Please choose the date time for event!");
		return false;
	}
	if(document.vaForm.count.value == "") {
		alert("How many participant?");
		return false;
	}
	return true;
}