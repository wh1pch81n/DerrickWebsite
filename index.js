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
		 currElement.innerHTML = "Derrick Ho is a UC Riverside graduate who earned his B.S. in Computer Engineering from the Department of Computer Science and Engineering.  His interests include iOS, Video Game Development, Computer Architecture, Embedded Systems, and OS";
		 });
	
	mk("h3", null, parent, function (currElement) {
		 currElement.innerHTML = "Email:";
		 });
	
	mk("p", null, parent, function (currElement) {
		 currElement.innerHTML = "dho006@ucr.edu";
		 });
	
	//mk("h3", null, parent, function (currElement) {
	//	 currElement.innerHTML = "The Catalyst";
	//	 });
};
