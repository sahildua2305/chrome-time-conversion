
$(document).ready(function(){

	$("input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			toDate();
		}
	});

	$(document).on('change','#colorselect',function(){
		var color = $("#colorselect").val();
		console.log(color);
		if(color == "white"){
			$("body").css("background-color", "#eee");
			$("body").css("color", "#000");
		}
		else if(color == "grey"){
			$("body").css("background-color", "grey");
			$("body").css("color", "#000");
		}
		else if(color == "black"){
			$("body").css("background-color", "#000");
			$("body").css("color", "#eee");
		}
		else if(color == "orange"){
			$("body").css("background-color", "orange");
			$("body").css("color", "#000");
		}
		else if(color == "cyan"){
			$("body").css("background-color", "cyan");
			$("body").css("color", "#000");
		}
	});
});

function toDate(){
	var timestamp = document.getElementById('timetamp').value;
	date = new Date(+timestamp*1000);
	document.getElementById('date-format').value = date;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('convert1').addEventListener('click', toDate);
});