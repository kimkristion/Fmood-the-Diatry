const timeNow = dayjs();
const timeHour = timeNow.format('h');
const timeMinutes = timeNow.format('mm');

// add <span id="hour"></span> to include the time of day
var timeLog = document.getElementById("hour");
timeLog.innerHTML = timeHour + ":" + timeMinutes;

function openModal() {
    document.getElementById("themodal").style.display="block";
    document.getElementById("modal").style.display="none";
}

function closeModal() {
    document.getElementById("themodal").style.display="none";
    document.getElementById("modal").style.display="block";
    
}
 