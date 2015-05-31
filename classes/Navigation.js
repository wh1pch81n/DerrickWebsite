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
		var navLinkCurry = function(isExternal) {
			return function(linkName, url) {
				return new NavLink(linkName, url, isExternal);
			};
		};
		var navInternal = navLinkCurry(0);
		var navExternal = navLinkCurry(1);
		var arrLinks = [
			navInternal("About Me", "index.html"),
			navExternal("Blog", "http://embsi.blogspot.com"),
			navInternal("Classes", "courses.html"),
			navInternal("Projects", "projects.html"),
			navInternal("Skills", "skills.html"),
			navInternal("Work History", "work_history.html"),
			navInternal("Teaching", "teaching.html"),
			navExternal("Project Euler", "https://github.com/wh1pch81n/ProjectEulerNew"),
			navExternal("CodeEval", "https://www.codeeval.com/public/8204d6d519fd06ef4ef36415ec9001466e87fc35/"),
			navExternal("<img src=\"http://s.c.lnkd.licdn.com/scds/common/u/img/webpromo/btn_in_20x15.png\" width=\"20\" height=\"15\" alt=\"View Derrick Ho's LinkedIn profile\">", "http://www.linkedin.com/in/derrickho88")
		];
		
		var nav = document.getElementById(this.navigationID);
		for(var i = 0; i < arrLinks.length; ++i) {
			nav.appendChild(arrLinks[i].createLinkElement());
		}
		
		//check if current url is the link we are making
		//if so give it the class "selected"

		var currentLink = [];
		for (var i = 0; i < nav.childNodes.length; ++i) {
			if (document.URL.indexOf(arrLinks[i].url) != -1) {
				currentLink.push(nav.childNodes[i]);
			}
		}

		var setAttributeCurry = function(attributeName, attributeValue) {
			return function(node) {
				node.setAttribute(attributeName, attributeValue)
			};
		};
		setAttributeCurry("class", "selected")(currentLink.length == 0 ? nav.childNodes[0] : currentLink[0])
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