let mainSideBar = document.getElementById('js-sidebar');
let sideBarToggle = document.getElementById('js-sidebar-toggle');

sideBarToggle.addEventListener('click', function () {
	mainSideBar.classList.toggle('active');
});

function validate() {
	if(document.santaForm.name.value.length < 1) {
		alert("Please enter your name!");
		return false;
	}
	if(document.santaForm.age.value == "") {
		alert("Please enter your age!");
		return false;
	}
	if(document.santaForm.wish.value.length < 1) {
		alert("Say something to Santa Claus!");
		return false;
	}
	if(document.santaForm.gift.value.length < 1) {
		alert("Say something to Santa Claus!");
		return false;
	}
	return true;
}