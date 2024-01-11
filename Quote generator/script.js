const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const nextBtn = document.getElementById('next-quote');
const twitterBtn = document.getElementById('twitter');



// let apiQuotes =[];
//get quotes from API

// function newQuote(){
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];


//     //check if author field is black replace it with unknown
//     if(!quote.author){
//         quoteAuthor.textContent ='Unknown';
//     }
//     else{
//         quoteAuthor.textContent = quote.author;
//     }

    //check if length is larger then the size is decreased
    // if(quote.text.length > 15){
    //     quoteText.classList.add('long-quote');
    // }
    // else{
    //     quoteText.classList.remove('long-quote');
    // }
//     quoteText.textContent = quote.text;
// }

//Async request
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response =await fetch(apiUrl);
//         apiQuotes =await response.json();
//         newQuote();

//     }
//     catch(error){
         
//     }
// }

//twitter btn working 
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}- ${quoteAuthor.textContent}`;
    window.open(twitterUrl,'_blank');
}

// Event listner

nextBtn.addEventListener('click',newQuote)
twitterBtn.addEventListener('click',tweetQuote)


// local request 
function newQuote(){
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteText.textContent =quote.text;
    quoteAuthor.textContent =quote.author;
}
newQuote();

// 0n load 
// getQuotes();


