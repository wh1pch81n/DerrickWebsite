
window.onload = function() {
	var slideshow = new DHSlideShow();
	slideshow.init("lectureSlides", "Lesson 2: Lecture Slides");
		
	var codeArr = [];
	var header = "";
	var comment = "";
	
	codeArr.push(new DHStringWithHighlight("this is code", 0));
	codeArr.push(new DHStringWithHighlight("highlighted", 1));
	header = "splendid header";
	comment = "wonderful comment";
	slideshow.appendSlide(codeArr, header, comment);
	
	
	codeArr.push(new DHStringWithHighlight("filo", 0));
	codeArr.push(new DHStringWithHighlight("piccolo", 0));
	header = "dragonball";
	comment = "gohan";
	slideshow.appendSlide(codeArr, header, comment);
	
	slideshow.goToSlide(0);
};