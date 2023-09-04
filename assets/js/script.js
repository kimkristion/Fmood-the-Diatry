const timeNow = dayjs();
const day = timeNow.format('dddd');
const timeHour = timeNow.format('h');
const timeMinutes = timeNow.format('mm');
const AMPM = timeNow.format('a')
const rank = document.querySelectorAll(".rank")

function rankThis() {
    rank.classList("active")
}

// add <span id="hour"></span> to include the time of day
var timeLog = document.getElementById("hour");
timeLog.innerHTML = timeHour + ":" + timeMinutes + AMPM;

var currentDay = document.getElementById("day");
currentDay.innerHTML = day


function openModal() {
    document.getElementById("themodal").style.display="block";
    

    
}


function closeModal() {
    document.getElementById("themodal").style.display="none";
    
   
}



// Global variables
var foodFacts = [
	{
		fact: "Bananas are the world's oldest fruit and date back to over 10,000 years ago.",
	},

	{
		fact: 'Brocolli contains more protein than most meat.',
	},

	{
		fact: 'Some food dyes and vanilla extracts are made from crushed up bugs and beaver secreations.',
	},

	{
		fact: 'Pistachios are actually fruit and contain rich sources of protein, fiber, vitamins, and minerals.',
	},

	{
		fact: 'Brussel sprouts contain virtually no calories, fat, or cholesterol and are full of vitamins and minerals.',
	},

	{
		fact: 'Eating 100g of chickpeas contains over 20g of protein, more than steak.',
	},

	{
		fact: 'Some products, including ranch or coffee creamer can contain titanium oxide, an ingredient commonly found in paint, plastic, and sunscreen.',
	},

	{
		fact: 'Fast food meat can contain meat from over 100 different cows.',
	},

	{
		fact: 'Fruit snacks and cars are coated in the same type of wax.',
	},

	{
		fact: 'Farm-raised salmon is dyed pink. It is naturally white.',
	},

	{
		fact: 'Skittles contain food dye made from boiled beetles.',
	},

	{
		fact: 'Crackers are worse for your teeth than candy is because they contain various kinds of acid.',
	},

	{
		fact: 'Fear of cooking is called mageirocophobia.',
	},

	{
		fact: 'Brocolli contains more vitamin-C than oranges with a whopping 81mg!',
	},

	{
		fact: 'Pinapple contains an enzyme called bromelain that literally eats your mouth.',
	},
];

// Function randomly generates fact from foodFacts object
function foodFact() {
	let foodFactContent = document.getElementById('food-fact-content'); 

	// adds slide-out class to html content
	foodFactContent.classList.add('slide-out');

	// Sets timeout function for animation time
	setTimeout(() => {
		// Generates random fact from array
		let randomIndex = Math.floor(Math.random() * foodFacts.length);
		let randomFact = foodFacts[randomIndex];

		// Applies fact content to screen
		foodFactContent.textContent = randomFact.fact;

		foodFactContent.classList.remove('slide-out');
		foodFactContent.classList.add('slide-in');
	}, 1000);

		setTimeout(() => {
			foodFactContent.classList.remove('slide-in', 'slide-out');
		}, 2000);


	setTimeout(foodFact, 6000);
}

foodFact();

// document.addEventListener('DOMContentLoaded', function() {
// 	let video = document.getElementById('logo-vid');
// 	let videoContainer = document.getElementById('page-load-container');

// 	video.addEventListener('ended', function() {
// 		video.pause();
// 		fadeOut(videoContainer);
// 	});
// });

// function fadeOut(element) {
// 	let opacity = 1;
// 	let interval = setInterval(function() {
// 		if (opacity > 0) {
// 			opacity -= 0.1;
// 			element.style.opacity = opacity;
// 		} else {
// 			clearInterval(interval);
// 			element.style.display = 'none';
// 		}
// 	}, 50);

// 	foodFact();
// };

