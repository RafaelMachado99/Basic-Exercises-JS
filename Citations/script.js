const quotes = [
    {
        quote: "Frase 1",
        author: "Autor 1",
    },
    {
        quote: "Frase 2",
        author: "Autor 2",
    },
    {
        quote: 
        "Frase 3",
        author: "Autor 3",
    },
    {
        quote: "Frase 4",
        author: "Autor 4",
    },
];


const quotesBtn = document.querySelector("#quotebtn");
const quotesText = document.querySelector(".text");
const quotesAuthor = document.querySelector(".author");

function generate() {
    const index = Math.floor(Math.random() * quotes.length);

    quotesText.textContent = quotes[index].quote;
    quotesAuthor.textContent = quotes[index].author;
}
generate();
