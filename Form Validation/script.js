// console.log("This is a Project");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementById("submit");
const success = document.getElementById("success");
const failure = document.getElementById("failure");

let validEmail = false;
let validPhone = false;
let validName = false;

$("#failure").hide();
$("#success").hide();

// console.log(name, email, phone);

name.addEventListener("blur", function () {
  //   console.log("Okay");
  //   let reg = /^[a-zA-Z]([0-9[a-zA-Z]]){2,10}$/;
  let reg = /^[a-z ,.'-]+$/i;
  let str = name.value;

  if (reg.test(str) || str == "") {
    // console.log("it matched");
    name.classList.remove("is-invalid");
    validName = true;
  } else {
    // console.log("not matched");
    name.classList.add("is-invalid");
    validName = false;
  }
});

email.addEventListener("blur", function () {
  //   console.log("Okay");
  let reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  //   let reg = /^([\-\._0-9a-zA-Z]+)@([\-\._0-9a-zA-Z]+)\.([a-zA-Z]) $/;
  let str = email.value;

  if (reg.test(str) || str == "") {
    // console.log("it matched");
    name.classList.remove("is-invalid");
    validEmail = true;
  } else {
    // console.log("not matched");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", function () {
  //   console.log("Okay");
  let reg = /^[0-9]{10}$/;
  let str = phone.value;

  if (reg.test(str) || str == "") {
    // console.log("it matched");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    // console.log("not matched");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (validEmail && validName && validPhone) {
    success.classList.add("show");
    // failure.classList.remove("show");
    // $("#failure").alert("close");
    $("#failure").hide();
    $("#success").show();
  } else {
    email.classList.add("is-invalid");

    name.classList.add("is-invalid");
    phone.classList.add("is-invalid");

    failure.classList.add("show");
    // success.classList.remove("show");
    // $("#success").alert("close");
    $("#success").hide();
    $("#failure").show();
  }
});
