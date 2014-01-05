window.onload = function(){
	var body = document.getElementsByTagName("body")[0];
	var PAM = new ProgrammingAssignmentModel();
	PAM.setTitle("");
	PAM.setHeader("");
	PAM.setDivHeader("");
	PAM.setDivDeadline("");
	PAM.setProblemDefinition(mk("div",{id:PAM.kID_probDef},null, function(b) {}));
	PAM.setRubric("", [],[]);
	PAM.appendPAMTo(body);
}