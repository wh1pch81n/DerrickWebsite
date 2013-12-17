var globalParent = null;
var globalLesson = null;
/*
 And array of tutorial objects that hold references to
 the lessons
 
 Used Extensivly by teaching.js
 */
var globalTutorialArr =
[{
tutorial:"VHDL",
lessons:[
		 {value:vhdlLesson1, text:"1 - First Program"},
		 //{value:vhdlLesson2, text:"VHDL Lesson 2"}
		 ]
},{
tutorial:"JavaScript",
tutorialFolder:"http://derrickho.co.nf/tutorialJavaScript/",
lessons:[
		 {value:javaScriptLesson0, text:"0 - Get Set Up"},
		 {value:javaScriptLesson1, text:"1 - Strings, Arrays & Math"},
		 {file:"javaScriptL2.txt", text:"2 - ifs & loops"},
		 //{file:"javaScriptL3.txt", text:"JavaScript Lesson 3"}
		 ]
}];
/**
 initializes the content of the page.
 
 @param parent A reference to a DOM object. Objects generated in this function will be appended as child to parent.
 */
function initContent(parent) {
	globalLesson = mk("article", {id:"lessonSpace"}, null, null);
	mk("dl", {id:"tutorialNav"}, parent, function(b) {
		
		for(var i = 0; i < globalTutorialArr.length; ++i){
			var tutorial = globalTutorialArr[i];
			mk("dt", null, b, function(b) {
				b.innerHTML = tutorial.tutorial;
			});
			mk("dd", null, b, function(b) {
				var lessons = tutorial.lessons;
				for(var j = 0; j < lessons.length; ++j)	{
					var button = mk("input", {type:"button", value:lessons[j].text}, b, null);
					var lesson_j = lessons[j];
					if(lesson_j.hasOwnProperty("value")) {
						button.onclick = lesson_j.value;
					} else if(lesson_j.hasOwnProperty("file")){
						button.onclick = function(){
							location.hash = "#header";
							generateSlideShowFromFile(tutorial.tutorialFolder+lesson_j.file, "Lesson " + lesson_j.text);
							location.hash = "#"+globalLesson.id;
						}
					}
				}
			});
		}
	});
	parent.appendChild(globalLesson);
};

/**
 Generates Slide show Object From the text recieved from the path.
 
 @param path "the text at this URL will be used to generate the slideShowObject
 @param slideShowTitle "Title of the slide show"
 */
function generateSlideShowFromFile(path, slideShowTitle) {
	globalLesson.innerHTML = null;
	httpGet(path, function(textFromScript) {
		makeSlideShowWithBlock(globalLesson, slideShowTitle, function (codeArr,flush, codeArrSplice, setHeader, setComment, tag, codeArrAppend, mkdhsh, slideshowAppend, loff, lon, sp, codeComment) {
			//parse script line by line
			var fileArr = filterChar(textFromScript).split('\n');
			var action = null;
			for (var i = 0; i < fileArr.length;++i) {
				if(fileArr[i].indexOf("@code") >= 0) {
					action = function(line) {
						var isH;
						if(isH = isHighlight(line)){
							line = line.replace("~", "&emsp; ");
						}
						codeArrAppend(line, isH);
					};
				}else if(fileArr[i].indexOf("@header") >= 0 || fileArr[i].indexOf("@comment") >= 0) {
					var theAction = setHeader;
					if (fileArr[i].indexOf("comment") >= 0) {
						theAction = setComment;
					}
					action = function(line) {
						for (; fileArr[i+1][0] != '@'; ++i) {
							line += "<br>" + fileArr[i+1];
						}
						theAction(line);
					};
				}else if(fileArr[i].indexOf("@addSlide") >= 0) {
					slideshowAppend();
					flush();
				}else if(fileArr[i].indexOf("@question") >= 0 || fileArr[i].indexOf("@answer") >= 0) {
					var style = fileArr[i].substring(1);
					var element = "p";
					if(style.indexOf("question")>=0){
						element = "h1";
					}
					action = function(line) {
						mk(element, {class:style}, globalLesson, function(b) {
							for (; fileArr[i][0] != '@'; ++i) {
								b.innerHTML += fileArr[i] + "<br>";
							}
						});
						--i;
					};
				}else if(fileArr[i].indexOf("@end") >= 0){
					break;
				}else {
					action(fileArr[i]);
				}
			}
		});
	});
	
}

/**
 replaces certain characters with ones more appropriate for slideShow
 
 @param line "the string that will get flitered of certain chars"
 */
function filterChar(line) {
	var replace_map = {
		'`':"&emsp; ",
		'<':"&lt;",
		'>':"&gt;",
		'/*':"<span class=\"comment\">", //not handled
		'*/':"</span>"//not handled
	};
	
	return line.replace(/[`<>]/g, function(match) {
		return replace_map[match];
	});
}

/*
 Checks if the first character of the line is a ~
 @param line a string
 */
function isHighlight(line) {
	return line[0] == '~';
}

/**
 Reads the content at the URL and saves it into a string. Then offers
 block to let user decide what to do with it
 
 @param theUrl The url of a website.  Only works online
 @block(text) block pointer.  "text" is the content of the URL as a string
 */
function httpGet(theUrl, block){
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			block(xmlhttp.responseText);
		}
	};
	xmlhttp.open("GET", theUrl, false );
	xmlhttp.send();
}

/*
 Created the first lesson of VHDL
 */
function vhdlLesson1() {
	globalLesson.innerHTML = null;
	location.hash = "#header";
	var vhdlLesson1_slideshow = function(){
		//slideShow
		var slideshow = new DHSlideShow();
		slideshow.init(globalLesson.id, "Lesson 1 - First Program");
		
		var codeArr = [];
		var header = "";
		var comment = "";
		
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
		
		codeArr.splice(2, 0, new DHStringWithHighlight( "&emsp; port&#40;", 1),
					   new DHStringWithHighlight("&emsp; &emsp; parameterName1: in std_logic_vector(0 downto 0);", 1),
					   new DHStringWithHighlight("&emsp; &emsp; returnName1: out std_logic_vector(0 downto 0)", 1),
					   new DHStringWithHighlight("&emsp;&#41;;", 1));
		
		header = "Adding Parameters";
		comment = "In order for you entity to be useful, it must be able to take in different arguments and give out a result";
		slideshow.appendSlide(codeArr, header, comment);
		
		lightOff(codeArr, [3,4]);
		
		comment = "You must declare your parameters in between the parenthesis after the word port";
		slideshow.appendSlide(codeArr, header, comment);
		
		header = "parameter types";
		comment = "Every parameter can have 3 directions: in, out, and inout<br><br>";
		comment += "what does \"in\" mean? It means we expect it to be an input.  Outsiders are expected to insert a value into the entity's \"in\" port.  However, inside the entity, we may read the port but not change it<br><br>";
		comment += "what does \"out\" mean? It means we expect it to be an output.   Outsiders are expected to read the value of an entity's \"out\" port.  It is like a return value.  However, inside the entity, we may set the port but not read from it";
		lightOff(codeArr, [2,5]);
		lightOn(codeArr, [3,4]);
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
		
		lightOff(codeArr, [3,4]);
		
		codeArr.splice(10, 0, new DHStringWithHighlight("&emsp; &emsp; returnName1 &lt;&#61; parameterName1;", 1));
		
		header = "Assigning values";
		comment = "to assign a value we use \"&lt;&#61;\" which is also known as the signal assignment operator.  we are using the value of parameterName1 to set the value of returnName1";
		slideshow.appendSlide(codeArr, header, comment);
		
		lightOff(codeArr, [10]);
		
		header = "End of Lesson";
		comment = "read the Q and A below";
		slideshow.appendSlide(codeArr, header, comment);
		
		slideshow.goToSlide(0); //go to first slide by default
	};
	var vhdlLesson1_questions = function() {
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
	vhdlLesson1_slideshow();
	vhdlLesson1_questions();
	location.hash = "#"+globalLesson.id;
};

/*
 A snub
 May be removed in the near future
 */
function vhdlLesson2() { //needs completing
	globalLesson.innerHTML = null;
	location.hash = "#header";
	var vhdlLesson2_slideshow = function(){
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
	var vhdlLesson2_questions = function() {
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
	vhdlLesson2_slideshow();
	vhdlLesson2_questions();
	location.hash = "#"+globalLesson.id;
};

/*
 Created the 0th lesson of JavaScript.
 It focuses on the tools you can use to start writting and applying javaScript
 */
function javaScriptLesson0() {
	globalLesson.innerHTML = null;
	location.hash = "#header";
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "What do I need to get started?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "JavaScript is perhaps the easiest language to get started on.  The reason is simple, everyone has the tool to do it.  Since you are reading this, you are undoubtedly using a web browser of some sort.  The web browser is the tool that will compile your code and run it.  What is it running?  It is running a little file with an HTML extension.  So to wrap this up you need 3 things to start programming JavaScript:";
	});
	
	mk("ol",{class:"answer"}, globalLesson, function(b) {
		mk("li",{class:"answer"}, globalLesson, function(b) {
			b.innerHTML = "A web browser e.g. Chrome, Safari, or Internet Explorer";
		});
		mk("li",{class:"answer"}, globalLesson, function(b) {
			b.innerHTML = "Text Editor e.g. Notepad or TextEdit";
		});
		mk("li",{class:"answer"}, globalLesson, function(b) {
			b.innerHTML = "You and your trusty, computer";
		});
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "Wait.  The third one was two things!";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "Ok, you caught me.  The third one is basically a given.  So you essentially have two things you need.  But three is a magic number and I felt like stating the obvious.";
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "Ok, I have a Web browser.  After all, I wouldn't be able to be here if I didn't have one.  But what about that text editor thingy?  Are you talking about that black and white text thing that people don't use unless they don't have Word?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "Good question.  There are several text editors out there in existence.  A text editor is basically a tool that helps you write text in a file.  Duh, right?  Below are two text editors that I prefer to use and a third one that isn't really a text editor but does a great job at being one; Plus, its a fast way to make a website.";
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "Hold on! Website? I thought this was a JavaScript tutorial!  What does a web site have to do with anything?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "A lot actually.  Any web site you see on the web is HTML.  HTML5 to be more precise. It is the foundation that lets a whole lot of web tools do their fancy dance.  JavaScript is one of them.  JavaScript in particular is a very powerful device that can help you create simple stuff from writing text to the web page to making an HTML5 video game.";
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "What Text Editor is good for Windows?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "I prefer <a href=\"http://notepad-plus-plus.org\">NotePad++</a>. It offers syntax highlighting to help you see what you are writing and some auto-completion.  Once you have it downloaded, open NotePad++ and create a new file and save it as an HTML file.  Then open the file in your web browser.  Keep the text editor on the left half of screen and the web browser on the right side of the screen.  This is the set up that you should have before starting each tutorial";
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "What Text Editor is good for OSX?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "There are many editors out there like <a href=\"http://www.barebones.com/products/textwrangler/\">TextWrangler</a>, <a href=\"http://macromates.com\">TextMate</a>, TextEdit, or even Xcode.  I like to do my editing in Xcode, but that is just me.  You may have an easier time working with TextMate.  Regardless of which one you pick, open it up and create a file and save it as an HTML file.  Open that file with a web browser.  Keep the text editor on the left half of the screen and the web browser on the right side of the screen.  This is the set up that you should have before starting each tutorial.";
	});
	
	mk("h1",null, globalLesson, function(b) {
		b.innerHTML = "And what about that Text editor that isn't really a text editor?";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "It's called <a href=\"http://stypi.com\">Stypi</a> and it is a Real-Time Online Collab website.  It lets multiple people across the web see the same document and edit it at the same time.  Its just like Google Docs except it has more of a web focus.  If you click the link I offered it will generate a brand new page with a random unique name.  I recommend that you make an account so that you have more control over file management.  Make sure that you set the editor to be using HTML.  Anyways, the page that you get should be called \"code.stypy.com\" followed by the rest of the URL.  Open a new page and give it the same URL except you change \"code\" to \"render\".  The picture below illustrates how you should set up your windows at the start of each tutorial.";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		mk("a", {class:"image", href:"images/JSL0_exampleSetUp_big.png"}, b, function (b) {
			mk("img", {src:"images/JSL0_exampleSetUp.png"}, b, null);
		});
	});
	
	mk("h1", {class:"question"}, globalLesson, function(b) {
		b.innerHTML = "What was that hings you said about \"quickest way to make a web site?\"";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "Every HTML file you create on Stypi has a rendered version.  If you create a file called \"http://code.stypi.com/l337ju1ce\", you can share the rendered version by changing the code to render. i.e. \"http://render.stypi.com/l337ju1ce\".";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "The good news is that you get a website on the web without using an a webhosting website.  The bad news is that anyone on the net may edit that page.  For the purposes of these tutorials, that should be fine.";
	});
	
	mk("h1", {class:"question"}, globalLesson, function(b) {
		b.innerHTML = "Path vs URL";
	});
	
	mk("p", {class:"answer"}, globalLesson, function(b) {
		b.innerHTML = "Path implies that the file is on your computer.  URL implies that it is a file on someone elses computer.  When you go to a URL you are essentially looking at a file. That file exists in a directory, just like how the files in your computer exist in a directory.  The difference is whether it is local or remote.  When you access a website you will notice that they start with \"http://\" while a file you open in your web browser will start with \"file://\".";
	});
	location.hash = "#"+globalLesson.id;
};

/*
 Created the first lesson of javaScript
 */
function javaScriptLesson1() {
	globalLesson.innerHTML = null;
	location.hash = "#header";
	var javaScriptLesson1_slideshow = function() {
		makeSlideShowWithBlock(globalLesson, "Lesson 1 - Strings, Arrays & Math", function (codeArr,flush, codeArrSplice, setHeader, setComment, tag, codeArrAppend, mkdhsh, slideshowAppend, loff, lon, sp, codeComment) {
			
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			lon([0]);
			setHeader("first things first");
			setComment("This is the first tag that should be written in your HTML file.  It tells your browser that this document is written in html as opposed to something else.  The guys that created this prepared themselves in the event that the standard might change, so they made this tag to help future proof things. But HTML is the standard and no one else has tried and succeeded to dethrone it.");
			slideshowAppend();
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(tag("/html"));
			lon([1,2]);
			setHeader("where does it go");
			setComment("After we tell the browser that this is indeed an html file, we need to tell it where that html code is located.  It is located between the two html tags.");
			slideshowAppend();
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(sp(tag("head")));
			codeArrAppend(sp(tag("/head")));
			codeArrAppend(tag("/html"));
			lon([2,3]);
			setHeader("head first");
			setComment("Every body needs a head.  The head is the typical place to put scripts, styles, and other things that function under the hood.");
			slideshowAppend();
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(sp(tag("head")));
			codeArrAppend(sp(tag("/head")));
			codeArrAppend(sp(tag("body")));
			codeArrAppend(sp(tag("/body")));
			codeArrAppend(tag("/html"));
			lon([4,5]);
			setHeader("mind over body");
			setComment("The body is usually where a lot of the action happens.  But since we are talking about JavaScript, we won't be using html to add stuff in here.  We will use the power of javaScript to make things and make things happen");
			slideshowAppend();
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(sp(tag("head")));
			codeArrAppend(sp(sp(tag("meta charset=\"utf-8\""))));
			codeArrAppend(sp(sp(tag("script") +tag("/script"))));
			codeArrAppend(sp(tag("/head")));
			codeArrAppend(sp(tag("body")));
			codeArrAppend(sp(tag("/body")));
			codeArrAppend(tag("/html"));
			lon([3,4]);
			setHeader("meta and script");
			setComment("The meta tag is used to explicitly say that we should use utf-8 encoding.  The script tags will be the home of our javascript");
			slideshowAppend();
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(sp(tag("head")));
			codeArrAppend(sp(sp(tag("meta charset=\"utf-8\""))));
			codeArrAppend(sp(sp(tag("script"))));
			codeArrAppend(sp(sp("window.onload = function() {")));
			codeArrAppend(sp(sp("};")));
			codeArrAppend(sp(sp(tag("/script"))));
			codeArrAppend(sp(tag("/head")));
			codeArrAppend(sp(tag("body")));
			codeArrAppend(sp(tag("/body")));
			codeArrAppend(tag("/html"));
			lon([5,6]);
			setHeader("main function");
			setComment("The window.onload is a property that expects a function pointer or a function block.  When the browser is done parsing the html page, it will call window.onload as a function which will then perform the code you see to the right of the assignment operator all the way down to the right curly brace and semi-colon. <br><br> If you are familiar with C or C++ you would call this the main function because it is the first function that gets run");
			slideshowAppend();
			
			//
			flush();
			codeArrAppend(tag("!doctype html"));
			codeArrAppend(tag("html"));
			codeArrAppend(sp(tag("head")));
			codeArrAppend(sp(sp(tag("meta charset=\"utf-8\""))));
			codeArrAppend(sp(sp(tag("script"))));
			codeArrAppend(sp(sp("window.onload = function() {")));
			codeArrAppend(sp(sp(sp(codeComment("//you can write things to the webpage directly")))));
			codeArrAppend(sp(sp(sp("document.write(\"Hello World\");"))));
			codeArrAppend(sp(sp(sp("document.write(\"This is how I can write on the page\");"))));
			codeArrAppend(sp(sp(sp("document.write(\"I call it the wall\");"))));
			codeArrAppend(sp(sp(sp("document.write(\"walls are fun to write on\");"))));
			codeArrAppend(sp(sp(sp("document.write(\"is that it?\");"))));
			codeArrAppend(sp(sp(sp("document.write(\"ok, bored... lets do something else\");"))));
			codeArrAppend(sp(sp("};")));
			codeArrAppend(sp(sp(tag("/script"))));
			codeArrAppend(sp(tag("/head")));
			codeArrAppend(sp(tag("body")));
			codeArrAppend(sp(tag("/body")));
			codeArrAppend(tag("/html"));
			lon([7,8,9,10,11,12]);
			setHeader("write to console");
			setComment("The document.write() function lets you write words and html to the web brower page.  The things between the two double quotes is called a string constant.  A string constant will be printed on the web browser page.");
			slideshowAppend();
			//
			codeArrSplice(6, 7, [
								 sp(sp(sp(codeComment("//one line break")))),
								 sp(sp(sp("document.write(\"" + tag("br") + "\");"))),
								 sp(sp(sp(codeComment("//two line breaks")))),
								 sp(sp(sp("document.write(\"" + tag("br") + tag("br") + "\");")))
								 ]);
			lon([7,9]);
			setHeader("Claustrophobic");
			setComment("If you tested the code in the previous slide, you may have noticed that the words all continued on to the right.  You might have had to scroll all the way to the right to see all of it.  Or if your browser is good it would end up wrapping.  This may or may not be what you are aiming for.  But my personal preference is to make things more readable, so we should add line breaks");
			slideshowAppend();
			
			codeArrSplice(6, 4, [
								 sp(sp(sp("document.write(\"Hello World"+ tag("br") + "\");" ))),
								 sp(sp(sp("document.write(\"This is how I can write on the page"+ tag("br") + "\");" ))),
								 sp(sp(sp("document.write(\"I call it the wall"+ tag("br") + "\");" ))),
								 sp(sp(sp("document.write(\"walls are fun to write on"+ tag("br") + "\");"))),
								 sp(sp(sp("document.write(\"is that it?"+ tag("br") + "\");"))),
								 sp(sp(sp("document.write(\"ok, bored... lets do something else"+ tag("br") + "\");")))
								 ]);
			lon([6,7,8,9,10,11]);
			setHeader("much better");
			setComment("This is the same as two slides ago.  But we have added line breaks so that it will write words on the line below it.");
			slideshowAppend();
			//
			codeArrSplice(6, 6, [
								 sp(sp(sp("document.write(12345 + \"&lt;br&gt;\");" ))),
								 sp(sp(sp("document.write(3.14156789 + \"&lt;br&gt;\");" ))),
								 ]);
			lon([6,7]);
			setHeader("What can you do besides strings?");
			setComment("You can print numbers.  Javascript is a typeless system, so if you give it a string or a number, the compiler will convert it to something more appropriate.  When you use document.write() it is turning that number into the string version so that it can be displayed properly.<BR><BR>The first one prints the string version of an integer and the second one prints a string version of a floating point number.");
			slideshowAppend();
			//
			codeArrSplice(6, 2, [
								 sp(sp(sp("document.write(1+2+ \"&lt;br&gt;\");" + codeComment("//adding.  Will print 3")))),
								 sp(sp(sp("document.write(777-1+ \"&lt;br&gt;\");" + codeComment("//subtracting.  Will print 776")))),
								 sp(sp(sp("document.write(10 * 5+ \"&lt;br&gt;\");" + codeComment("//multiplication. Will print 50")))),
								 sp(sp(sp("document.write(50 / 2+ \"&lt;br&gt;\");" + codeComment("//division. Will print 25")))),
								 ]);
			lon([6,7,8,9]);
			setHeader("Can we do Math?");
			setComment("Arithmetic operations are built in to the language.  Addition, Subtraction, Multiplication, and Division are some of the built-in math functions.");
			slideshowAppend();
			//
			codeArrSplice(6, 4, [
								 sp(sp(sp("var variable_name = \"This is a String\";"))),
								 sp(sp(sp("var variable_number123 = 25;"))),
								 sp(sp(sp("var str = \"Another string\";")))
								 ]);
			lon([6,7,8]);
			setHeader("Can store those values somewhere?");
			setComment("Introducing, variables.  To make a variable you must enter the \"var\" keyword followed by a variable name.  The variable name can be anything that starts with a letter from the alphabet.  It may not start with a number, however it can end with numbers.  You can name variables beginning with non-alphabetic characters, but I personally do not like them and prefer to stick with variable names with alphabetic characters.<BR><BR> The equal sign i.e. \"=\" is called an assignment operator.  The assignment operator takes the stuff to the right of it (up to by not including the semicolon) and saves that into the variable on the left. <BR><BR> Javascript is a very weakly type language so you don't have to tell it the variable type.  That kind of information assumed.  And most of the time it is correct.");
			slideshowAppend();
			//
			codeArrSplice(6, 3, [
								 sp(sp(sp(codeComment("// we can add strings together.")))),
								 sp(sp(sp("var name = \"Bob\";"))),
								 sp(sp(sp("var age = 37;"))),
								 sp(sp(sp("var profile = \"Name: \" + name + \"&lt;br&gt;\" + \"Age: \" + age + \"&lt;br&gt;\";"))),
								 sp(sp(sp(codeComment("//print the string")))),
								 sp(sp(sp("document.write(profile)")))
								 ]);
			lon([7,8,9,11]);
			setHeader("Adding strings?");
			setComment("When a string is added to a string, it concatenates it into one big string.  Pretend the plus symbols are pieces of tape and we are taping the string together.  When it is all connected a copy of that will be saved into the variable.<BR><BR>But wait, you can add a string to a number! In this particular case, the string has priority so the number will get transformed into a string version of the number and then it will get taped to the string");
			slideshowAppend();
			
			//
			codeArrSplice(6, 6, [
								 sp(sp(sp("var an_array_of_str = [\"this\", \"is\", \"an\", \"array\", \"of\", \"words\"];"))),
								 sp(sp(sp("document.write(\"word at index 0:\" + an_array_of_str[0] + \"&lt;br&gt;\");"))),
								 sp(sp(sp("document.write(\"word at index 3:\" + an_array_of_str[3] + \"&lt;br&gt;\");"))),
								 sp(sp(sp("document.write(\"word at the end:\" + an_array_of_str[an_array_of_str.length-1] + \"&lt;br&gt;\");"))),
								 sp(sp(sp("document.write(\"&lt;br&gt;\");"))),
								 sp(sp(sp("var an_array_of_num =[1, 5, 7, 9, 3];"))),
								 sp(sp(sp("document.write(\"number at index 0:\" + an_array_of_str[0] + \"&lt;br&gt;\");"))),
								 sp(sp(sp("document.write(\"number at index 4:\" + an_array_of_str[4] + \"&lt;br&gt;\");")))
								 ]);
			lon([7,8,9,11]);
			setHeader("Ok, Strings and Numbers are Cool.  Anything else?");
			setComment("There is anther basic data type called an array.  An array is a set of contiguous data that can be access by offering an index.  You can think of an array as a book with sheets of paper as pages.  Each page is numbered.  If you send the array name then you're sending you the book.  But if I give you the book and the page number then you will be able to see what is on that page.  We usually call that page number the index of an array.  The first element of the array is always 0.  The second index is 1.  the third index is 2 and so on and so forth.");
			slideshowAppend();
		});
	};
	var javaScriptLesson1_questions = function() {
		mk("h1",{class:"question"}, globalLesson, function(b) {
			b.innerHTML = "Whats a document?";
		});
		mk("p", {class:"answer"}, globalLesson, function(b) {
			b.innerHTML = "You might have noticed that we use a lot of document.write in this tutorial.  A document is a data structure that holds on to every html element and allows you to manipulate it.  The stuff in the document is what you end up seeing when you open up the web page.  Right now we are just sending plain text into the document and as a result we get...plain text in our web page.  So the words you are seeing in here is a paragraph object and somewhere in the document there is a &lt;p&gt; with this lump of text followed by a &lt;/p&gt;";
		});
		mk("h1", {class:"question"}, globalLesson, function(b){
			b.innerHTML = "What do you mean, when you say \"that information is assumed?\"";
		});
		mk("p", {class:"answer"}, globalLesson, function(b){
			b.innerHTML = "If the object on the right is  a string, then the variable is a string."
			b.innerHTML += "<br><br>";
			b.innerHTML += "If the object is a number, then the variable is a number.";
			b.innerHTML += "<br><br>";
			b.innerHTML += "But what happens when you combine different object together?  If you were to add a string to a number, the number would get converted into a string.  If you were to add two numbers, it would stay as numbers.";
		});
		mk("h1", {class:"question"}, globalLesson, function(b){
			b.innerHTML = "What if I want the string converted to a number?";
		});
		mk("p", {class:"answer"}, globalLesson, function(b){
			b.innerHTML = "You can use parseFloat() or parseInt().";
			b.innerHTML += "<br><br>";
			b.innerHTML += "parseFloat(\"1.23\") will give us number 1.23";
			b.innerHTML += "";
			b.innerHTML += "parseInt(\"1729\") will give us number 1729";
			b.innerHTML += "<br><br>";
			b.innerHTML += "therefore...";
			b.innerHTML += "<br><br>";
			b.innerHTML += "var foo = \"9\" + 9; //gives us \"99\"";
			b.innerHTML += "var bar = parseFloat(\"9\") + 9; //gives us 18";
		});
		mk("h1", {class:"question"}, globalLesson, function(b){
			b.innerHTML = "Why do arrays start at 0?";
		});
		mk("p", {class:"answer"}, globalLesson, function(b){
			b.innerHTML = "When you want to view the first element in the array, you do something like this:";
			b.innerHTML = "<br><br>";
			b.innerHTML = "array[0];";
			b.innerHTML = "<br><br>";
			b.innerHTML = "But why?  That number is the offset from the beginning of the array.  If the offset is 0 then we are looking at the very beginning.  If the offset is 5 then we are looking 5 elements below the initial element.";
		});
	};
	javaScriptLesson1_slideshow();
	javaScriptLesson1_questions();
	location.hash = "#"+globalLesson.id;
};

/**
 A convenience function that will produce a slide show object and offers a block
 which will give you access to common variables and convenience functions
 
 @param parent a reference to the object that the slide show will be made inside of
 @param slideTitle a string that will set the slide title
 @param block a multi-parameter block that provides common variables and convenience functions. The following parameters refer to the block's parameters
 
 @param codeArr an array of DHStringWithHighlight objects
 @param flush a block that will set the codeArr to empty array
 @param codeArrSplice a block that helps you splice. param(loc, deleteAmount, object_to_add,...);
 @param setHeader a block that lets you set the header of the comments. param string
 @param setComment a block that lets you set the comments. param string
 @param tag a block that returns a string prepended and postpended with angle brackets around a middle string. param string.
 @param codeArrAppend a block that appends to the array one DHStringWithHighlight object. param str param isLit
 @param mkdhsh a block that creates a DHStringWithHighlight
 @param slideshowAppend a block that adds the codeArr, header, and comments to the slide show
 @param loff a block that lets to turn off certain rows. param
 @param lon a block that lets you turn on certain rows.
 @param sp a block that prepends string with a tab eg &emsp;
 @param codeComment a block that takes a string parameter and wraps it in span code with a class called "comment"
 @code
 
 @endcode
 */
function makeSlideShowWithBlock(parent, slideTitle, block) {
	var slideshow = new DHSlideShow();
	slideshow.init(parent.id, slideTitle);
	var codeArr = [];
	var header = "";
	var comment = ""
	
	var tag = function(str) {
		return "&lt;" + str + "&gt;";
	};
	var codeArrAppend = function(str, isLit){
		codeArr.push(new DHStringWithHighlight(str,isLit));
	};
	var mkdhsh = function(str, isLit) {
		return new DHStringWithHighlight(str,isLit)
	};
	var slideshowAppend = function () {
		slideshow.appendSlide(codeArr, header, comment);
	};
	var setHeader = function(str){
		header = str;
	};
	var setComment = function(str){
		comment = str;
	};
	var loff = function(arr) {
		lightOff(codeArr, arr);
	};
	var lon = function(arr){
		lightOn(codeArr, arr);
	};
	
	var codeArrSplice = function(loc, delAmt, arr) {
		codeArr.splice(loc, delAmt);
		for (var i = 0; i < arr.length; ++i) {
			codeArr.splice(loc+i, 0, mkdhsh(arr[i]));
		}
	};
	var flush = function() {
		codeArr = [];
	}
	var sp = function(str){
		return "&emsp; " + str;
	}
	var codeComment = function(str) {
		return "<span class=\"comment\">" + str + "</span>";
	};
	//call block function
	block(codeArr, flush, codeArrSplice, setHeader, setComment, tag, codeArrAppend, mkdhsh, slideshowAppend, loff, lon, sp, codeComment);
	
	//move to default slide
	slideshow.goToSlide(0);
};

