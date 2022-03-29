let jokes = document.getElementById("joke");
let jokeBtn = document.getElementById("jokebtn");

// #Help of promices
// const generatejokes = ()=>{

//     const setHeader = {
//         headers : {
//             Accept : "appliction/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res)=>res.json())
//     .then((data)=>{
//         jokes.innerHTML = data.joke;
//     })
// }

// jokebtn.addEventListener('click',generatejokes);
// generatejokes();

// # Help of async await

const generatejokes = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  console.log("Before Response");
  return await response.json();
};

let value = generatejokes();
value.then((data) => {
  console.log(data);
  jokes.innerHTML = data.value;
});

// implementing button 
jokeBtn.addEventListener("click", () => {
  let value = generatejokes();
  value.then((data) => {
    // console.log(data);
    jokes.innerHTML = data.value;
  });
  // console.log("Button");
});
