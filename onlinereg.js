function formValidate() {
	let intMay = document.registration.may;
	let intSept = document.registration.sept;
	let firstChoice = document.registration.firstChoice;
	let secondChoice = document.registration.secondChoice;
	let thirdChoice = document.registration.thirdChoice;
	let yHostel = document.registration.yes;
	let nHostel = document.registration.no;
	let scholar = document.registration.scholarship;
	let enName = document.registration.Ename;
	let sexm = document.registration.male;
	let sexf = document.registration.female;
	let nation = document.registration.nationality;
	let noIC = document.registration.nIC;
	let race = document.registration.race;
	let religion = document.registration.religion;
	let mobileNum = document.registration.SPnum;
	let mail = document.registration.email;
	let add = document.registration.address;
	let area = document.registration.area;
	let pCode = document.registration.postcode;
	let state = document.registration.state;
	let secondary = document.registration.scName;
	let cert = document.registration.certificate;
	let fGrade = document.registration.bm;
	let scGrade = document.registration.sej;
	let tGrade = document.registration.math;
	let fourGrade = document.registration.bi;

	// if (true) {
	// 	let y = 0;
		if (validIntake(intMay,intSept)) {
		if (validfirstChoice(firstChoice)) {
		if (validsecondChoice(secondChoice)) {
		if (validthirdChoice(thirdChoice)) {
		if (validhostel(yHostel,nHostel)) {
		if (validscholar(scholar)) {
		if (validenName(enName,2,15)) {
			if (validgender(sexm,sexf)) {
			if (validnation(nation)) {
			if (validnoIC(noIC)) {
			if (validrace(race)) {
			if (validreli(religion)) {
				if (validnumber(mobileNum)) {
				if (validemail(mail)) {
				// if (validadd(add)) {
				if (validarea(area)) {
				if (validpCode(pCode)) {
				if (validstate(state)) {
					if (validschool(secondary)) {
					if (validcert(cert)) {
					if (validfGrade(fGrade)) {
					if (validscGrade(scGrade)) {
					if (validtGrade(tGrade)) {
					if (validfourGrade(fourGrade)) {
					}
					}
					}
					}
					}
					}
				}
				}
				}
				//}
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

	function validscholar(scholar) {
		if (scholar.value == "default") {
			alert ("Please select either you have recieve sholarship or not!");
			scholar.focus();
			return false;
		} else {
			return true;
		}
	}


	function validenName(enName,mn,mx) {
		var enName_len = enName.value.length;
		if(enName_len == 0 || enName_len >= mx || enName_len < mn) {
			alert("Your name should between " + mn + " and " + mx);
			enName.focus();
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
		var numbers = /^[0-9]+$/;
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
		var numbers = /^[0-9]+$/;
		if (mobileNum.value.match(numbers)) {
			return true;
		} else {
			alert ("Please enter your mobile number without '-'!");
			mobileNum.focus();
			return false;
		}
	}
	
	function validemail(mail) {
		var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (mail.value.match(format)) {
			return true;
		} else {
			alert ("Plearse enter the valid email!");
			mail.focus();
			return false;
		}
	}

	// function validadd(add) {
	// 	var letters = /^[0-9a-zA-Z]+$/;
	// 	if (add.value.match(letters)) {
	// 		return true;
	// 	} else {
	// 		alert ("Please enter the valid address!");
	// 		add.focus();
	// 		return false;
	// 	}
	// }

	function validarea(area) {
		var letters = /^[A-Z\sa-z]+$/;
		if (area.value.match(letters)) {
			return true;
		} else {
			alert ("Please enter the area!");
			area.focus();
			return false;
		}
	}
	
	function validpCode(pCode) {
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
	
	function validschool(secondary) {
		var letters = /^[A-Z\sa-z]+$/;
		if (secondary.value.match(letters)) {
			return true;
		} else {
			alert ("Please enter again!");
			secondary.focus();
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

	function validfGrade(fGrade) {
		var grade = /^[A-Ga-g]+$/;
		if (fGrade.value.match(grade)) {
			return true;
		} else {
			alert ("Please enter the grade! The grade only between A-G / a-g!");
			fGrade.focus();
			return false;
		}
	}

	function validscGrade(scGrade) {
		var grade = /^[A-Ga-g]+$/;
		if (scGrade.value.match(grade)) {
			return true;
		} else {
			alert ("Please enter the grade! The grade only between A-G / a-g!");
			scGrade.focus();
			return false;
		}
	}

	function validtGrade(tGrade) {
		var grade = /^[A-Ga-g]+$/;
		if (tGrade.value.match(grade)) {
			return true;
		} else {
			alert ("Please enter the grade! The grade only between A-G / a-g!");
			tGrade.focus();
			return false;
		}
	}

	function validfourGrade(fourGrade) {
		var grade = /^[A-Ga-g]+$/;
		if (fourGrade.value.match(grade)) {
			alert('Form successfully submitted');
			window.location.reload();
			return true;
		} else {
			alert ("Please enter the grade! The grade only between A-G / a-g!");
			fourGrade.focus();
			return false;
		}
	}
			
}