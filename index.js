function validateNonEmpty(inputField, helpText) {
    if (inputField.value.length == 0) {
        if(helpText != null){
           helpText.innerHTML = "Enter a value, please";
        }
        return false;
        
    } else {
        if(helpText != null){
           helpText.innerHTML = "";
        }
    }

    return true;
}

function validateLength(min, max, inputField, helpText){
    if(inputField.value.length<min || inputField.value.length>max) {
        if (helpText != null) {
            helpText.innerHTML = "Enter 1 to 32 characters";
        }
        return false;
    } else {
        if (helpText != null){
            helpText.innerHTML = "";
        }
        return true;
    }
}

function validateDate(inputField, helpText){
    if(!validateNonEmpty(inputField, helpText)){
        return false;
    }
    
    return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4}))$/, inputField.value, helpText, "Please, enter date like this 09/22/2077 or this 09/22/77");
}

//Only for USA
function validatePhone(inputField, helpText){
    if(!validateNonEmpty(inputField, helpText)){
        return false;
    }
    
    return validateRegEx(/^\d{3}-\d{3}-\d{4}$/, inputField.value, helpText, "Please, enter phone number like this 800-555-3535");
}

function validateEmail(inputField, helpText){
    if(!validateNonEmpty(inputField, helpText)){
        return false;
    }
    
    return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/, inputField.value, helpText, "Please, check your e-mail");
}


//Only for USA ZIP code
function validateZIPCode(inputField, helpField){
    if(inputField.value.length != 5){
        if (helpField != null) {
            helpField.innerHTML = "You should enter exactly five numerals";
        }
        return false;
    } else if (isNaN(inputField.value)){
        if (helpField != null) {
            helpField.innerHTML = "You should enter a number";
        }
        return false;
    } else {
        if (helpField != null) {
            helpField.innerHTML = "";
        }
        return true;
    }
}

//Regular expressions
function validateRegEx(regex, inputStr, helpText, helpMessage){
    if (!regex.test(inputStr)){
        if(helpText != null){
            helpText.innerHTML = helpMessage;
        }
        return false;
    } else {
        if (helpText != null){
            helpText.innerHTML = '';
        }
        return true;
    }
}



//Send form
function placeOrder(form){
    if(validateLength(1, 32, form["message"], form["message_help"]) &&
      validateZIPCode(form["zipcode"], form["zipcode_help"]) &&
      validateDate(form["date"], form["date_help"]) &&
      validateNonEmpty(form["name"], form["name_help"]) &&
      validatePhone(form["phone"], form["phone_help"]) &&
      validateEmail(form["email"], form["email_help"])){
        form.submit();
    } else {
        alert("Sorry, form filled up with mistakes");
    }
}