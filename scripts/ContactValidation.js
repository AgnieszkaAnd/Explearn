function isEmailValid(inputField, helpId) {
 
  return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Please, enter a valid email (ex. name@domain.com)");
 
}

 
function editNodeText(regex, input, helpId, helpMessage) {
  if (!regex.test(input)) {
    if (helpId != null)
      // We need to show a warning
      // Remove any warnings that may exist
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);
      }
 
      // Add new warning
      helpId.appendChild(document.createTextNode(helpMessage));
 
    } else {
 
      // If the right information was entered, clear the help message
      if (helpId != null){
 
        // Remove any warnings that may exist
        while (helpId.childNodes[0]){
          helpId.removeChild(helpId.childNodes[0]);
        }
 
      }
 
    }
}