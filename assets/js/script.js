


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
const foodInput = document.getElementById('foodInput');
const feelingsInput = document.getElementById('feelingsInput');
const timeNow = dayjs();
const day = timeNow.format('dddd');
const timeHour = timeNow.format('h');
const timeMinutes = timeNow.format('mm');
const AMPM = timeNow.format('a')
var modalsubmit = document.getElementById('modalSubmit');

//This function captures the time, meal and mood, and sets them to varibles. 
function captureInputs() {
	const currentTime = dayjs();
	const formattedTime = currentTime.format('MMM:D');
	const foodInputValue = document.getElementById('food-input').value;
	const feelInputValue = document.getElementById('feel-input').value;

	console.log('Current Time:', formattedTime);
	console.log('Food Input:', foodInputValue);
	console.log('Feeling:', feelInputValue);
}

function falseRefresh(event) {
	event.preventDefualt();
}

modalsubmit.addEventListener('click', () =>  {
	falseRefresh();
	captureInputs();
	console.log("hello")


	closeModal();
});

// add <span id="hour"></span> to include the time of day
var timeLog = document.getElementById('hour');
timeLog.innerHTML = timeHour + ':' + timeMinutes;

var daybyname = document.getElementById('day');
daybyname.innerHTML = day;

function openModal() {
	document.getElementById('themodal').style.display = 'block';
}

function closeModal() {
	document.getElementById('themodal').style.display = 'none';
}

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

const nutritionButton = document.getElementById('nutrition-button');
nutritionButton.addEventListener('click', nutritionButtonClick);

function foodInfoContainer(data) {
	const foodContainer = document.getElementById('foodInfoContainer');

	const foodLabel = data.ingredients[0].text.replace(/;/g, '').toUpperCase();
	const calories = data.calories;
	const protein = Math.floor(data.totalNutrients.PROCNT.quantity);
	const carbs = Math.floor(data.totalNutrients.CHOCDF.quantity);
	const fat = Math.floor(data.totalNutrients.FAT.quantity);

	const foodContainerDiv = document.createElement('div');
	foodContainerDiv.classList.add('food-info');

	const foodLabelEl = document.createElement('p');
	foodLabelEl.textContent = `Food: ${foodLabel}`;
	const caloriesEl = document.createElement('p');
	caloriesEl.textContent = `Calories: ${calories}`;
	const proteinEl = document.createElement('p');
	proteinEl.textContent = `Protein: ${protein}`;
	const carbsEl = document.createElement('p');
	carbsEl.textContent = `Carbs: ${carbs}`;
	const fatEl = document.createElement('p');
	fatEl.textContent = `Fat: ${fat}`;

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

	setTimeout(() => {
		foodFactContent.classList.remove('slide-in', 'slide-out');
	}, 2000);

	setTimeout(coolFoodInfo, 6000);
}

window.addEventListener('load', function (event) {
	event.preventDefault();
	coolFoodInfo();

	document.addEventListener('click', function (event) {
		let modalContainer = document.getElementById('modalContainer');

		// if (!modalContainer.contains(event.target)) {
		// 	closeModal();
		// }
	});
});
