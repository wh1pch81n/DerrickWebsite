function initContent(parent) {
	mk('p', null, parent, function(b) {
		mk('a', {href:"#selfDrivenProjects"}, b, function(b) {
			b.innerHTML = "Self-Driven Projects";
		});
		b.innerHTML += " | ";
		mk('a', {href:"#schoolProjects"}, b, function(b) {
			b.innerHTML = "School Projects";
		});
		b.innerHTML += " | ";
		mk('a', {href:"#toyProjects"}, b, function(b) {
			b.innerHTML = "Toy Projects";
		});
	});
	
	var tableID = "selfDrivenProjects";
	var tableCaption = "Self-Driven projects";
	var tableData2d = [
		["Name","Brief","Duration","Repository"],
		["ToastMaster Timer", "Built a flag based timing app to help take your speech to the next level.", "", "<a target='blank' href='https://github.com/wh1pch81n/ToastMasterTimer'>GitHub</a>, <a target='blank' href='https://itunes.apple.com/us/app/toastmaster-timer/id837916943?ls=1&mt=8'>App Store</a>"],
		["ToastMaster Topics", "Compiled an app that delivers random Table Topics so that you can practice quick thinking and impromptu skills wherever you are.","", "<a target='blank' href='https://github.com/wh1pch81n/ToastMasterTopics'>GitHub</a>, <a target='blank' href='https://itunes.apple.com/us/app/toastmaster-table-topics/id888937799?mt=8'>App Store</a>"],
		["Slideshow Script Generator","Implemented a Cocoa bindings aware UI App that can edit and create slideshow scripts for online tutorials.","Jan 2014","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DerrickWebsiteSSG\">GitHub</a>"],
		["<a href=\"http://derrickho.co.nf\">This Website</a>", "Website built from scratch out of HTML5, CSS, and JavaScript.", "", "<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DerrickWebsite\">GitHub</a>"],
		["nand2tetris","Built an elementary, but complete computer. Stacked custom built ALU, CPU, Assembler, Virtual Machine Translator, Jack Compiler, and Jack OS in order to play Tetris on top of them. Implemented hardware abstraction layer.","Dec 2012 to Mar 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_condensed\">GitHub1</a>, <a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_uncondensed\">GitHub2</a>"],
		["iOS Pong Game","A one/two player game of Pong on iOS","Mar 2013 to Mar 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/AirHockeyiPhone\">GitHub</a>"],
		["TellerCalc","A simple calculator for people that don't need advanced functions","Jun 2013 to Jun 2013","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/TellerCalc\">GitHub</a>"],
		["FPGA Graphics","<p>What happens when you combine a playstation controller, a VGA screen, and a RS-232 cable?  Fun Stuff.</p><p>Send a picture to the FPGA and it will show up on the screen.  How does the picture get there? Use your laptop to send it through the rs-232 cable.  How do you play with the image? Use playstation controller to move it around the screen, make it smaller or larger, and rotate it clockwise or counter-clockwise.</p>","Jun 2012 to Nov 2012","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DynamicImageTransformation\">GitHub</a>"]
	];
	parent.appendChild(makeTable(tableID, tableCaption, tableData2d));
	
	tableID = "schoolProjects";
	tableCaption = "School Projects";
	tableData2d = [
		["Name","Brief","Duration","Repository"],
		["DDR Game","Conceptualized a design for a DDR-like game for an ATmega32. Fashioned game rules and logic. Designed IO drivers for LED screen and game controller. Completed solo in 5 days.","Aug 2011 to Sep 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/MicroControllerDDR\">GitHub</a>"],
		["Saturn Dungeon Game","Collaborated in a group to produce a 3-D Dungeon Crawler Game. Prepared a fast pathfinding algorithm by utilizing A-star search and simplifying spatial representation of the level’s wireframe.","Apr 2011 to Jun 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/game_saturns_dungeon\">GitHub</a>"],
		["VHDL L2 Cache","Built a reconfigurable L2 Cache capable of direct mapping, fully associative mapping, and their hybrids. Collaborated with customer in depth to erase ambiguities in product specifications.","Nov 2011 to Nov 2011","<a target=\"_blank\" href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/VHDL_L2_Cache\">GitHub</a>"],
	];
	parent.appendChild(makeTable(tableID, tableCaption, tableData2d));
	
	tableID = "toyProjects";
	tableCaption = "Toy Projects";
	tableData2d = [
		["Name", "Brief", "Repository"],
		["<a target=\"_blank\" href=\"games/MineSweeper.html\">Minesweeper</a>", "The classic game of Minesweeper", "<a target=\"_blank\" href=\"https://github.com/wh1pch81n/DerrickWebsite/blob/master/games/MineSweeper.html\">1</a>"]
	];
	parent.appendChild(makeTable(tableID, tableCaption, tableData2d));
};