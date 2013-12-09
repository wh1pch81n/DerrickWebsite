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
										new NavLink("About Me", "index.html", 0),
										new NavLink("Classes", "courses.html", 0),
										new NavLink("Projects", "projects.html", 0),
										new NavLink("Work History", "work_history.html", 0),
										new NavLink("Teaching", "teaching.html", 0),
										new NavLink("Project Euler", "https://github.com/wh1pch81n/ProjectEulerNew", 1),
										new NavLink("CodeEval", "https://www.codeeval.com/public/8204d6d519fd06ef4ef36415ec9001466e87fc35/", 1)
		];
		
		var nav = document.getElementById(this.navigationID);
		
		for(var i = 0; i < arrLinks.length; ++i) {
			nav.appendChild(arrLinks[i].createLinkElement());
		}
		
	}
};

function NavLink(title, url, willOpenInNewTab) {
	this.title=title;
	this.url=url;
	this.willOpenInNewTab=willOpenInNewTab;
	this.createLinkElement = function() {
		var p = document.createElement("p");
		//check if current url is the link we are making
		//if so give it the class "selected"
		if (document.URL.search(this.url) >= 0) {
			p.setAttribute("class", "selected");
		}
		var link = document.createElement("a");
		link.innerHTML = this.title;
		link.setAttribute("href",this.url);
		if (this.willOpenInNewTab) {
			link.setAttribute("target", "_blank");
		}
		p.appendChild(link);
		return p;
	};
}