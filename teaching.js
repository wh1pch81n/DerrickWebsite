//var globalTutorialName = null;
//var globalLessonNum = null;
//var globalSlideNum = null;

var globalParent = null;
var globalLesson = null;

function initContent(parent) {
	globalParent = parent;
	globalLesson = mk("article", {id:"lessonSpace"}, parent, null);
	
	vhdlLesson1();
	//var selectionListID = "tutorialNameID";
	//var optionArr = [
	//new OptionDetail("",""),
	//new OptionDetail("JavaScript", "JavaScript"),
	//new OptionDetail("VHDL", "VHDL")
	//];
	//var selectList = makeSelectionList(selectionListID, optionArr);
	
	//mk("label", {for:"jk"}, parent, function(p) {
		//	p.innerHTML = "Select name of tutorial";
		//});
		//selectList.onchange = function() {
			//	var selectObj = document.getElementById(selectionListID);
			//	var index = selectObj.selectedIndex;
			//	var tutorial = selectObj[index].value;
	
			//	globalTutorialName = tutorial; 
			//come back to this later.  I'm confusing myself about what to do
			//};
			//parent.appendChild(selectList);
		};

		//function handleTutorial() {
			//alert(e["name"]);
			//	var selectObj = document.getElementById()
			//};

			/**
			creates the three selectionList ojects and a button
			@param arrOfSelectList an array of selectList objects
			@param buttonAction a function pointer that will be called when button pressed
			*/
			//function createSelectionListGUI() {
				//	return mk("div", null, null, function(b) {
					//		var selectionListID = "tutorialNameID";
					//		var optionArr = [
					//		new OptionDetail("",""),
					//		new OptionDetail("JavaScript", "JavaScript"),
					//		new OptionDetail("VHDL", "VHDL")
					//		];
					//		var selectList = makeSelectionList(selectionListID, optionArr);
	
					//		mk("label", {for:"jk"}, parent, function(p) {
						//			p.innerHTML = "Select name of tutorial";
						//		});
						//		b.appendChild(selectList);
						//		mk("br", null, b, null);
		
		
						//selectList.onchange = function() {
							//	var selectObj = document.getElementById(selectionListID);
							//	var index = selectObj.selectedIndex;
							//	var tutorial = selectObj[index].value;
		
							//	globalTutorialName = tutorial; 
							//	//come back to this later.  I'm confusing myself about what to do
							//};
							//		});
							//	}
							//}

							var tutorialTree = {
								JavaScript: lessonTreeJavaScript,
								VHDL:lessonTreeVHDL
							};


							var lessonTreeVHDL = {
								//0:vhdlLesson0,
								1:vhdlLesson1,
								2:vhdlLesson2
							};

							var lessonTreeJavaScript = {

							};

							//vhdl lessons
							function vhdlLesson0() {

							};

												
							function vhdlLesson1() {
								vhdlLesson1_slideshow();
								vhdlLesson1_questions();
							};
							
							function vhdlLesson1_slideshow() {
								//slideShow
								var slideshow = new DHSlideShow();
								slideshow.init(globalLesson.id, "Lesson 1: Lecture Slides");
		
								var codeArr = [];
								var header = "";
								var comment = "";
	
								//codeArr.push(new DHStringWithHighlight("this is code", 0));
								//codeArr.push(new DHStringWithHighlight("highlighted", 1));
								//header = "splendid header";
								//comment = "wonderful comment";
								//slideshow.appendSlide(codeArr, header, comment);
	
	
								//codeArr.push(new DHStringWithHighlight("filo", 0));
								//codeArr.push(new DHStringWithHighlight("piccolo", 0));
								//header = "dragonball";
								//comment = "gohan";
								//slideshow.appendSlide(codeArr, header, comment);
	
								//====
								codeArr.push(new DHStringWithHighlight("library ieee;",0));
								header = "The much needed library";
								comment = "This library allows you to write vhdl.  Always include it";
								slideshow.appendSlide(codeArr, header, comment);
	
								codeArr.push(new DHStringWithHighlight("entity first_prog is", 0));
								codeArr.push(new DHStringWithHighlight("end entity first_prog;", 0));
								codeArr.push(new DHStringWithHighlight("", 0));
								header = "Entity identity";
								comment = "Whats an entity?  its kinda like a function declaration or a function prototype.  What it does is let you name it and describe the parameters.  right now, there are no parameters but I've given it the name \"first_prog\"";
								slideshow.appendSlide(codeArr, header, comment);

								codeArr.push(new DHStringWithHighlight("architecture implementation of first_prog is", 0));
								codeArr.push(new DHStringWithHighlight("begin", 0));
								codeArr.push(new DHStringWithHighlight("end architecture implementation;", 0));
								header = "architects needed"
								comment = "The architecture is where the entity is implemented.  I named the architecture \"implementation\" but you can name it what ever you want.  I chose to give it a name that literally describes what it is.  Which is...the implementation of first_prog <br><br>";
								comment += "You may also wonder what begin and end are for.  begin is kinda like an open curly brace \"{\" and the end is kinda like a close curly brace \"}\"";
								slideshow.appendSlide(codeArr, header, comment);
	
								header = "This looks a bit borning... ";
								comment = "yeah, I know.  thats because we haven't put anything in it.  This is basically just the foundation that all VHDL modules will be written on";
								slideshow.appendSlide(codeArr, header, comment);
	
								header = "see it?";
								comment = "Notice how the each part has a begining and an ending. We say entity then the name and finish it with the entity then the name.  the same pattern can be found on architecture.  Some of these words are optional, but I highly recommend including them to keep things balanced.  When things are balanced, it looks beautiful";
								slideshow.appendSlide(codeArr, header, comment);
								
								codeArr.splice(2, 0, new DHStringWithHighlight( "&emsp; port(", 1),
								new DHStringWithHighlight("&emsp; &emsp; parameterName1: in std_logic_vector(0 downto 0);", 1),
								new DHStringWithHighlight("&emsp; &emsp; returnName1: out std_logic_vector(0 downto 0)", 1),
								new DHStringWithHighlight("&emsp;);", 1)
							);
							header = "Adding Parameters";
							comment = "In order for you entity to be useful, it must be able to take in different arguments and give out a result";
							slideshow.appendSlide(codeArr, header, comment);
							
							codeArr[3].isLit = 0;
							codeArr[4].isLit = 0;
							
							comment = "You must declare your parameters in between the parenthesis after the word port";
							slideshow.appendSlide(codeArr, header, comment);
		
	/*
							//todo: talk about std logic vectors and what downto means and also about what in and out means
							header = "parameter types";
							comment = "Every parameter can have 3 directions: in, out, and inout<br><br>";
							comment += "what does \"in\" mean? It means we expect it to be an input.  Outsiders are expected to insert a value into the entity's \"in\" port.  However, inside the entity, we may read the port but not change it<br><br>";
							comment += "what does \"out\" mean? It means we expect it to be an output.   Outsiders are expected to read the value of an entity's \"out\" port.  It is like a return value.  However, inside the entity, we may set the port but not read from it";
							highlight.splice(2, 4, 0,1,1,0); //unhighlight these parts
							slideshow.appendSlide(codeArr, header, comment);
	
							header = "what about inout?";
							comment = "That is an advanced topic where you can treat it as both an input and an output.  If these ports were streets, the cars would crash into each other head first.  To prevent this mess we need a traffic light to delegate.  In hardware we call it a tri-state device.  This will allow us to set unused inout ports to high Z which will act as a disconnected wire.<br><br>";
							comment += "inout ports are not used very often, but can be powerful. We shall cover the topic of inout in a future lesson.  So for now just keep it in the back of your mind and pay attention to the in and out ports";
							slideshow.appendSlide(codeArr, header, comment);
	
							header = "where do i set the in or out?";
							comment = "after the parameter name there is a colon.  add the in or out there";
							slideshow.appendSlide(codeArr, header, comment);
	
							header = "Parameter Names?";
							comment = "You must name your paremeters.  It must start with an alphabetical letter.  It can not start with a number but it CAN end with a number.  in this example I have two parameters named \"parameterName\" and \"returnName\". <br><br>";
							comment += "You must give your parameters two different types.  As we mentioned earlier, you need to specify the direction: \"in\" or \"out\" and you also need to specify the wire type and size.  We shall almost always use an std_logic_vector.  We gave it the size of one.  Which means it holds one bit";
							slideshow.appendSlide(codeArr, header, comment);
	
							header = "Are you down?";
							comment = " in order to specify the size of the std_logic_vector, you need to use downto. In Computer Science, the convention is to label the bits in descending order.  The right most bit starts with zero and we count up as we go left.  That is what we mean when we say \"0 downto 0\".  we are specifying that we want a vector of size 1. and we want to label the left most bit as 0 and the right most bit as 0. <br><br>";
							comment += "if we wanted a 4 bit std_logic_vector we would need to say \"3 downto 0\".  The left most bit would be labeled as 3 and the right most bit would be labeled as zero.";
							slideshow.appendSlide(codeArr, header, comment);
	
							highlight.splice(2, 4, 0,0,0,0);
	
							code.splice(10, 0, "&emsp; &emsp; returnName1 &lt;&#61; parameterName1;");
							highlight.splice(10, 0, 1);
							header = "Assigning values";
							comment = "to assign a value we use \"&lt;&#61;\" which is also known as the signal assignment operator.  we are using the value of parameterName1 to set the value of returnName1";
							slideshow.appendSlide(codeArr, header, comment);
	
							highlight.splice(10, 1, 0);
							header = "End of Lesson";
							comment = "read the Q and A below";
							slideshow.appendSlide(codeArr, header, comment);
							*/
							//====
	
							slideshow.goToSlide(0); //go to first slide by default
							//slideshow.goToSlide(slideshow.arrOfSlides.length-1);
						};
							
						function vhdlLesson1_questions() {
							mk("article", {id:"questions"}, globalLesson, function(p) {
								mk("h1", null, p, function(p) { p.innerHTML = "There Are no Stupid Questions";});
								mk("h3", null, p, function(p) {	p.innerHTML = "How do I make a single line comment?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "Double dashes mean commented out code. eg \"--\" Don't ask me why they chose double dashes instead of double slashes like most languages eg \"//\".";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "How do I make multi-line comments?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "In many programming languages the multi-line comment begins with the \"/*\" and ends with the \"*/\".  VHDL currently does not	have multi-line comments so you will just have to use multiple single line comments.";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "whats a std_logic_vector?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "I am assuming that you are familiar with a bit. An std_logic_vector is an array of them.  the \"(0 downto 0)\" part is how you specify how many bits there will.  In this case there will be only one";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "downto?"; });
								mk("p", null, p, function(p) {
									p.innerHTML = "its the numbering direction.  the number to the right will be the index of the right most bit. the number to the left will be the index to the left most bit. so if I have an std_logic_vector(4 downto 0), it means my bits will be counted like this:";
								});
								mk("p", null, p, function(p) {
									p.innerHTML = "4, 3, 2, 1, 0 -- index number <br>";
									p.innerHTML += "1, 0, 0, 1, 1 -- bits";
								});
								mk("p", null, p, function(p) {
									p.innerHTML = "there is also something call \"to\" which counts it the opposite way";
								});
								mk("p", null, p, function(p) {
									p.innerHTML = "0, 1, 2, 3, 4 -- index number <br>";
									p.innerHTML += "1, 0, 0, 1, 1 -- bits";
								});
								mk("p", null, p, function(p) {
									p.innerHTML = "but I usually save that for vhdl arrays. Also you should notice that the bits didn't change.  Only the number label changed.  Why is this significant?  When you access an element of the std_logic_vector, the index you choose will correspond to the number label.  If my std_logic_vector(4 downto 0) is named foo and a downto is used then if I access the 3rd bit (e.g. foo(3) ) then I get the 2nd bit from the left. But if I used \"to\" (e.g. std_logic_vector(0 to 4) ) then foo(3) would correspond to the 4th bit from the left."
								});
								mk("h3", null, p, function(p) { p.innerHTML = "huh? returnName1 &lt;&#61; parameterName1;"});
								mk("p", null, p, function(p) {
									p.innerHTML = "in this context, the &lt;&#61; is used to indicate that the parameter is assigning a value to the return variable. Also, since the line of code was done in the concurrent region, it will happen instantaneously as opposed to sequentially."
								});
								mk("h3", null, p, function(p) { p.innerHTML = "what did we just make?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "Its a buffer. All it does it carry the input to the output.  Usually this has the effect of enforcing direction or keeping the a high bit high and a low bit low.";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "can you talk a bit more about concurrency?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "Lets say there was an entity with more parameters and return names.";
									p.innerHTML += "our implementation would look like ....<br>";
									p.innerHTML += "<br>";
									p.innerHTML += "returnName1 &lt;&#61; parameterName1;<br>";
									p.innerHTML += "returnName2 &lt;&#61; parameterName2;<br>";
									p.innerHTML += "returnName3 &lt;&#61; parameterName3;<br>";
									p.innerHTML += "<br>";
									p.innerHTML += "all three of those would be set at the same time as opposed to being";
									p.innerHTML += "set one at a time from top to bottom.";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "in and out?  sounds like a tasty fast food joint";});
								mk("p", null, p, function(p) {
									p.innerHTML = "in and out are the directions of the flow of electricity. When you set something as \"in\" the parameter can be read but not set. When you set it as \"out\", the opposite happens.  You can set it but you can't read it.  Much like how in software languages, you can't read from the \"return\" keyword, but you can set it.";
								});
								mk("h3", null, p, function(p) { p.innerHTML = "Why do parameters need two different types?";});
								mk("p", null, p, function(p) {
									p.innerHTML = "We need to specify the direction of the flow of electricity.  That can be either \"in\" or \"out\".  The second type specifies the size and type of the wire.  For most intents and purposes you may use an std_logic_vector.";
									p.innerHTML += "<br><br>";
									p.innerHTML += "there are other types out there like std_logic and bit.  But I feel that in an effort to keep things more uniform we will stick with std_logic_vector's for now.  You may run into std_logic from time to time and I don't really want to stranded so I'll make a quick note about std_logic.";
									p.innerHTML += "<br><br>";
									p.innerHTML += "std_logic can hold one bit.  You may set an std_logic with either a '1' or a '0'.  (you can also set it as high-Z which looks like 'Z'.  that is a capital Z and is case sensitive).  An std_logic_vector is, you guessed it, a vector (or an array) of std_logic.  Which means you can access each std_logic in a std_logic_vector.";
								});
							
								mk("p", {class:"code"}, p, function(p) {
									p.innerHTML = "<span class=\"comment\">-- suppose we have 3 wires called foo, bar, and rut</span><br>";
									p.innerHTML += "<span class=\"comment\">-- foo is an std_logic</span><br>";
									p.innerHTML += "<span class=\"comment\">-- bar and rut are two std_logic_vectors</span><br>";
									p.innerHTML += "foo &lt;&#61; '1'; <span class=\"comment\">-- hard code foo with high bit</span><br>";
									p.innerHTML += "foo &lt;&#61; '0'; <span class=\"comment\">-- hard code foo with low bit</span><br>";
									p.innerHTML += "<br>";
									p.innerHTML += "foo &lt;&#61; bar(3); <span class=\"comment\">-- set foo with the 3rd bit of bar.</span><br>";
									p.innerHTML += "bar(2) &lt;&#61; foo; <span class=\"comment\">-- set 2nd bit of bar with foo</span><br>";
									p.innerHTML += "<br>";
									p.innerHTML += "bar &lt;&#61; rut; <span class=\"comment\">-- set bar with rut.  only works if they are the same size</span><br>";
									p.innerHTML += "bar(4) &lt;&#61; rut(7); <span class=\"comment\">-- set the 4th bit of bar with the 7th bit of rut</span><br>";
								});
									
							});
						};
							
						function vhdlLesson2() {
							vhdlLesson2_slideshow();
							vhdlLesson2_questions();
						};
													
						function vhdlLesson2_slideshow() {
							//slideShow
							var slideshow = new DHSlideShow();
							slideshow.init(globalLesson.id, "Lesson 2: Lecture Slides");
		
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
													
						function vhdlLesson2_questions() {
							mk("h1", null, globalLesson, function(b) {
								b.innerHTML = "recap";
							});
							mk("p", null, globalLesson, function(b) {
								b.innerHTML = "Last time we went into making a simple one bit buffer.  This was to show you the basic codes that you will need in order to write with vhdl.  You learned about how entities are just like function declarations which just show what parameters.  You learned that we use architectures to implement the entity.";
							});
							mk("h1", null, globalLesson, function(b) {
								b.innerHTML = "more parameters";
							});
							mk("p", null, globalLesson, function(b) {
								b.innerHTML = "Just like in Software programs, you can have a function with infinite number of parameters.  In this lession you will learn how to add more parameters to your buffer.  The end result is a 4 bit buffer.";
							});
							mk("div", {class:"code"}, globalLesson, function(b) {
								mk("blockquote", null,b, function(b) {
									b.innerHTML = "library IEEE;<br>";
									b.innerHTML += "use IEEE.STD_LOGIC_1164.ALL;<br>";
									b.innerHTML += "<br>";
									b.innerHTML += "entity buffer_4 is<br>";
									b.innerHTML += "&emsp;port(<br>";
									b.innerHTML += "&emsp;<span class=\"comment\">-- four inputs added</span><br>";
									b.innerHTML += "&emsp;&emsp;a1: in std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;a2: in std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;a3: in std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;a4: in std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;<span class=\"comment\">-- four outputs added</span><br>";
									b.innerHTML += "&emsp;&emsp;s1: out std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;s2: out std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;s3: out std_logic_vector(0 downto 0);<br>";
									b.innerHTML += "&emsp;&emsp;s4: out std_logic_vector(0 downto 0)<br>";
									b.innerHTML += "&emsp;);<br>";
									b.innerHTML += "end buffer_4;<br>";
									b.innerHTML += "<br>";
									b.innerHTML += "architecture Behavioral of buffer_4 is<br>";
									b.innerHTML += "begin<br>";
									b.innerHTML += "&emsp;s1(0) &lt;&#61; a1(0); <span class=\"comment\">-- nothing new here.  just assigning values</span><br>";
									b.innerHTML += "&emsp;s2(0) &lt;&#61; a2(0);<br>";
									b.innerHTML += "&emsp;s3(0) &lt;&#61; a3(0);<br>";
									b.innerHTML += "&emsp;s4(0) &lt;&#61; a4(0);<br>";
									b.innerHTML += "end Behavioral;<br>";
									b.innerHTML += "<span class=\"comment\">-- remember that \"Behavioral\" is just the name of the architecture.</span><br>";
									b.innerHTML += "<span class=\"comment\">-- Last time I named it \"implementation\" to make it sound more like</span><br>";
									b.innerHTML += "<span class=\"comment\">-- english.  But you can name it what ever you want.</span><br>";
								});
							});
						};