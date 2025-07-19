

let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let selectError = document.getElementById('select-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){

  let name = document.getElementById('name').value;

  if(name.length == 0){
    nameError.innerHTML = 'name is required';
    return false;
  }
  else if(!name.match(/^[A-Za-z\s]{2,50}$/)){
    nameError.innerHTML = 'enter full name';

    return false;
  }
  else{
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}


function validateEmail(){

  let email = document.getElementById('email').value;

   if(email.length == 0){
    emailError.innerHTML = 'email is required';
    return false;
   }
   else if(!email.match(/^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,6}$/)){
    emailError.innerHTML = 'enter complete email';
    return false;
   }
   else{
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
   }
}

function validateSelect() {
  let select = document.getElementById('experience');
  let value = select.value;

  if (value === "") {
    selectError.innerHTML = 'please select any option';
    return false;
  } else {
    selectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateMessage(){

  let message = document.getElementById('suggestions').value;
  let required = 30;
  let left = required - message.length;

  if(left>0){
    messageError.innerHTML = left + ' more charaters';
    return false;
  }
  else{
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }

}

function validateForm(){
  if(!validateName() || !validateEmail() || !validateSelect() || !validateMessage()){
   submitError.innerHTML = 'Please fix the error';
   return false;
  }

}
