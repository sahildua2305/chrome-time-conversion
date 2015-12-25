$(document).ready(function(){
	$("input").keypress(function(event) {
		if(event.which == 13){
			mainFunction();
		}
	});

	$("input").focusin(function(){
		var type = $(this).attr("id");
		if(type == 'timestamp'){
			changeModeValue(0);
		} else {
			changeModeValue(1);
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

function mainFunction(){
	var mode = parseInt($("#mode").val());

	if(mode == 0)
		toDate();
	else
		toTimestamp();
}

function changeModeValue(new_value){
	$("#mode").val(new_value);
}

function toTimestamp(){
	var myDate = document.getElementById('date-format').value;
	myDate = myDate.split("-");

	var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
	var new_time = new Date(newDate).getTime();
	
	$("#timestamp").val(new_time/1000);
}

function toDate(){
	var timestamp = document.getElementById('timestamp').value;
	date = new Date( + timestamp * 1000);
	$("#date-format").val(date);
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('convert1').addEventListener('click', mainFunction);
});