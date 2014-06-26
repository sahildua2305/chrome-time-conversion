
function toDate(){
	var timestamp = document.getElementById('timetamp').value;
	date = new Date(+timestamp*1000);
	
	document.getElementById('date-format').value = date;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('convert1').addEventListener('click', toDate);
});