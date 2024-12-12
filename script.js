function getUser() {
    const jokeContainer = document.getElementById('joke-container');
    
    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Joke not found');
            }
            return response.json();
        })
        .then((data) => {
            if (data.type === 'single') {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            } else {
                jokeContainer.innerHTML = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
            }
        })
        .catch((error) => {
            jokeContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        });
}

getUser();

document.getElementById('fetch-joke').addEventListener('click', getUser);
