function initContent(parent) {
	var table_id = "skillsLanguageTable";
	var table_caption = "Languages";
	var tableData = [
					 ["Language Name", "Was Used In", "Competency"],
					 ["Objective-C", "<ul>\
					  <li>EVRST Inc.</li>\
					  <li>iOS Pong Game</li>\
					  <li>TellerCalc</li>\
					  <li>CodeEval</li>\
					  <li>Project Euler</li>\
					  </ul>", "5/5"],
					 ["HTML5, CSS, JavaScript", "<p>This site; Especially the tutorial section.</p>", "4/5"],
					 ["C", "<ul>\
					  <li>nand2tetris</li>\
					  <li>DDR Game</li>\
					  <li>FPGA Graphics</li>\
					  <li>CodeEval</li>\
					  </ul>", "5/5"],
					 ["C++", "<ul>\
					  <li>nand2tetris</li>\
					  <li>FPGA Graphics</li>\
					  <li>Saturn Dungeon Game</li>\
					  <li>CodeEval</li>\
					  </ul>", "4/5"],
					 ["Python", "<ul>\
					  <li>nand2tetris</li>\
					  <li>CodeEval</li>\
					  </ul>", "4/5"],
					 ["VHDL", "<ul>\
					  <li>nand2tetris</li>\
					  <li>FPGA Graphics</li>\
					  <li>VHDL L2 Cache</li>\
					  </ul>", "5/5"],
					 ["Verilog", "<p>FPGA Graphics</p>", "3/5"],
					 ];
	parent.appendChild(makeTable(table_id, table_caption, tableData));
};