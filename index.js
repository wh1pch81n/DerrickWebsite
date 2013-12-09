function initContent(parent) {
	mkHTML("img", {
				 id:"profilePic",
				 src:"images/DerrickPic.png",
				 alt:"picture of Derrick Ho",
				 width:"300"
				 }, parent, null);
	
	mkHTML("h3", null, parent, function (currElement) {
				 currElement.innerHTML = "Biography";
				 });
	
	mkHTML("p", null, parent, function (currElement) {
				 currElement.innerHTML = "Derrick Ho is a UC Riverside graduate who earned his B.S. in Computer Engineering from the Department of Computer Science and Engineering.  His interests include iOS, Video Game Development, Computer Architecture, Embedded Systems, and OS";
				 });
	
	mkHTML("h3", null, parent, function (currElement) {
				 currElement.innerHTML = "Email:";
				 });
	
	mkHTML("p", null, parent, function (currElement) {
				 currElement.innerHTML = "dho006@ucr.edu";
				 });
	
	mkHTML("h3", null, parent, function (currElement) {
				 currElement.innerHTML = "The Catalyst";
				 });
};
