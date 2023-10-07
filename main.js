function formvalidate(){
  var firstName = document.getElementById("firstName").value;
  var familyName = document.getElementById("familyName").value;
  var today = document.getElementById("today").value;
  var month = document.getElementById("the month").value;
  var year = document.getElementById("the year").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var error = document.getElementById("error");
  var text = "";


  if (firstName.length < 3) {
    text = " Please Enter a Valid firstName";
    error.innerHTML = text;
    return false;
  }
  else if (familyName.length < 3){
    text = " Please Enter a Valid familyName";
    error.innerHTML = text;
    return false;
  }
  else if (today < 1 || today > 31 ){
    text = "Please Enter a Valid today";
    error.innerHTML = text;
    return false;
  }
  else if (month < 1 || month > 12 ){
    text = "Please Enter a Valid month";
    error.innerHTML = text;
    return false;
  }
  else if (year < 1970 || year > 2023 ){
    text = "Please Enter a Valid year";
    error.innerHTML = text;
    return false;
  }
  else if (familyName.length <3){
     text = "Please Enter a Valid familyName";
     error.innerHTML = text;
     return false;
  }
  else if (isNaN(phoneNumber) || phoneNumber.length != 11 ){
    text = "Please Enter a Valid phoneNumber";
    error.innerHTML = text;
    return false;
  }
  else if (email.indexOf("@") == -1 || email.length < 10){
    text = "Please Enter a Valid email";
    error.innerHTML = text;
    return false;
  }
  else if (newPassword.length < 10){
    text = "Please Enter a Valid newPassword";
    error.innerHTML = text;
    return false;
  }
  else if (confirmPassword != newPassword){
    text = "Please Enter a Valid confirmPassword";
    error.innerHTML = text;
    return false;
  }
  else{
    alert("Done");
    return true;
  }
}