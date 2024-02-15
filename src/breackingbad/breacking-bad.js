
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
        const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');

        const data = await res.json();

        console.log(data[0])
        return data[0];
    } 


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreackingBadApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breacking Bad';
    
    element.innerHTML = 'Loading...';

    // const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;

        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
    }

    fetchQuote()
    .then( renderQuote)
}