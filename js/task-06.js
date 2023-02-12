const textInput = document.getElementById("validation-input");
const textLength = textInput.getAttribute("data-length");


textInput.addEventListener("blur", (event) => {
  const textValue = textInput.value.trim()
  textInput.className =
    textValue.length === Number(textLength) ? "valid" : "invalid";
});
