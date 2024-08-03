document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    async function getQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return 'Sorry, something went wrong. Please try again later.';
        }
    }

    newQuoteButton.addEventListener('click', async () => {
        const randomQuote = await getQuote();
        quoteText.textContent = `"${randomQuote}"`;
    });
});
