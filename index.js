function initContent(parent) {
	mk("img", {
		 id:"profilePic",
		 src:"images/DerrickPic.png",
		 alt:"picture of Derrick Ho",
		 width:"300"
		 }, parent, null);
	
	mk("h3", null, parent, function (currElement) {
		 currElement.innerHTML = "Biography";
		 });
	
	mk("p", null, parent, function (currElement) {
		 currElement.innerHTML = "Derrick Ho is a UC Riverside graduate who earned his B.S. in Computer Engineering from the Department of Computer Science and Engineering.  His interests include iOS, Video Game Development, Computer Architecture, Embedded Systems, and OS.";
		 });
	
	mk("h3", null, parent, function (currElement) {
		 currElement.innerHTML = "Email:";
		 });
	
	mk("p", null, parent, function (currElement) {
		 currElement.innerHTML = "dho006@ucr.edu";
		 });
	
	mk("h3", null, parent, function (b) {
		b.innerHTML = "My Technical Passions";
	});
	
	mk("p", null, parent, function(b) {
		 b.innerHTML = "I've always been a fan of seeing the big picture.  Computers have such a comprehensive nature to them, yet we can get by with knowing only a fraction of it. In my early days as a new computer science student, we spent most of our coding in command line programs which only work in terminal.  I was really curious about how the icon on my desktop could somehow launch after just double clicking it.  My curiosity led me to explore the many stages that computers go through to give us what we want.  It astounded me how a little transistor only capable of saying yes and no could be compiled into something as complex as a CPU!  But not just any CPU, but a CPU that can understand binary code and can therefore do more than its inventors even dreamed of.  Taking it even further, we have the language compilers, the OS, and the programs that run along side with it.  All of this is possible thanks to a little guy called a transistor.  You zoom out and see the larger picture; you see a computer capable of performing programmatic miracles; yet when you look at the smallest part, you see each little guy giving a vote.  Each one of those little decisions makes a big impact to the final product.";
	});
	
	mk("h3", null, parent, function (currElement) {
		currElement.innerHTML = "My Non-Technical Passions";
	});
	
	mk("p", null, parent, function (currElement) {
		currElement.innerHTML = "If you were to ask me in grade school if i'd like to grow up to be a teacher, I would say no. It brought to mind an image of a gray hair dude wielding a yard stick and forcing children to do hard and brain twisting questions. But now, my opinions have changed.  Teachers are essentially trainers who will help us build our minds just like we build our bodies.  The work is tough, but its benefits last a lifetime.  Teachers offer a lifetime of answers to all of our curious questions.  I find that I enjoy bestowing my knowledge to the people that care to ask.  To inform them of new things and to see them come to understanding has become a great joy in my life.  My dream is to be a professor by the time I am gray haired and wielding a yard stick.  The stick isn't a weapon, it is a pointer to the bright future my students can have if they follow its path towards knowledge.";
	});
};
