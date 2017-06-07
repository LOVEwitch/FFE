function changerole() {
	// body...
	var stulocate = document.getElementsByName('stulocate');
	//var inschool = document.getElementById('inschool');
	//var outschool = document.getElementById('outschool');
	var outschool_model = document.getElementById('outschool_model');
	var inschool_model = document.getElementById('inschool_model');
	for (var i = 0; i <stulocate.length; i++) {
		if (stulocate[i].checked == true) {
			if (stulocate[i].value == "inschool") {
				console.log(stulocate[i]);
				inschool_model.style.display = "block";
				outschool_model.style.display = "none";
			} else if (stulocate[i].value == "outschool") {
				console.log(stulocate[i]);
				inschool_model.style.display = "none";
				outschool_model.style.display = "block";
			}
			else{
				inschool_model.style.display = "";
				outschool_model.style.display = "none";
			}
		}
	}
}
function selectList() {
	// body...
	var cityselect = document.getElementById('cityselect');
	if (cityselect.options[cityselect.selectedIndex].value == "bj") {
		document.getElementById('bjschool').style.display = "inline-block";
		document.getElementById('shschool').style.display = "none";
		document.getElementById('gzschool').style.display = "none";
	} else if (cityselect.options[cityselect.selectedIndex].value == "sh") {
		document.getElementById('bjschool').style.display = "none";
		document.getElementById('shschool').style.display = "inline-block";
		document.getElementById('gzschool').style.display = "none";		
	} else if (cityselect.options[cityselect.selectedIndex].value == "gz") {
		document.getElementById('bjschool').style.display = "none";
		document.getElementById('shschool').style.display = "none";
		document.getElementById('gzschool').style.display = "inline-block";			
	}
}