var modalTIme = dayjs();

// Global variables
var foodFactContainer = document.getElementById('food-fact-container')
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
let factContainer = document.createElement('div');
let randomIndex = Math.floor(Math.random() * foodFacts.length);
let randomFact = foodFacts[randomIndex];
let factContainerHeader = document.createElement('h2'); // Create fact section header
factContainerHeader.textContent = 'Random Food Fact';

// Creates element to place fact content
let factContent = document.createElement('h3');
factContent.style.textAlign = 'center';
factContent.textContent = randomFact.fact;

factContainer.appendChild(factContainerHeader);
factContainer.appendChild(factContent);

foodFactContainer.innerHTML = '';
foodFactContainer.appendChild(factContainer);
};

window.addEventListener('load', function(event) {
  event.preventDefault();
  foodFact();
});