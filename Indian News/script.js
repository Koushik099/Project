console.log("All is ok");
// 5f41f5d04b2441188324fa2e14b08ac8 it is my own APIKEY 😎

let source = "bbc-news";
let api = "5f41f5d04b2441188324fa2e14b08ac8";

// Grab the news container
let newsAccordion = document.getElementById("newsaccordion");

// Create an AJAX get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?sources=${source}&apikey=${api}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let data = json.articles;
    console.log(data);
    // console.log(ele);
    let newshtml = "";
    for (let ele of data) {
      // data.forEach(function (ele) {
      let mainNews = ` <div class="card">
<div class="card-header" id="headingOne">
 
   <h3> ${ele.title} </h3>
  
</div>

<div
  id="collapseOne"
  class="collapse show"
  aria-labelledby="headingOne"
  data-parent="#accordionExample"
>
  <div class="card-body">
    ${ele["content"]}. 😮 <a href="${ele.url}" target ="main"> Read More Here</a>
  </div>
</div>
</div>`;
      newshtml += mainNews;
      newsAccordion.innerHTML = newshtml;
      //   console.log(data);
    }
  } else {
    console.log("Some error Occured !!");
  }
};
xhr.send();
