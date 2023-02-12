const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
});

textInput.addEventListener("blur", () => {
    if (output.textContent === '') {
        output.textContent = "Anonymous";
    }
});