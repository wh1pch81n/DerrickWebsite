function initContent(parent) {
	var jobTitle = "iOS Intern";
	var jobCompany = "EVRST Inc";
	var jobDuration = "May 2013 - August 2013";
	var arrOfSummary =  [
	"Implemented the client side image filtering and selection feature that includes network operations, parsing data, storing data and displaying the content in a UICollectionView. Created an interface that changes to accommodate the selected Core Image Filter. Observed, identified and implemented a fix for truncating large pasted text into a character-limited text box.",
	"Performed pixel shifting and extinguished weird mutant shaped bugs"
	];
	var arrOfAdditionalNotes =  [
	" Command line git for Source Control management for commiting, merging, branching and bisecting",
															 
	" GitHub for code reviews",
															 
	" Developed iOS app in Xcode",
															 
	" Utilized NSOperationQueues by writing custom NSOperation subclasses to perform networking operations to fetch content from servers",
															 
	" Utilized CoreImage framework to implement image filters for the end user",
															 
	" Implemented UI using Interface Builder to display results of the CoreImage and NSOperation work listed above using UICollectionView",
															 
	" Fetched, Modified, and Saved client side data using Apple's Core Data",
															 
	" Filed, tracked and managed new features and bug tickets using Atlassian's Jira",
															 
	" Used Graylog's log management tool for verifying network activity for the test devices and individual users",
															 
	" Used Charles Web Debugging Proxy to test and verify network activity from the client side",
															 
	" Contributed daily to the scrum meeting",
															 
	" Used Gurock's Test Rail for Full Regression Testing",
															 
	" Used TestFlight for beta testing"
															 
	];
	
	var job = new JobDetail(
		jobTitle,
		jobCompany,
		jobDuration,
		arrOfSummary,
		arrOfAdditionalNotes
	);
	generateHTML(job, parent);
};

/**
Class Object that contains entries for a job
 
@param jobTitle the name of the job title
@param jobCompany the name of the company
@param jobDuration the duration
@param arrOfSummary an array of text about the job
@param arrOfAdditionalNotes an array of additional notes
*/
function JobDetail (jobTitle, jobCompany, jobDuration, arrOfSummary, arrOfAdditionalNotes) {
	this.jobTitleID = "jobTitle";
	this.jobCompanyID = "jobCompany";
	this.jobDurationID = "jobDuration";
	this.additionalNotesID = "additionalNotes";
	
	this.jobTitle = jobTitle;
	this.jobCompany = jobCompany;
	this.jobDuration = jobDuration;
	this.arrOfSummary = arrOfSummary;
	this.arrOfAdditionalNotes = arrOfAdditionalNotes;
	
};

/**
generate the HTML and attaches it to the parent
 
@param job the Job object that will be used to generate
@param parent the place the details will be placed into
*/

function generateHTML(job, parent) {
	mk("fieldset", null, parent, function(currElement) {
		mk("legend", {class:job.jobTitleID}, currElement, function(currElement) {
			currElement.innerHTML = job.jobTitle;
		});
		mk("dl", null, currElement, function(currElement) {
			mk("dt", null, currElement, function(currElement) {
				mk("span", {class:job.jobCompanyID}, currElement, function(currElement) {
					currElement.innerHTML = job.jobCompany;
				});
				mk("br", null,currElement,null);
				mk("span", {class:job.jobDurationID}, currElement, function(currElement) {
					currElement.innerHTML = job.jobDuration;
				});
			});
			mk("dd", null, currElement, function(currElement) {
				for(var i = 0; i < job.arrOfSummary.length; ++i) {
					mk("p", null, currElement, function(currElement) {
						currElement.innerHTML = job.arrOfSummary[i];
					});
				}
					 
				mk("ul", {class:job.additionalNotesID}, currElement, function(currElement) {
					mk("h4", null, currElement, function(currElement) {
						currElement.innerHTML = "[ Additional Notes ]";
					});
					for(var i = 0; i < job.arrOfAdditionalNotes.length; ++i) {
						mk("li", null, currElement, function(currElement) {
							currElement.innerHTML = job.arrOfAdditionalNotes[i];
						});
					}
				});		 
			});
		});
	});	
};