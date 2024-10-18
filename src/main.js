// console.log("connnected");
const selectEl = document.querySelector("select");
const carouselcontainerEl = document.querySelector("carousel-inner");
console.log (selectEl,carouselcontainerEl);

const BASE_URL = "https://dog.ceo/api/";

async function getDogsList() {
   const response = await fetch('${BASE_URL)breeds/list/all');
   const data = await response.json();
   console.log(response);
}
getDogsList();