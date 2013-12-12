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
										new NavLink("CodeEval", "https://www.codeeval.com/public/8204d6d519fd06ef4ef36415ec9001466e87fc35/", 1),
										new NavLink("<img src=\"http://s.c.lnkd.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png\" width=\"20\" height=\"15\" alt=\"View Derrick Ho's LinkedIn profile\">", "http://www.linkedin.com/in/derrickho88", 1)
										];
		
		var nav = document.getElementById(this.navigationID);
		var selNum = 0;
		for(var i = 0; i < arrLinks.length; ++i) {
			var p = arrLinks[i].createLinkElement();
			
			//check if current url is the link we are making
			//if so give it the class "selected"
			if(document.URL.search(arrLinks[i].url) >= 0) {
				p.setAttribute("class", "selected");
				selNum = i;
			}
			nav.appendChild(p);
		}
		if(selNum == 0) {
			nav.firstChild.class = "selected";
		}
		
	}
};

function NavLink(title, url, willOpenInNewTab) {
	this.title=title;
	this.url=url;
	this.willOpenInNewTab=willOpenInNewTab;
	this.createLinkElement = function() {
		var p = document.createElement("p");
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