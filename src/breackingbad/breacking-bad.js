
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

    const quote = await fetchQuote();

    element.innerHTML = 'Hay datos';
}