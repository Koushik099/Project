const alarmBtn = document.getElementById("alarmbtn");
const alarm = document.getElementById("alarm");
const alarmBtnCancel = document.getElementById("alarmbtncancel");
let newaudio = new Audio("click.mp3");

$("#success").hide();

alarmBtn.addEventListener("click", setAlarm);
let audio;
function ringBell() {
  audio = new Audio("alarmsound.wav");
  audio.play();
  audio.loop = true;
}

function setAlarm(e) {
  newaudio.play();
  e.preventDefault();
  let alarmDate = new Date(alarm.value);
  let date = new Date();
  //   console.log("Alarm is set " + alarm.value + alarmDate);

  let ringAlarm = alarmDate - date;
  console.log(ringAlarm);
  if (ringAlarm > 0) {
    setTimeout(() => {
      ringBell();
    }, ringAlarm);
    $("#success").show();
  } else {
    alert("please enter a perfect time, You can't set alarm in past 🙂");
  }
}

alarmBtnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  audio.pause();

  newaudio.play();
});

// https://koushik099.github.io/Project/Alarm%20Clock/
