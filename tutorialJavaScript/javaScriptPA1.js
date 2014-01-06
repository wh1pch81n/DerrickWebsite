window.onload = function(){
	var body = document.getElementsByTagName("body")[0];
	var PAM = new ProgrammingAssignmentModel();
	PAM.setTitle("CS10 - Programming Assignment 1");
	PAM.setHeader("Last Updated Jan 6,2014 by Derrick Ho");
	PAM.setDivHeader("CS10 - JavaScript Programming Assignment 1");
	PAM.setDivDeadline("Due: One week after you have read the specs.");
	PAM.setProblemDefinition(mk("div",{id:PAM.kID_probDef},null, function(b) {}));
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