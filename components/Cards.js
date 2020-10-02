// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


import axios from "axios";
const cardsContainer = document.querySelector(".cards-container");
axios.get("https://lambda-times-api.herokuapp.com/articles").then(pass =>{
    console.log(pass.data.articles)
    const javascript = pass.data.articles.javascript
    const bootstrap = pass.data.articles.bootstrap
    const technology = pass.data.articles.technology
    const jquery = pass.data.articles.jquery
    const node = pass.data.articles.node
    let cardArray = [];
    javascript.forEach(cardObj => {
        cardArray.push(cardObj);
    })
    bootstrap.forEach(cardObj => {
        cardArray.push(cardObj);
    })
    technology.forEach(cardObj => {
        cardArray.push(cardObj);
    })
    jquery.forEach(cardObj => {
        cardArray.push(cardObj);
    })
    node.forEach(cardObj => {
        cardArray.push(cardObj);
    })
    console.log(cardArray)
    cardArray.forEach(cardObj =>{
        const cardElement = cardMaker(cardObj)
        cardsContainer.appendChild(cardElement);
    })
})
function cardMaker(cardObj){
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imageCont = document.createElement("div");
    const image = document.createElement("img");
    const by = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageCont);
    author.appendChild(by);
    imageCont.appendChild(image);

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageCont.classList.add("img-container");
   
    image.src = cardObj.authorPhoto
    headline.textContent = cardObj.headline
    by.textContent = "By " + cardObj.authorName
 
    card.addEventListener("click", event =>{
        console.log(headline);
    });
    return card;
}
