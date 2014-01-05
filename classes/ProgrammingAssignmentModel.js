/**
This is the programming Assignment Model
 It is essentially a template of which the user must set the properties.
*/

function ProgrammingAssignmentModel() {
	//kID's
	this.kID_divHeader = function(){return "PAheader";};
	this.kID_divDeadline = function(){return "PAdeadline";};
	this.kID_collabPolicy = function(){return "PAcollaborationPolicy";};
	this.kID_turnInPolicy = function(){return "PAturnInPolicy";};
	this.kID_progHeader = function(){return "PAprogramHeader";};
	this.kID_probDef = function(){return "PAproblemDefinition";};
	this.kID_progExample = function(){return "PAprogExample";};
	this.kID_rubric = function(){return "PArubric";};
	
	//kCLASS's
	this.kCLASS_code = function(){return "PAcode";};
	this.kCLASS_htmlCode = function(){return "PAhtmlCode";};
	
	//Properties
	this.header;
	this.divHeader;
	this.divDeadline;
	this.divCollabPolicy = mk("div", {id:this.kID_collabPolicy}, null, function(b) {
		mk("h2", null, b, function(b) { b.innerHTML = "Collaboration Policy";});
		mk("p", null, b, function(b) {
			b.innerHTML = "You may use anything from the built-in JavaScript API. You may ask clarification question if there are ambiguous descriptions in the assignment. If the answer is already clearly stated in the specs, your answer will not be answered, but instead you will be reminded to re-read the specs.";
		});
	});
	this.divTurnInPolicy = mk("div", {id:this.kID_turnInPolicy}, null, function(b) {
		mk("p", null, b, function(b) {
			b.innerHTML = "Code that is turned in, must be contained in a .html file named main.html. Files of ANY other format will not be graded (e.g. main.doc, main.txt, main.js etc).";
		});
		mk("p", null, b, function(b) {
			b.innerHTML = "You must turn in your work via email to dho006@ucr.edu with an appropriate subject line.";
		});
		mk("p", null, b, function(b) {
			b.innerHTML = "Remember to include the following header information at the top of the HTML file";
		});
		mk("p", {id:this.kID_progHeader}, b, function(b) {
			b.innerHTML = "<!--\
			//course: cs10<br>\
			//<br>\
			//Assignment #: ... (ie assignment 1,2,3, etc.)<br>\
			//<br>\
			// Last Name: Enter your LAST (family) name here (eg, Doe)<br>\
			// First Name: Enter your First (given) name here (eg, John)<br>\
			//<br>\
			// Email address: enter your email address here (eg, jdoe@gmail.com)<br>\
			//\==================================================================<br>\
			-->";
		});
	});
	this.divProblemDefinition;
	this.divRubric;
	
	//methods
	/**
	 append this object to the given element
	 */
	this.appendPAMTo = function(element){
		if(element){
			if(this.header) {element.appendChild(this.header);}
			if(this.divHeader) {element.appendChild(this.divHeader);}
			if(this.divDeadline){element.appendChild(this.divDeadline);}
			if(this.divCollabPolicy){element.appendChild(this.divCollabPolicy);}
			if(this.divTurnInPolicy){element.appendChild(this.divTurnInPolicy);}
			if(this.divProblemDefinition){element.appendChild(this.divProblemDefinition);}
			if(this.divRubric){element.appendChild(this.divRubric);}
		}
	};
	/**
	 set the divRubric
	 @param(string) rHeader the rubric header
	 @param(array) points a list of points
	 @param(array) bPoints a list of bonus points
	 */
	this.setRubric = function(rHeader, points, bPoints){
		this.divRubric = mk("div", {id:this.kID_rubric}, null, function(b) {
			mk("h2", null, b, function(b) {
				b.innerHTML = rHeader;
			});
			mk("ul", null, b, function(b) {
				for(var i = 0; i < points.length; ++i){
					mk("li", null, b, function(b) {
						b.innerHTML = points[i];
					});
				}
			});
			mk("ul", null, b, function(b) {
				for(var i = 0; i < bPoints.length; ++i){
					mk("li", null, b, function(b) {
						b.innerHTML = bPoints[i];
					});
				}
			});
		});
	};
	/**
	 set the problem Definition
	 @param element the element that will the problemDefinition
	 */
	this.setProblemDefinition = function(element){this.divProblemDefinition = x;};
	/**
	 overide defult divTurnInPolicy
	 NEEDs implementing
	 */
	//this.overrideDivTurnInPolicy;
	/**
	 override default divCollabPolicy
	 @param(string) title
	 @param(string) p
	 */
	this.overrideDivCollaborationPolicy = function(title, p) {
		this.divCollabPolicy = mk("div", {id:this.kID_collabPolicy}, null, function(b) {
			mk("h2", null, b, function(b) { b.innerHTML = title;});
			mk("p", null, b, function(b) {
				b.innerHTML = p;
			});
		});
	}
	/**
	 set the divDeadline
	 @param(string) s innerHTML of p
	 */
	this.setDivDeadline = function(s) {
		this.divDeadline = mk("div",{id:this.kID_divDeadline}, null, function(b){
			mk("p",null, b, function(b) {
				b.innerHTML = s;
			});
		});
	};
	/** sets the divHeader
	 @param(string) s the innerHTML of the H1 element
	 */
	this.setDivHeader = function(s){
		this.divHeader = mk("div",{id:this.kID_divHeader}, null, function(b) {
			mk("h1",null, b, function(b){
				b.innerHTML = s;
			});
		});
	};
	/**
	 Will set the title of the current page
	 @param(string) title the name of the new title
	 */
	this.setTitle = function(title) {
		document.getElementsByTagName("title")[0].innerHTML = title;
	};
	/**
	 Will set the small top header
	 @param(string) s the innerHTML that will be in header element
	 */
	this.setHeader = function(s){
		this.header = mk("header",null,null,function(b){
			b.innerHTML = s;
		});
	};
};