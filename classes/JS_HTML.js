/**
creates an HTML element and allows you to add more html elements inside

@param elementName name of the element to be created.  MUST have value otherwise function returns undefined.
@param attrObj an object containing attribute values. set to null to add no attributes
@param parent the created element will be appended as the parents child ie parent.appendChild(element). set null to prevent auto appending of child
@param appendChild a block pointer used to add stuff inside the created element. Set to null to put nothing
@return reference to the created object
@code

var content = document.getElementById("content");
mkHTML("blockquote", null, content, function(block) {
	block.innerHTML = "third test";
	mkHTML("blockquote", {id:"coolBlockquote"}, block, function(block) {
		block.innerHTML = "third inner";
	});
});

@endcode
*/

function mkHTML( elementName, attrObj, parent, appendChild) {
	var element = document.createElement(elementName);
	if(!element) {return undefined;}
	if(attrObj) {
		var prop;
		for (prop in attrObj) {
			element.setAttribute(prop, attrObj[prop]);
		}
	}	
	if(appendChild) {
		//blockquote.innerHTML = "foo2";
		appendChild(element);//the stuff that will go inside
	}
	if(parent){parent.appendChild(element);}
	
	return element;
}

/**
short hand version of mkHTML()
*/

function mk( elementName, attrObj, parent, appendChild) {
	return mkHTML( elementName, attrObj, parent, appendChild);
};

/*
generates a table in HTML.  The first row of the array is treated as table headers

@param tableID the id of the table
@param tableCaption the caption of the table
@param tableData2d the 2d array containing table elements
@return reference to the table object

@code
var tableID = "fred";
var tableCaption = "my name is fred";
var tableData2d = [
["classes", "description", 							"year"],
["swim", 		"get in water and splash", 	"2001"],
["maths", 	"number magic", 						"2005"]
];

var tableObject = makeTable(tableID, tableCaption, tableData2d);
parent.appendChild(tableObject);
@endcode
*/

function makeTable(tableID, tableCaption, tableData2d) {
	return mk("table", {id:tableID}, null, function(p){
		mk("caption", null, p, function(p) {
			p.innerHTML = tableCaption;
		});
		for (var tr = 0; tr < tableData2d.length; ++tr) {
			mk("tr", null, p, function(p) {
				for(var td = 0; td < tableData2d[tr].length; ++td) {
					var ele = "th";
					if(tr) { ele = "td";}
					mk(ele, null, p, function(p) {
						p.innerHTML = tableData2d[tr][td];
					});
				}
			});
		}
	});
}

/**
Option detail object for use with selection list creation

@param value is value of the option element.
@param innerHTML the stuff in between the start and end option tags. ie the name that will be see in the list GUI
@param isSelected determines if this option should be selected by default

@code
var od = new OptionDetail("white", "white pants",false);
@endcode
*/

function OptionDetail (value, innerHTML, isSelected) {
	this.value = value;
	this.innerHTML = innerHTML;
	this.isSelected = isSelected;
}

/**
Produces a selection list object

@param selectionListID the id associated with the selection object
@param optionArr an array of optionDetail objects
@return reference to the selection object

@code
var slid = "John";
var optionArr = [
new OptionDetail("white", "white", true),
new OptionDetail("black", "black", false)
];
var selectList = makeSelectionList(slid, optionArr);

parent.appendChild(selectList);
@endcode
*/
function makeSelectionList(selectionListID, optionArr) {
	return mk("select", {id:selectionListID, name:selectionListID}, null, function(b) {
		for(var i = 0; i < optionArr.length; ++i) {
			var optionObj = {value:optionArr[i].value};
			if(optionArr[i].isSelected) {
				optionObj.selected = "selected";
			}
			mk("option", optionObj, b, function(b) {
				b.innerHTML = optionArr[i].innerHTML;
			});
		}
	});
};