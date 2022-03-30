 function validateForm(){
	var username = document.getElementById("username");
	var phone = document.getElementById("phone");
	var password = document.getElementById("password");
	var cpassword = document.getElementById("cpassword");
	removeMessage();
	var valid=true;
	if(username.value.length == 0){
		username.className="wrong-input";
		username.nextElementSibling.innerHTML="username can't be blank";
		valid=false;
	}
	if(phone.value.length<10){
		phone.className="wrong-input";
		phone.nextElementSibling.innerHTML="contact cannot be less than 10 digits";
		valid=false;
	}
	if(password.value.length<6){
		password.className="wrong-input";
		password.nextElementSibling.innerHTML="password cannot be less than 6 digits";
		valid=false;
	}
	if(password.value!=cpassword.value){
		cpassword.className="wrong-input";
		cpassword.nextElementSibling.innerHTML="password does not match";
		valid=false;
	}

	return valid;
}
function removeMessage(){
	var errorinput=document.querySelectorAll("wrong-input");
	[].forEach.call(errorinput, function(el){
		el.classList.remove("wrong-input");
	});
	var errorpara=document.querySelectorAll(".error");
	[].forEach.call(errorinput, function(el){
		el.innerHTML="";
	});
}