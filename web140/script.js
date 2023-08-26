const htmlValidationLink = document.getElementById("html-validation")
const cssValidationLink = document.getElementById("css-validation")

htmlValidationLink.href = "https://validator.w3.org/nu/?doc=" + window.location.href;
cssValidationLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href;
