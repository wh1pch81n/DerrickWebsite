/**
This is the programming Assignment Model
 It is essentially a template of which the user must set the properties.
*/

function ProgrammingAssignmentModel() {
	//Properties
	
	//kID's
	
	
	//methods
	/**
	 Will set the title of the current page
	 @param(string) title the name of the new title
	 */
	this.setTitle = function(title) {
		document.getElementsByTagname("title").innerHTML = title;
	};
};