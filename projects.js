function initContent(parent) {
	mk('p', null, parent, function(b) {
		mk('a', {href:"#selfDrivenProjects"}, b, function(b) {
			b.innerHTML = "Self-Driven Projects";
		});
		b.innerHTML += " | ";
		mk('a', {href:"#schoolProjects"}, b, function(b) {
			b.innerHTML = "School Projects";
		});
	});
	
	var tableID = "selfDrivenProjects";
	var tableCaption = "Self-Driven projects";
	var tableData2d = [
					   ["Name","Brief","Duration","Repository"],
					   ["<a href=\"http://derrickho.co.nf\">Personal Website</a>", "Website built from scratch out of HTML5, CSS, and JavaScript.", "Dec 2013 to present", "<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DerrickWebsite\">1</a>"],
					   ["nand2tetris","Built an elementary, but complete computer. Stacked custom built ALU, CPU, Assembler, Virtual Machine Translator, Jack Compiler, and Jack OS in order to play Tetris on top of them. Implemented hardware abstraction layer.","Dec 2012 to Mar 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_condensed\">1</a>, <a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_uncondensed\">2</a>"],
					   ["iOS Pong Game","Taught myself Objective-c through a step-by-step guide to iPhone game development","Mar 2013 to Mar 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/AirHockeyiPhone\">1</a>"],
					   ["TellerCalc","<p>Created a simple calculator app tailored for my mother. Uploaded to the <a target=\"_blank\" href=\"https://itunes.apple.com/us/app/tellercalc/id654632985?mt=8\">app store</a></p><p>Tokenizes complete equation before solving. Flexible code base can easily add new math functions.</p>","Jun 2013 to Jun 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/TellerCalc\">1</a>"],
					   ["FPGA Graphics","<p>What happens when you combine a playstation controller, a VGA screen, and a RS-232 cable?  Fun Stuff.</p><p>Send a picture to the FPGA and it will show up on the screen.  How does the picture get there? Use your laptop to send it through the rs-232 cable.  How do you play with the image? Use playstation controller to move it around the screen, make it smaller or larger, and rotate it clockwise or counter-clockwise</p>","Jun 2012 to Nov 2012","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DynamicImageTransformation\">1</a>"]
					   ];
	parent.appendChild(makeTable(tableID, tableCaption, tableData2d));
	
	tableID = "schoolProjects";
	tableCaption = "School Projects";
	tableData2d = [
				   ["Name","Brief","Duration","Repository"],
				   ["DDR Game","Conceptualized a design for a DDR-like game for an ATmega32. Fashioned game rules and logic. Designed IO drivers for LED screen and game controller. Completed solo in 5 days.","Aug 2011 to Sep 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/MicroControllerDDR\">1</a>"],
				   ["Saturn Dungeon Game","Collaborated in a group to produce a 3-D Dungeon Crawler Game. Prepared a fast pathfinding algorithm by utilizing A-star search and simplifying spatial representation of the level’s wireframe.","Apr 2011 to Jun 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/game_saturns_dungeon\">1</a>"],
				   ["VHDL L2 Cache","Built a reconfigurable L2 Cache capable of direct mapping, fully associative mapping, and their hybrids. Collaborated with customer in depth to erase ambiguities in product specifications.","Nov 2011 to Nov 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/VHDL_L2_Cache\">1</a>"],
				   ];
	parent.appendChild(makeTable(tableID, tableCaption, tableData2d));
};