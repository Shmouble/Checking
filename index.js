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


function placeOrder(form){
    if(validateLength(1, 32, form["message"], form["message_help"]) &&
      validateZIPCode(form["zipcode"], form["zipcode_help"]) &&
      validateNonEmpty(form["date"], form["date_help"]) &&
      validateNonEmpty(form["name"], form["name_help"]) &&
      validateNonEmpty(form["phone"], form["phone_help"]) &&
      validateNonEmpty(form["email"], form["email_help"])){
        form.submit();
    } else {
        alert("Sorry, form filled up with mistakes");
    }
}



























