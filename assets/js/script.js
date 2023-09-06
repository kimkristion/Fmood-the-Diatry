// Global variables
const apiKey = 'AIzaSyDzb5CInF5N1TKf_LYcclk2PyZoknQ5EmA';
const timeNow = dayjs();
const day = timeNow.format('dddd');
const timeHour = timeNow.format('h');
const timeMinutes = timeNow.format('mm');
var modalsubmit = document.getElementById('modalSubmit')


modalsubmit.addEventListener('click', form)
function form(event) {
    event.preventDefault();
    var timeLog;
	var mealLog;
	var feelLog;
    closeModal();
}

// add <span id="hour"></span> to include the time of day
var timeLog = document.getElementById("hour");
timeLog.innerHTML = timeHour + ":" + timeMinutes;

var daybyname = document.getElementById("day")
daybyname.innerHTML = day;


function openModal() {
    document.getElementById("themodal").style.display="block";
    // document.getElementById("modal").style.display="none";
}


function closeModal() {
    document.getElementById("themodal").style.display="none";
    // document.getElementById("modal").style.display="block";
   
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


function submitEntry(event) {
	event.preventDefault();
	console.log('is this working?');
	

	const food = foodInput.value;
	const feelings = feelingsInput.value;

	closeModal();
};

window.addEventListener('load', function (event) {
	event.preventDefault();
	coolFoodInfo();

	document.addEventListener('click', function(event) {
		let modalContainer = document.getElementById('modalContainer');
	
		// if (!modalContainer.contains(event.target)) {
		// 	closeModal();
		// }
	});
});




