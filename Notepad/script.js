// console.log("uu");

// If user add a note, add it to the local storage

showNotes();
let addTxt = document.getElementById("addtxt");
let notes = localStorage.getItem("notes");

let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", (e) => {
  if (notes == null) notesOBJ = [];
  else {
    notesOBJ = JSON.parse(notes);
  }
  notesOBJ.push(addTxt.value);
  if (notesOBJ != "") {
    localStorage.setItem("notes", JSON.stringify(notesOBJ));
  }
  // addTxt.value = "";
  //   console.log(notesOBJ);
  showNotes();
  location.reload();
});

// function to show elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesOBJ = [];
  else {
    notesOBJ = JSON.parse(notes);
  }
  let html = "";
  notesOBJ.forEach(function (ele, index) {
    html += `
      <div class="notecard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${ele} </p>
          
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary" id="addbtn">Delete Note</button>
         
        
    </div>
  </div>`;
  });
  let noteselm = document.getElementById("notes");
  if (notesOBJ != "") {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Please Write a Note, Here is Nothing to show you`;
  }
}
// Clear Button
let clear = document.getElementById("clearbtn");
clear.addEventListener("click", () => {
  addTxt.value = "";
});
// Download button
let download = document.getElementById("downloadbtn");
// const downloadBtn = document.getElementById("download");
download.addEventListener("click", function () {
  if (addTxt.value === "") window.alert("কিছু লিখুন তারপর ডাউনলোড করুন");
  else {
    const text = addTxt.value;
    const downloadLink = document.createElement("a");
    downloadLink.download = "note.txt";
    const t = new Blob([text], {
      type: "text/plain",
    });
    downloadLink.href = window.URL.createObjectURL(t);
    downloadLink.click();
  }
});

// function to delete note

function deleteNotes(index) {
  //   console.log("Deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) notesOBJ = [];
  else {
    notesOBJ = JSON.parse(notes);
  }
  notesOBJ.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesOBJ));
  showNotes();
}

// Implementing search bar

let searchBar = document.getElementById("searchtext");
searchBar.addEventListener("input", function () {
  let inputVal = searchBar.value.toLowerCase();
  // console.log("event fired", inputVal);
  let noteCards = document.getElementsByClassName("notecard");
  Array.from(noteCards).forEach(function (elements) {
    let cardTxt = elements.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      elements.style.display = "block";
    } else {
      elements.style.display = "none";
    }
  });
});
