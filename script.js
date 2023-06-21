
document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const value = button.innerText;
      const currentDisplay = display.value;

      if (value === "C") {
        display.value = "";
      } else if (value === "&larr;") {
        display.value = currentDisplay.slice(0, -1);
      } else if (value === "=") {
        try {
          display.value = eval(currentDisplay);
        } catch (error) {
          display.value = "Error";
        }
      } else {
        display.value += value;
      }
    });
  });
});



