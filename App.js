/*
	Feauters:
		User Able To Calculate Them Age By Just BirthYear
*/


function calcAge() {
	var userAge = prompt("What Is Your Birth Year?");
	var outputAge = document.getElementById("output-age");

	if (userAge === "") {
		alert("Fill Out Form Correctly");
		outputAge = "";
	}

	var year = new Date().getFullYear();

	// Age Calculating Formula
	var birthyear = Math.abs(userAge - year);
	
	outputAge.innerHTML = `Your Age Is ${birthyear}`;
}