var globalTutorialName = null;
var globalLessonNum = null;
var globalSlideNum = null;

function initContent(parent) {
	var selectionListID = "tutorialNameID";
	var optionArr = [
	new OptionDetail("",""),
	new OptionDetail("JavaScript", "JavaScript"),
	new OptionDetail("VHDL", "VHDL")
	];
	var selectList = makeSelectionList(selectionListID, optionArr);
	
	mk("label", {for:"jk"}, parent, function(p) {
		p.innerHTML = "Select name of tutorial";
	});
	selectList.onchange = function() {
		var selectObj = document.getElementById(selectionListID);
		var index = selectObj.selectedIndex;
		var tutorial = selectObj[index].value;
		
		globalTutorialName = tutorial; 
		//come back to this later.  I'm confusing myself about what to do
	};
	parent.appendChild(selectList);
};

function handleTutorial() {
	//alert(e["name"]);
//	var selectObj = document.getElementById()

};

