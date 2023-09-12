// Global variables
var foodFacts = [
	{
		fact: "Bananas are the world's oldest fruit and date back to over 10,000 years ago.",
	},

	{
		fact: 'Brocolli contains more protein than most meat.',
	},

	{
		fact: 'Some food dyes and vanilla extracts are made from crushed up bugs and beaver secretions.',
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
		fact: 'Crackers are worse for your teeth than candy because they contain numerous types of acid.',
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

	{
		fact: 'Apples are more effective at waking you up than coffee.',
	},

	{
		fact: 'Eating a healthy diet can imporve your mood and energy levels.',
	},

	{
		fact: 'Drink water.',
	},

	{
		fact: 'Eating healthy will help you sleep better.',
	},

	{
		fact: 'Honey never spoils.',
	},

	{
		fact: '"Low-Fat" typically means "sugar added" and it should be considered an unhealthy choice.',
	},

	{
		fact: 'Almonds are part of the peach family.',
	},

	{
		fact: 'Trans fats have been linked to all kinds of chronic diseases and should be avoided.',
	},
];
const nutritionId = '57cd6407';
const nutritionKey = '53f48a56cd74f814fc87643c36d779cd';
// const foodInput = document.getElementById('foodInput');
// const feelingsInput = document.getElementById('feelingsInput');
const timeNow = dayjs();
const day = timeNow.format('dddd');
const timeHour = timeNow.format('h');
const timeMinutes = timeNow.format('mm');
const AMPM = timeNow.format('a');
const month = timeNow.format('MMM');
const date = timeNow.format('D');
var journalEntries = [];

var modalsubmit = document.getElementById('modalSubmit');
var dynamictime = document.getElementById('dynamic-time');
var dynamicfood = document.getElementById('dynamic-meal');
var dynamicmood = document.getElementById('dynamic-mood');

let inputsformodal = document.querySelectorAll('inputs');

//This function captures the time, meal and mood, and sets them to varibles.
function captureInputs() {
	const foodInput = document.getElementById('food-input').value;
	const feelInput = document.getElementById('feel-input').value;

	if (foodInput && feelInput) {
		const journalEntry = {
			time: dayjs().format('MMM D'),
			meal: foodInput,
			mood: feelInput,
		};

		journalEntries.push(journalEntry);

		localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

		displayEntries();

		document.getElementById('food-input').value = '';
		document.getElementById('feel-input').value = '';
	} else {
		document.getElementById('food-input').placeholder = 'Please input food';
		document.getElementById('feel-input').placeholder =
			'Please input feelings';
		closeModal();
	}
}

function displayEntries() {
	const dynamicTime = document.getElementById('dynamic-time');
	const dynamicMeal = document.getElementById('dynamic-meal');
	const dynamicMood = document.getElementById('dynamic-mood');

	dynamicTime.innerHTML = '';
	dynamicMeal.innerHTML = '';
	dynamicMood.innerHTML = '';

	journalEntries.forEach((entry) => {
		const timeListItem = document.createElement('li');
		const mealListItem = document.createElement('li');
		const moodListItem = document.createElement('li');

		timeListItem.textContent = `${entry.time}`;
		mealListItem.textContent = `${entry.meal}`;
		moodListItem.textContent = `${entry.mood}`;

		dynamicTime.appendChild(timeListItem);
		dynamicMeal.appendChild(mealListItem);
		dynamicMood.appendChild(moodListItem);
	});
}

function resetModal() {
	inputsformodal.forEach((input) => (input.value = ''));
}

function falseRefresh(event) {
	event.preventDefualt();
}

modalsubmit.addEventListener('click', function (event) {
	event.preventDefault();
	captureInputs();
	closeModal();
});

// Adds time of day to page dynamically
var timeLog = document.getElementById('hour');
timeLog.innerHTML = timeHour + ':' + timeMinutes;

// Adds name of day to page dynamically
var daybyname = document.getElementById('day');
daybyname.innerHTML = day;

// Opens modal
function openModal() {
	document.getElementById('themodal').style.display = 'block';
}

// Closes modal
function closeModal() {
	document.getElementById('themodal').style.display = 'none';
	let inputs = document.querySelectorAll('input');
	document.getElementById('food-input').placeholder = 'what did you eat...?';
	document.getElementById('feel-input').placeholder =
		'how did you feel while eating...?';
	inputs.forEach((input) => (input.value = ''));
}

// Function that calls for information from 'food' through the API
function nutritionData(food) {
	var nutritionUrl = `https://api.edamam.com/api/nutrition-data?app_id=${nutritionId}&app_key=${nutritionKey}&nutrition-type=logging&ingr=${food}`;

	// Edamam's API for nutrition information
	fetch(nutritionUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Network response was not ok. Status: ${response.status}`
				);
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			foodInfoContainer(data);
		})
		.catch((error) => {
			console.error(
				'There was a problem with the fetch operation:',
				error
			);
		});
}

// Displays food information of food user entered to viewport
function nutritionButtonClick(event) {
	event.preventDefault();
	const userFoodInput = foodInput.value.trim();

	if (userFoodInput) {
		let foodContainer = document.getElementById('foodInfoContainer');
		foodContainer.innerHTML = '';
		nutritionData(userFoodInput);
	} else {
		console.error('Food input is empty.');
	}
}

// Event listener targeting the click of the nutrition facts section
const nutritionButton = document.getElementById('nutrition-button');
nutritionButton.addEventListener('click', nutritionButtonClick);

// Draws relevant information from API and dynamically appends to viewport
function foodInfoContainer(data) {
	const foodContainer = document.getElementById('foodInfoContainer');

	const foodLabel = data.ingredients[0].text.replace(/;/g, '').toUpperCase();
	const calories = data.calories;
	const protein = Math.floor(data.totalNutrients.PROCNT.quantity);
	const carbs = Math.floor(data.totalNutrients.CHOCDF.quantity);
	const fat = Math.floor(data.totalNutrients.FAT.quantity);

	const foodContainerDiv = document.createElement('div');
	foodContainerDiv.classList.add('food-info');

	const foodLabelEl = document.createElement('p'); //
	foodLabelEl.textContent = `Food: ${foodLabel}`; // Creates
	const caloriesEl = document.createElement('p'); // Elements
	caloriesEl.textContent = `Calories: ${calories}`; // Dynamically to
	const proteinEl = document.createElement('p'); // Contain
	proteinEl.textContent = `Protein: ${protein}`; // Relevant
	const carbsEl = document.createElement('p'); // Food
	carbsEl.textContent = `Carbs: ${carbs}`; // Information
	const fatEl = document.createElement('p'); // To viewport
	fatEl.textContent = `Fat: ${fat}`; //

	foodContainerDiv.appendChild(foodLabelEl);
	foodContainerDiv.appendChild(caloriesEl);
	foodContainerDiv.appendChild(proteinEl);
	foodContainerDiv.appendChild(carbsEl);
	foodContainerDiv.appendChild(fatEl);

	foodContainer.appendChild(foodContainerDiv);
}

// Function randomly generates fact from foodFacts object
function coolFoodInfo() {
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

	// Sets timeout function to set how long per each fact stays on screen
	setTimeout(() => {
		foodFactContent.classList.remove('slide-in', 'slide-out');
	}, 2000);

	setTimeout(coolFoodInfo, 6000);
}

document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.toggle-menu');
	const navLinks = document.querySelector('.nav-links');

	menuToggle.addEventListener('click', function () {
		navLinks.classList.toggle('active');
	});
});

// Event listener for initial page load and runs coolFoodInfo function after load
window.addEventListener('load', function (event) {
	event.preventDefault();
	coolFoodInfo();
	const storedJSON = localStorage.getItem('journalEntries');
	if (storedJSON) {
		journalEntries = JSON.parse(storedJSON);
		displayEntries();
	}
});
