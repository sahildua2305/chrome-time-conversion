
function toDate(){
	var timestamp = document.getElementById('timetamp').value;
	date = new Date(+timestamp);
	
	document.getElementById('date-format').value = date;
}

document.getElementById("convert1").addEventListener("click",toDate);