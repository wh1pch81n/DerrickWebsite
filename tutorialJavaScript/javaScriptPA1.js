window.onload = function(){
	var body = document.getElementsByTagName("body")[0];
	var PAM = new ProgrammingAssignmentModel();
	PAM.setTitle("CS10 - Programming Assignment 1");
	PAM.setHeader("Last Updated Jan 6,2014 by Derrick Ho");
	PAM.setDivHeader("CS10 - JavaScript Programming Assignment 1");
	PAM.setDivDeadline("Due: One week after you have read the specs.");
	PAM.setProblemDefinition(mk("div",{id:PAM.kID_probDef()}, null, function(b) {
		mk("h3", null, b, function(b){
			b.innerHTML = "Problem Definition";
		});
		mk("p", null, b, function(b){
			b.innerHTML = "For this assignment you will write a program that asks the user for information about the initial (x,y) position, and (x,y) velocity of an object.  Given this information, the program will then print out the (x,y) position of the object at 0, 1, 2, 3, and 4 seconds.  You will use the following equation to compute the position over time:";
		});
		mk("p", null, b, function(b){
			b.innerHTML = "x_pos = x_init + (x_vel * t) + 0.5 * (x_acc * t * t)";
		});
		mk("p", null, b, function(b){
			b.innerHTML = "where \"x_init\" is the initial x position, \"x_vel\" is the initial velocity in the x direction, \"x_acc\" is the acceleration in the x direction, \"t\" is the time in seconds, and \"x_pos\" is the x position after \"t\" seconds.  A similiar equation would be used to compute the y position over time.  You can assume that the object is under freefall in earth's atmospere, so acceleration in the y direction is a constant -9.81, and acceleration in the x direction is a constant 0.0.  In your program these accelerations should be hardcoded, and \"t\" should be a variable integer.";
		});
	}));
	PAM.setRubric("Rubric: (10 pts total",
								["2 pts: Correctly declares constants and variables",
								 "2 pts: Gets input",
								 "2 pts: Calculations use variables for time, position and velocity, but constants for acceleration",
								 "2 pts: Correct output",
								 "1 pt:  Header info (provide correct info specified above)",
								 "0.5 pt: Compiles without errors",
								 "0.125 pts: - Good variable names",
								 "0.125 pts: - Proper indentation",
								 "0.125 pts: - Good comments",
								 "0.125 pts: - No line wraps"],
								["Bonus +1 Point: Figure out how to use a \"for loop\" to increment the time variable."]);
	PAM.appendPAMTo(body);
}