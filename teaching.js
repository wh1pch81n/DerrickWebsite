function initContent(parent) {

	
	var slid = "John";
	var optionArr = [
	new OptionDetail("white", "white", true),
	new OptionDetail("black", "black", false)
	];
	var selectList = makeSelectionList(slid, optionArr);
	
	mk("label", {for:"jk"}, parent, function(p) {
		p.innerHTML = "Select background color";
	});

	parent.appendChild(selectList);
};

