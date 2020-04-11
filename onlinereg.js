function formValidate() {
	let intMay = document.registration.yearIntake;
	let intSept = document.registration.yearIntake;
	let firstChoice = document.registration.firstChoice;
	let secondChoice = document.registration.secondChoice;
	let thirdChoice = document.registration.thirdChoice;
	let yHostel = document.registration.yes;
	let nHostel = document.registration.no;
	let scholar = document.registration.scholarship;
	let enName = document.registration.Ename;
	let sexm = document.registration.male;
	let sexf = document.registration.female;
	let birthdate = document.registration.birthday;
	let nation = document.registration.nationality;
	let noIC = document.registration.nIC;
	let race = document.registration.race;
	let religion = document.registration.religion;
	let mobileNum = document.registration.SPnum;
	let mail = document.registration.email;
	let add = document.registration.address;
	let pCode = document.registration.postcode;
	let state = document.registration.state;
	let secondSchool = document.registration.secondary;
	let cert = document.registration.certificate;
	let fSubject = document.registration.subject1;
	let fGrade = document.registration.grade1;
	let sSubject = document.registration.subject2;
	let sGrade = document.registration.grade2;
	let tSubject = document.registration.subject3;
	let tGrade = document.registration.grade3;
	let fourSubject = document.registration.subject4;
	let fourGrade = document.registration.grade4;
	let fifSubject = document.registration.subject5;
	let fifGrade = document.registration.grade5;

	if (true) {
		let y = 0;
		if (validIntake(intMay,intSept)) {
		if (validfirstChoice(firstChoice)) {
		if (validsecondChoice(secondChoice)) {
		if (validthirdChoice(thirdChoice)) {
		if (validscholar(scholar)) {
		if (validhostel(yHostel,nHostel)) {
		if (validenName(enName,2,15)) {
			if (validgender(sexm,sexf)) {
			if (validnation(nation)) {
			if (validnoIC(noIC)) {
			if (validrace(race)) {
			if (validreli(religion)) {
				if (validnumber(mobileNum)) {
				if (validemail(mail)) {
				if (validadd(add)) {
				if (validpost(pCode)) {
				if (validstate(state)) {
					if (validscSchool(secondSchool)) {
					if (validcert(cert)) {
						y++;
					}
					}
				}
				}
				}
				}
				}
			}
			}
			}
			}
			}
		}
		}
		}
		}
		}
		}
		}
		if (y === 1) {
			if (validfSubject(fSubject)) {
			if (validfGrade(fGrade)) {
			if (validfSubject(sSubject)) {
			if (validfGrade(sGrade)) {
			if (validfSubject(tSubject)) {
			if (validfGrade(tGrade)) {
				if (validfSubject(fourSubject)) {
				if (validfGrade(fourGrade)) {
				if (validfSubject(fifSubject)) {
				if (validfGrade(fifGrade)) {
				}
				}
				}
				}
			}
			}
			}
			}
			}
			}
		}
	}
	return false;

	function validIntake(intMay,intSept) {
		var x = 0;
		if (intMay.checked) {
			x++;
		}
		if (intSept.checked){
			x++;
		}
		if (x == 0) {
			alert ("Please select your intake time!");
			intMay.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfirstChoice(firstChoice) {
		if (firstChoice.value == "default") {
			alert ("Please select your course!");
			firstChoice.focus();
			return false;
		} else {
			return true;
		}
	}

	function validsecondChoice(secondChoice) {
		if (secondChoice.value == "default") {
			alert ("Please select your course!");
			secondChoice.focus();
			return false;
		} else {
			return true;
		}
	}

	function validthirdChoice(thirdChoice) {
		if (thirdChoice.value == "default") {
			alert ("Please select your course!");
			thirdChoice.focus();
			return false;
		} else {
			return true;
		}
	}

	function validscholar(scholar) {
		if (scholar.value == "default") {
			alert ("Please select either you have recieve sholarship or not!");
			scholar.focus();
			return false;
		} else {
			return true;
		}
	}

	function validhostel(yHostel,nHostel) {
		var x = 0;
		if (yHostel.checked) {
			x++;
		}
		if (nHostel.checked) {
			x++;
		}
		if (x == 0) {
			alert ("Please make a selection!");
			yHostel.focus();
			return false;
		} else {
			return true;
		}
	}

	function validenName(enName,mn,mx) {
		var enname_len = enname.value.length;
		if(enname_len == 0 || enname >= mx || enname < mn) {
			alert("Your name should between " + mn + " and " + mx);
			enname.focus();
			return false;
		} else {
			return true;
		}
	}


	function validgender(sexm,sexf) {
		var x = 0;
		if (sexm.checked) {
			x++;
		}
		if (sexf.checked) {
			x++;
		}
		if (x == 0) {
			alert ("Please choose your gender!");
			sexm.focus();
			return false;
		} else {
			return true;
		}
	}

	function validnation(nation) {
		if (nation.value == "default") {
			alert ("Please select your nationality!");
			nation.focus();
			return false;
		} else {
			return true;
		}
	}
	
	function validnoIC(noIC) {
		var numbers = /^[0-9]$/;
		if (noIC.value.match(numbers)) {
			return true;
		} else {
			alert ("Please enter your No.IC without '-'!");
			noIC.focus();
			return false;
		}
	}

	function validrace(race) {
		if (race.value == "default") {
			alert ("Please select your race!");
			race.focus();
			return false;
		} else {
			return true;
		}
	}
	
	function validreli(religion) {
		if (religion.value == "default") {
			alert ("Please select your religion!");
			race.focus();
			return false;
		} else {
			return true;
		}
	}

	function validnumber(mobileNum) {
		var numbers = /^[0-9]$/;
		if (mobileNum.value.match(numbers)) {
			return true;
		} else {
			alert ("Please enter your mobile number without '-'!");
			mobileNum.focus();
			return false;
		}
	}
	
	function validemail(mail) {
		var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (mail.value.match(emailformat)) {
			return true;
		} else {
			alert ("Plearse enter the valid email!");
			mail.focus();
			return false;
		}
	}

	function validadd(add) {
		var address = /^[A-Za-z0-9\s]$/;
		if (add.value.match(address)) {
			return true;
		} else {
			alert ("Please enter the valid address!");
			add.focus();
			return false;
		}
	}
	
	function validpost(pCode) {
		var numbers = /^[0-9]+$/;
		if (pCode.value.match(numbers)) {
			return true;
		} else {
			alert ("Plaese enter the valid postcode!");
			pCode.focus();
			return false;
		}
	}

	function validstate(state) {
		if (state.value == "default") {
			alert ("Please select your stste!");
			state.focus();
			return false;
		} else {
			return true;
		}
	}
	
	function validscSchool(secondSchool) {
		var address = /^[A-Za-z0-9\s]+$/;
		if (secondSchool.value.match(address)) {
			return true;
		} else {
			alert ("Please enter the valid address!");
			secondSchool.focus();
			return false;
		}
	}

	function validcert(cert) {
		if (cert.value == "default") {
			alert ("Please select your certificate!");
			cert.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfSubject(fSubject) {
		if (fSubject == "default") {
			alert ("Please choose the first subject!");
			fSubject.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfGrade(fGrade) {
		if (fGrade == "default") {
			alert ("Please choose the grade!");
			fGrade.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfSubject(sSubject) {
		if (sSubject == "default") {
			alert ("Please choose the second subject!");
			sSubject.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfGrade(sGrade) {
		if (sGrade == "default") {
			alert ("Please choose the grade!");
			sGrade.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfSubject(tSubject) {
		if (tSubject == "default") {
			alert ("Please choose the third subject!");
			tSubject.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfGrade(tGrade) {
		if (tGrade == "default") {
			alert ("Please choose the grade!");
			tGrade.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfourSubject(fourSubject) {
		if (fourSubject == "default") {
			alert ("Please choose the fourth subject!");
			fourSubject.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfourGrade(fourGrade) {
		if (fourGrade == "default") {
			alert ("Please choose the grade!");
			tGrade.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfifSubject(fifSubject) {
		if (fifSubject == "default") {
			alert ("Please choose the fifth subject!");
			fifSubject.focus();
			return false;
		} else {
			return true;
		}
	}

	function validfifGrade(fifGrade) {
		if (fifGrade == "default") {
			alert ("Please choose the grade!");
			fifGrade.focus();
			return false;
		} else {
			alert('Form successfully submitted');
			window.location.reload();
			return true;
		}
	}
}