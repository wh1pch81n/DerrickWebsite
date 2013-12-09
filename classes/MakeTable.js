/*
generates a table in HTML.  The first row of the array is treated as table headers

@param tableID the id of the table
@param tableCaption the caption of the table
@param tableData2d the 2d array containing table elements

@return reference to the table object
*/

function makeTable(tableID, tableCaption, tableData2d) {
	return mk("table", {id:tableID}, null, function(p){
		mk("caption", null, p, function(p) {
			p.innerHTML = tableCaption;
		});
		for (var tr = 0; tr < tableData2d.length; ++tr) {
			mk("tr", null, p, function(p) {
				for(var td = 0; td < tableData2d[tr].length; ++td) {
					var ele = "th";
					if(tr) { ele = "td";}
					mk(ele, null, p, function(p) {
						p.innerHTML = tableData2d[tr][td];
					});
				}
			});
		}
	});
}