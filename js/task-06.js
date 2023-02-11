const textInput = document.getElementById("validation-input");
const textLength = textInput.getAttribute("data-length");


textInput.addEventListener("blur", (event) => {
  textInput.className =
    textInput.value.length === Number(textLength) ? "valid" : "invalid";
});
