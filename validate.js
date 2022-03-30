
//GETTING ALL INPUT OBJECTS
var username =document.forms["vform"]['username'];
var email =document.forms["vform"]['email'];
var password =document.forms["vform"]['password'];
var cpassword =document.forms["vform"]['cpassword'];

//GETTING ALL ERROR DIPLAY OBJECTS
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

//SETTING ALL LISTENERS
username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

//VALIDATION FUNCTIONS
function validateForm(){
	//username validation
	if (username.value == "") {
		username.style.border = "1px solid red";
		name_error.textContent = "username is required";
		username.focus();
		return false;
	}
	//email validation
	if (email.value == "") {
		email.style.border = "1px solid red";
		email_error.textContent = "Email is required";
		email.focus();
		return false;
	}
	//password validation
	if (password.value =="") {
		password.style.border = "1px solid red";
		password_error.textContent = "password is required";
		password.focus();
		return false;
	}
	//check if the two passwords match
	if(password.value !=cpassword.value){
		password.style.border ="1px solid red";
		cpassword.style.border = "1px solid red";
		password_error.innerHTML = "The two passwords don't match";
		return false;
	}
}
//event handler functions
function nameVerify(){
	if (username.value != "") {
		username.style.border = "1px solid #5E6E66";
		name_error.innerHTML = "";
		username.focus();
		return true;
	}
}
function nameVerify(){
	if (email.value != "") {
		email.style.border = "1px solid #5E6E66";
		email_error.innerHTML = "";
		email.focus();
		return true;
	}
}
function nameVerify(){
	if (password.value != "") {
		password.style.border = "1px solid #5E6E66";
		password_error.innerHTML = "";
		password.focus();
		return true;
	}
}
