
// API variable declarations
const unsplashApi =
	'https://api.unsplash.com/search/photos?query=food&page=4&per_page=100&client_id=CkO80CrQzdoVmwNB6CC-TeoSe5RPo4gsKRnxMXDWigc';
const defaultBgImage = '../images/bg.jpeg';

// Fetches random food related image from Unsplash API
async function fetchRandomImage() {
    try {
        const response = await fetch(unsplashApi);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        const randomIndex = randomInteger(0, data.results.length);
        return data.results[randomIndex].urls.regular;
    } catch (error) {
        console.error('Error fetching random image: ', error);
        return defaultBgImage;
    }
}

// Grabs a random picture from API list
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Event listener for window load to append random image to screen
window.addEventListener('load', async() => {
    let randomImage = await fetchRandomImage();
    const imageContainer = document.getElementById('landingPageContainer');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
    });

