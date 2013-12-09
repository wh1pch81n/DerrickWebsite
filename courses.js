function initContent(parent) {
	//UCR courses
	var table_id = "UCR_course_table";
	var table_caption = "Courses I took in UC Riverside";
	var tableData = [
	["Course #", "Course Title", "Year"],
	["CS 122A, CS120B", "Embedded Systems &amp; Real-time Systems", "2011"],
	["CS 161", "Design &amp; Architecture of Computer Systems", "2011"],
	["CS 130", "Computer Graphics", "2011"],
	["CS 179n",	"Video Game Design","2011"],
	["CS 066","3-D Modeling","2011"],
	["CS 141, CS 111","Data Structures &amp; Algorithms","2011, 2010"],
	["CS 150","Theory-Automata &amp; formal languages",	"2011"],
	["CS 120A","Logic Design","2010"],
	["CS 061","Machine Organization &amp; Assembly Language",	"2010"],
	["Engr 180","Technical Communications","2010"],
	["EE 100B, EE 100A","Electronic Circuits","2010, 2012"],
	["CS 153","Operating Systems","2012"]
	];
	parent.appendChild(makeTable(table_id, table_caption, tableData));
	
	//self taught courses
	
	table_id = "selfTaughtClasses";
	table_caption = "Self Taught Classes";
	tableData = [
	["Name","Summary","Source Material","Year","Repository"],
	["Nand2Tetris",	"Built a computer from HDL to tetris and beyond","<a href=\"http://nand2tetris.org/book.php\">book</a>,<br>	<a href=\"http://nand2tetris.org/course.php\">Lecture Slides</a>","2013","<a href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_condensed\">1</a>,<a href=\"https://github.com/wh1pch81n/code_projects_portfolio/tree/master/TECS_uncondensed\">2</a>"],
	["Tap, Move, Shake","A step-by-step guide to iPhone game development","<a href=\"http://www.barnesandnoble.com/w/tap-move-shake-todd-moore/1110853935?ean=9781449303457\">book</a>","2013","<a href=\"https://github.com/wh1pch81n/AirHockeyiPhone\">1</a>"],
	["HTML and CSS","Make beautiful websites with HTML5","<a href=\"http://www.barnesandnoble.com/w/head-first-html-and-css-2nd-edition-elisabeth-robson/1111330915?ean=9780596159900\">book</a>","2013","<a href=\"https://github.com/wh1pch81n/headfirst_html\">1</a>"],
	["HTML and JavaScript","Make interactive websites with HTML5","<a href=\"http://www.barnesandnoble.com/w/head-first-html5-programming-eric-t-freeman/1110865264?ean=9781449390549\">book</a>","2013","<a href=\"https://github.com/wh1pch81n/head_first_html5js\">1</a>"],
	["The Algorithm Design Manual","Learn algorithms the Skiena way","<a href=\"http://www.cs.sunysb.edu/~algorith/video-lectures/\">Lecture Slides</a>","2013",""]
	];
	parent.appendChild(makeTable(table_id, table_caption, tableData));
};

