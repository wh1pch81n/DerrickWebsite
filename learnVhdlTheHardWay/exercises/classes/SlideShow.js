/**

*/

function DHSlideShow () {
	
	this.slideNumID = "slideNum";
	this.prevButtonID = "prevButton";
	this.prevButtonText = "prev";
	this.nextButtonID = "nextButton";
	this.nextButtonText = "next";
	this.tableRowID = "tableRow";
	this.codeSectionID = "codeSection";
	this.codeSectionPID = "codeSectionP";
	this.commentSectionID = "commentSection";
	this.commentSectionHID = "commentSectionH";
	this.commentSectionPID = "commentSectionP";
	this.displayID = "slide";

	this.arrOfSlides = [];
	this.currentSlide = 0;
	this.init = function(buildID, header) {
		//get reference to buildID
		var article = document.getElementById(buildID);
		
		this.createHeader(article, header);
		this.createGUI(article);
		this.createDisplay(article);
		
	};
	this.appendSlide = function(codeArr,header, comment) {
		this.arrOfSlides.push(new DHSlide(codeArr, header, comment));
	}
	this.createDisplay = function(elementRef) {
		var display = document.createElement("div");
		display.setAttribute("id", this.displayID);
		elementRef.appendChild(display);
		
		var tableRow = document.createElement("div");
		tableRow.setAttribute("id", this.tableRowID);
		display.appendChild(tableRow);
		
		var codeSection = document.createElement("div");
		codeSection.setAttribute("id", this.codeSectionID);
		tableRow.appendChild(codeSection);
		
		var codeSectionP = document.createElement("p");
		codeSectionP.setAttribute("id", this.codeSectionPID);
		codeSection.appendChild(codeSectionP);
		
		var commentSection = document.createElement("div");
		commentSection.setAttribute("id", this.commentSectionID);
		tableRow.appendChild(commentSection);
		
		var commentSectionH = document.createElement("h1");
		commentSectionH.setAttribute("id", this.commentSectionHID);
		commentSection.appendChild(commentSectionH);
		
		var commentSectionP = document.createElement("p");
		commentSectionP.setAttribute("id", this.commentSectionPID);
		commentSection.appendChild(commentSectionP);
	};
	this.createGUI = function(elementRef) {
		// document this properly later
		/**
		 how strange.  The this is not working as expected.
		 */
		var self = this;
		var prevButton = document.createElement("input");
		prevButton.setAttribute("type", "button");
		prevButton.setAttribute("id", this.prevButtonID);
		prevButton.setAttribute("value", this.prevButtonText);
		
		//could not set using "this.clickedPrevButton
		//it would reach the correct function when clicked, but
		//the this would be undefined.  I use a block that reverences
		//a varaibles called self and it seems to work.
		prevButton.onclick = function() {self.clickedPrevButton();};
		
		var slideNum = document.createElement("span");
		slideNum.setAttribute("id", this.slideNumID);
		
		var nextButton = document.createElement("input");
		nextButton.setAttribute("type", "button");
		nextButton.setAttribute("id", this.nextButtonID);
		nextButton.setAttribute("value", this.nextButtonText);
	
		nextButton.onclick = function() { self.clickedNextButton();};
		
		elementRef.appendChild(prevButton);
		elementRef.appendChild(slideNum);
		elementRef.appendChild(nextButton);
	};
	this.createHeader = function(elementRef, header) {
		var header1 = document.createElement("h1");
		header1.innerHTML = header;
		elementRef.appendChild(header1);
	};
	this.updateSlideRange = function() {
		var slide_num = document.getElementById(this.slideNumID);
		slide_num.innerHTML = " " + (this.currentSlide + 1) + " / " + this.arrOfSlides.length + " ";
		
		
	};
	this.goToSlide = function(index) {
		this.updateSlideRange();
		
		var codeSectionP = document.getElementById(this.codeSectionPID);
		codeSectionP.innerHTML = "";
		var s = "";
		
		var currSlide = this.arrOfSlides[index];
		var rowsOfCode = currSlide.arrOfStrWithHighlight;
		
		for (var i = 0; i < rowsOfCode.length; ++i) {
			if (rowsOfCode[i].isLit) {
				s+= "<span class=\"newCode\">";
			}
			s += rowsOfCode[i].str;
			if (rowsOfCode[i].isLit) {
				s += "</span>";
			}
			s += "<br>";
		}
		codeSectionP.innerHTML = s;
		document.getElementById(this.commentSectionHID).innerHTML = currSlide.header;
		document.getElementById(this.commentSectionPID).innerHTML = currSlide.comment;
	};
	this.clickedNextButton = function() {
		if (this.currentSlide < this.arrOfSlides.length-1) {
			this.goToSlide(++this.currentSlide);
		}
	};
	this.clickedPrevButton = function() {
		if (this.currentSlide > 0) {
			this.goToSlide(--this.currentSlide);
		}
	};
}









