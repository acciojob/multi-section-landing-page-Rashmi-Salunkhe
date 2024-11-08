//your JS code here. If required.
let names = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('number');
let message = document.getElementById('message');
let submitBtn = document.getElementById('btn');
let validationForm = document.getElementById('validation');

function validateInput(){
	return names.value !== "" && email.value !== "" && phoneNumber.value !== "" && message.value !== "";
}

submitBtn.disabled = true;

function showSubmitBtn(){
	submitBtn.disabled = !validateInput();
}
	
names.addEventListener("input", showSubmitBtn);
email.addEventListener("input", showSubmitBtn);
phoneNumber.addEventListener("input", showSubmitBtn);
message.addEventListener("input", showSubmitBtn);
	
validationForm.style.display = "none";

let nameOnValidForm = document.getElementById('name-p');
let emailOnValidForm = document.getElementById('email-p');
let numberOnValidForm = document.getElementById('number-p');
let messageOnValidForm = document.getElementById('message-p');


submitBtn.addEventListener('click', function(event){
	
	event.preventDefault();
	validationForm.style.display = "block";
	nameOnValidForm.innerHTML = names.value;
	emailOnValidForm.innerHTML = email.value;
	numberOnValidForm.innerHTML = phoneNumber.value;
	messageOnValidForm.innerHTML = message.value;

});

let closeBtn = document.getElementById('close');
closeBtn.addEventListener("click", function(){
	validationForm.style.display = "none";
});

let validateBtn = document.getElementById('popup-btn');

validateBtn.addEventListener("click", function(){
	validationForm.style.display = "none";
	alert("Form submitted sucessfully");
	names.value = "";
	email.value = "";
	phoneNumber.value = "";
	message.value = "";
})
