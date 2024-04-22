document.getElementById('fetchQuoteBtn').addEventListener('click', function() {
    // Fetch Kanye West quote from the API
    fetch('/api/kanye-quote')
        .then(response => response.text())
        .then(data => {
            document.getElementById('kanyeQuote').textContent = data;
        })
        .catch(error => console.error(error));
});
