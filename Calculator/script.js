let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (items of buttons) {
  items.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screen.value += buttonText;
      screenValue = screen.value;
    } else if (buttonText == "C") {
      screen.value = "";
      screenValue = screen.value;
    } else if (buttonText == "D") {
      let data = screen.value;
      //   console.log(typeof data);
      let data2 = data.slice(0, data.length - 1);
      //   console.log(data2);
      //   console.log(data);
      screen.value = data2;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screen.value += buttonText;
      screenValue = screen.value;
    }

    console.log(buttonText);
  });
}
