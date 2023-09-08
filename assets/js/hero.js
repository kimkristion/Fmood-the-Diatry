
// Variable declarations
const unsplashApi =
	'https://api.unsplash.com/search/photos?query=food&page=4&per_page=100&client_id=CkO80CrQzdoVmwNB6CC-TeoSe5RPo4gsKRnxMXDWigc';
const defaultBgImage = '../images/bg.jpeg';

// Generates random image
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

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.addEventListener('load', async() => {
    let randomImage = await fetchRandomImage();
    const imageContainer = document.getElementById('landingPageContainer');
    imageContainer.style.backgroundImage = `url('${randomImage}')`;
    });

