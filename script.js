const apiUrl="https://api.quotable.io/random";
const quote=document.getElementById("show-data");
const author=document.getElementById("author");

async function getQuote(url){
const response=await fetch(url);
var data=await response.json();
console.log(data);
quote.innerHTML=data.content;
author.innerHTML=data.author;

}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML, height=600, width=300);
}
