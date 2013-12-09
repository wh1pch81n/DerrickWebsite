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