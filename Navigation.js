/**
 Navigation Class
 @description Responsible for generating the navigation GUI while also allowing the webpage's individual content to be realized
*/

function Navigation(){
	this.headerID = "";
	this.tableContainerID = "";
	this.tableRowID = "";
	this.navigationID = "";
	this.contentID = "";
	this.footerID = "";
	this.initHeader = function() {
		var header = document.getElementById(this.headerID);
		
		header.innerHTML = "<h1>Derrick Ho</h1>"
		+ "<p>"
		+ "Bourns College of Engineering<br>"
		+ "University of California, Riverside"
		+ "</p>";
	};
	this.initFooter = function() {
		var footer = document.getElementById(this.footerID);
		footer.innerHTML = "Copyright &copy; 2013-present. All rights reserved";
	}
	this.initGUI = function() {
		var arrLinks = [
										["About Me", "index.html"],
										["Classes", "courses.html"],
										["Projects", "projects.html"],
										["Work History", "work_history.html"],
										["Teaching", "teaching.html"],
										["Project Euler", "https://github.com/wh1pch81n/ProjectEulerNew"],
										["CodeEval", "https://www.codeeval.com/public/8204d6d519fd06ef4ef36415ec9001466e87fc35/"]
		];
		
		var nav = document.getElementById(this.navigationID);
		
		for(var i = 0; i < arrLinks.length; ++i) {
			var p = document.createElement("p");
			//check if current url is the link we are making
			//if so give it the class "selected"
			if (document.URL.search(arrLinks[i][1]) >= 0) {
				p.setAttribute("class", "selected");
			}
			var link = document.createElement("a");
			link.innerHTML = arrLinks[i][0];
			link.setAttribute("href",arrLinks[i][1]);
			p.appendChild(link);
			nav.appendChild(p);
		}
		
	}
}