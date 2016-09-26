function validateNonEmpty(inputField, helpText) {
    // See if the input value contains any text
    if (inputField.value.length == 0) {
        // The data is invalid, so notify the user
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