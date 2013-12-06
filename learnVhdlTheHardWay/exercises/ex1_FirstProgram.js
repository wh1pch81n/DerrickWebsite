var globalSlideIndex = 0;
var arr = [	];

window.onload = function() {
	
	var nextButton = document.getElementById("nextButton");
	var prevButton = document.getElementById("prevButton");
	nextButton.onclick = clickedNextButton;
	prevButton.onclick = clickedPrevButton;
	
	
	var code = [];
	var highlight = []; //grows along side code
	var header = "";
	var comment = "";
	
	code.push("library ieee;");
	highlight.push(0);
	header = "The much needed library";
	comment = "This library allows you to write vhdl.  Always include it";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	code.push("entity first_prog is",
			  "end entity first_prog;",
			  "");
	highlight.push(0, 0, 0);
	header = "Entity identity";
	comment = "Whats an entity?  its kinda like a function declaration or a function prototype.  What it does is let you name it and describe the parameters.  right now, there are no parameters but I've given it the name \"first_prog\"";
	arr.push( new CodeAndComments(code, highlight, header, comment));

	code.push("architecture implementation of first_prog is");
	code.push("begin");
	code.push("end architecture implementation;");
	highlight.push(0,0,0);
	header = "architects needed"
	comment = "The architecture is where the entity is implemented.  I named the architecture \"implementation\" but you can name it what ever you want.  I chose to give it a name that literally describes what it is.  Which is...the implementation of first_prog <br><br>";
	comment += "You may also wonder what begin and end are for.  begin is kinda like an open curly brace \"{\" and the end is kinda like a close curly brace \"}\"";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "This looks a bit borning... ";
	comment = "yeah, I know.  thats because we haven't put anything in it.  This is basically just the foundation that all VHDL modules will be written on";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "see it?";
	comment = "Notice how the each part has a begining and an ending. We say entity then the name and finish it with the entity then the name.  the same pattern can be found on architecture.  Some of these words are optional, but I highly recommend including them to keep things balanced.  When things are balanced, it looks beautiful";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	code.splice(2, 0,
				"&emsp; port(",
				"&emsp; &emsp; parameterName1: in std_logic_vector(0 downto 0);",
				"&emsp; &emsp; returnName1: out std_logic_vector(0 downto 0)",
				"&emsp;);"
				);
	highlight.splice(2, 0,
					 1,1,1,1); //highlighing these rows
	header = "Adding Parameters";
	comment = "In order for you entity to be useful, it must be able to take in different arguments and give out a result";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	highlight.splice(2, 4, 1,0,0,1);
	comment = "You must declare your parameters in between the parenthesis after the word port";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	
	//todo: talk about std logic vectors and what downto means and also about what in and out means
	header = "parameter types";
	comment = "Every parameter can have 3 directions: in, out, and inout<br><br>";
	comment += "what does \"in\" mean? It means we expect it to be an input.  Outsiders are expected to insert a value into the entity's \"in\" port.  However, inside the entity, we may read the port but not change it<br><br>";
	comment += "what does \"out\" mean? It means we expect it to be an output.   Outsiders are expected to read the value of an entity's \"out\" port.  It is like a return value.  However, inside the entity, we may set the port but not read from it";
	highlight.splice(2, 4, 0,1,1,0); //unhighlight these parts
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "what about inout?";
	comment = "That is an advanced topic where you can treat it as both an input and an output.  If these ports were streets, the cars would crash into each other head first.  To prevent this mess we need a traffic light to delegate.  In hardware we call it a tri-state device.  This will allow us to set unused inout ports to high Z which will act as a disconnected wire.<br><br>";
	comment += "inout ports are not used very often, but can be powerful. We shall cover the topic of inout in a future lesson.  So for now just keep it in the back of your mind and pay attention to the in and out ports";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "where do i set the in or out?";
	comment = "after the parameter name there is a colon.  add the in or out there";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "Parameter Names?";
	comment = "You must name your paremeters.  It must start with an alphabetical letter.  It can not start with a number but it CAN end with a number.  in this example I have two parameters named \"parameterName\" and \"returnName\". <br><br>";
	comment += "You must give your parameters two different types.  As we mentioned earlier, you need to specify the direction: \"in\" or \"out\" and you also need to specify the wire type and size.  We shall almost always use an std_logic_vector.  We gave it the size of one.  Which means it holds one bit";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	header = "Are you down?";
	comment = " in order to specify the size of the std_logic_vector, you need to use downto. In Computer Science, the convention is to label the bits in descending order.  The right most bit starts with zero and we count up as we go left.  That is what we mean when we say \"0 downto 0\".  we are specifying that we want a vector of size 1. and we want to label the left most bit as 0 and the right most bit as 0. <br><br>";
	comment += "if we wanted a 4 bit std_logic_vector we would need to say \"3 downto 0\".  The left most bit would be labeled as 3 and the right most bit would be labeled as zero.";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	highlight.splice(2, 4, 0,0,0,0);
	
	code.splice(10, 0, "&emsp; &emsp; returnName1 &lt;&#61; parameterName1;");
	highlight.splice(10, 0, 1);
	header = "Assigning values";
	comment = "to assign a value we use \"&lt;&#61;\" which is also known as the signal assignment operator.  we are using the value of parameterName1 to set the value of returnName1";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	
	highlight.splice(10, 1, 0);
	header = "End of Lesson";
	comment = "read the Q and A below";
	arr.push( new CodeAndComments(code, highlight, header, comment));
	//
	goToSlide(globalSlideIndex); //show first slide by default
}

function clickedNextButton() {
	if ( globalSlideIndex < arr.length-1) {
		goToSlide(++globalSlideIndex);
	}
}

function clickedPrevButton() {
	if ( globalSlideIndex > 0) {
		goToSlide(--globalSlideIndex);
	}
}

function goToSlide(index) {
	var slide_num = document.getElementById("slide_num");
	slide_num.innerHTML = " " + (globalSlideIndex + 1) + " / " + arr.length + " ";
	var codeSectionP = document.getElementById("codeSectionP");
	codeSectionP.innerHTML = "";
	var s = "";
	for (var i = 0; i < arr[index].code.length; ++i) {
		if (arr[index].highlight[i] == 1) {
			s+= "<span class=\"newCode\">";
		}
		s += arr[index].code[i];
		if (arr[index].highlight[i] == 1) {
			s += "</span>";
		}
		s += "<br>";
	}
	codeSectionP.innerHTML = s;
	document.getElementById("commentSectionH").innerHTML = arr[index].header;
	document.getElementById("commentSectionP").innerHTML = arr[index].comment;
}

function CodeAndComments(code, highlight, header, comment) {
	this.code = code.slice(); //make hard copy of code array
	this.highlight = highlight.slice(); //hard copy of array
	this.header = header;
	this.comment = comment;
}

//var codeAndComments = { //static class
//code: "",
//comment:""
//};
