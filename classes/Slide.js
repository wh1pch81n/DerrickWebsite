/**

*/

function DHSlide (arrOfStrWithHighlight, header, comment) {
	this.arrOfStrWithHighlight = arrOfStrWithHighlight.slice();
	this.header = header;
	this.comment = comment;
}


/**
sets off multiple isLit values
@param codeArr Array of DHStringWithHighlight
@param arr and array of indexs of which you want to set the isLit property
*/
function lightOff(codeArr, arr) {
	for(var i = 0; i < arr.length; ++i) {
		codeArr[arr[i]].isLit = 0;
	}
};

/**
sets on multiple isLit values
@param codeArr Array of DHStringWithHighlight
@param arr and array of indexs of which you want to set the isLit property
*/
function lightOn(codeArr, arr) {
	for(var i = 0; i < arr.length; ++i) {
		codeArr[arr[i]].isLit = 1;
	}
};