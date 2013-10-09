//(function(){
var problems=[{"title":"(*) Keyboard","statement":"If you have <code>int k<\/code> keyboards each with <code>int x<\/code> keys, how many keys do you have in total?<br \/><br \/><em>Learn more about arithmetic operators at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/373\/-1","defaultCode":"\/\/you do not need to declare k and x\n\/\/just use them in this println:\nprintln(???);"},{"title":"(%) Hot Dogs","statement":"Hot dogs that come in packs of 10. You buy (<code>int hotDogPacks<\/code>) packs. What's the remainder after you divide the number of hot dogs by 8 (The buns come in packs of 8)?<br \/><br \/><em>Learn more about arithmetic operators at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/374\/-1","defaultCode":"\/\/use int hotDogPacks\nprintln(???);"},{"title":"(+) Plural","statement":"You are given a <code>String word<\/code>. Make word plural by concatenating (adding) the character \"s\" to the end.<br \/><br \/><em>Learn more about concatenation at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/375\/-1","defaultCode":"\/\/use String word\nprintln(???);"},{"title":"(==) Gummy Bears","statement":"You have <code>int g<\/code> gummy bears to be divided evenly among <code>int p<\/code> people. Print whether it is possible to do this without any gummy bears left over (or splitting a bear). Your output should be true or false.<br \/><br \/><em>Learn more about boolean operators at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/376\/-1","defaultCode":"\/\/use int g and int p\nprintln(???);"},{"title":"(&&) Snow Chance","statement":"If it is raining and it is cold, chances are that it will snow. Use <code>boolean raining<\/code> and <code>boolean cold<\/code>, and print whether both are true.<br \/><br \/><em>Learn more about boolean operators at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/377\/-1","defaultCode":"\/\/use boolean raining and boolean cold\nprintln(???);"},{"title":"(||) Jacket","statement":"You will need to wear a jacket if it is raining OR it is cold. Use <code>boolean raining<\/code> and <code>boolean cold<\/code>, and print whether either is true.<br \/><br \/><em>Learn more about boolean operators at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/378\/-1","defaultCode":"\/\/use boolean raining and boolean cold\nprintln(???);"},{"title":"(if) Starcraft","statement":"In a game of Starcraft, the player with more supply is generally more likely to win. Player a has a supply of <code>int a<\/code> and Player b has a supply of <code>int b<\/code>. Println the character 'a' if Player a has more supply. Println 'b' if player b has more supply. If they're equal, println 'c'.<br \/><br \/><em>Learn more about if statements at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/variables<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/379\/-1","defaultCode":""},{"title":"(loop) Derp","statement":"Println the word \"Derp\" repeated <code>int n<\/code> times. (ex: if n=3, println(\"DerpDerpDerp\");) To concatenate Strings, use the '+' sign. For example, \"Derp\"+\"Derp\" becomes \"DerpDerp\".<br \/><br \/><em>Learn more about loops at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/380\/-1","defaultCode":""},{"title":"(loop) Sum of Squares","statement":"Calculate the sum of the squares of all numbers from <code>int n<\/code> to <code>int m<\/code>. For example, if n were 1 and m were 3, then you would print the result of 1*1+2*2+3*3, which would be 14.<br \/><br \/><em>Learn more about loops at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/381\/-1","defaultCode":""},{"title":"(loop) Bank Interest","statement":"You have <code>double money<\/code> dollars in a bank that gives 5 percent interest every year, for <code>int time<\/code> years. Print the amount of money you will have in the bank at the end of that time. For example, if time were 1, then you should print 105.0<br \/><br \/><em>Learn more about loops at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/382\/-1","defaultCode":""},{"title":"(loop) Prime Range","statement":"Print the sum of all prime numbers between <code>int a<\/code> and <code>int b<\/code> (inclusive).<br \/><br \/><em>Learn more about loops at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/383\/-1","defaultCode":""},{"title":"(loop) Prime Digits","statement":"For all prime numbers between <code>int a<\/code> and <code>int b<\/code> (inclusive), find the first one with the smallest sum of digits. <em>For example if a is 300 and b is 331, the prime numbers are 307, 311, 313, and 317. Of those, 307 has digits of sum 10, 311 adds to 5, 313 adds to 7 and 317 adds to 11. So the answer you would print is 311 . You can use the \"break\" keyword to end a loop early.<\/em> If there are no primes in the range set the out to -1.<br \/><br \/><em>Learn more about loops at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/384\/-1","defaultCode":""},{"title":"(array) Search","statement":"Given an <code>int[] x<\/code> and a <code>int search<\/code>, determine if search is in x. Print the first position you found search (the index). If you did not find it, print -1. <br \/><br \/><em>Learn more about arrays at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/385\/-1","defaultCode":""},{"title":"(array) Max-Min","statement":"Given an <code>int[] x<\/code> print the difference between the largest and the smallest number in the array.<br \/><br \/><em>Learn more about arrays at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/386\/-1","defaultCode":""},{"title":"(array) Array Mean","statement":"Given an <code>int[] x<\/code>, determine the average (mean) of the numbers and print the decimal result. Use a double, and be wary of integer division.<br \/><br \/><em>Learn more about arrays at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/loops<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/387\/-1","defaultCode":""},{"title":"(charAt) Ends in s\/S","statement":"You are given <code>String x<\/code>. Print true if x ends in either a lower case or upper case S, false otherwise. <em>You can get the first character from the string with the expression <code>x.charAt(0)<\/code>. Second character would be <code>x.charAt(1)<\/code> Use x.length()-1 in place of the number to get the last character. Remember characters are single quoted.<\/em><br \/><br \/><em>Learn more about strings at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/388\/-1","defaultCode":""},{"title":"(charAt) Balanced ()","statement":"You are given <code>String x<\/code> where every character is an open or close parenthesis. Print whether the parenthesis are balanced or not as a boolean. <em>For parenthesis to be balanced, there shoudl be an equal number of open and close parenthesis. Additionally, there should be equal or less close parenthesis than open parenthesis at every point.<\/em><br \/><br \/><em>Learn more about strings at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/389\/-1","defaultCode":""},{"title":"(charAt) Palindrome","statement":"You are given <code>String x<\/code>. Print true if x is the same spelled forwards as backwards, false otherwise. You do not need to handle upper\/lower case (Rar is not a palindrome for this problem, but rar is).<br \/><br \/><em>Learn more about strings at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/390\/-1","defaultCode":""},{"title":"(charAt) ROT13","statement":"ROT13 is the caesar cipher with a password of 13. Apply ROT13 to the <code>String x<\/code> (assume x is all lower case letters) and print the encrypted string. For example \"abc\"-&gt;\"nop\"<br \/><br \/><em>Learn more about strings at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/391\/-1","defaultCode":""},{"title":"(split) Reverse","statement":"Given a sentence like <code>String x = \"insanity is doing the same thing over and over and expecting different results\"<\/code>, reverse the words and print: <code>\"results different expecting and over and over thing same the doing is insanity\";<\/code>. You can treat \"hello,\" as a word. Be careful not to add a space before or after the sentence.<br \/><br \/><em>Learn more about strings at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/strings<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/392\/-1","defaultCode":""},{"title":"(func) addNumbers()","statement":"Assume someone has the following code:\n<pre class='brush: java; gutter: false;'>\nint x = addNumbers(5,6);\nprintln(x); \/\/this should output 11\n<\/pre>\n\t\t\tWrite the addNumbers function that will add its two integer arguments.<br \/><br \/><em>Learn more about functions at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/functions<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/393\/-1","defaultCode":"int addNumbers( ???? ) {\n\treturn ???? ;\n}"},{"title":"(func) reverse()","statement":"Unlike primitive variable types (int, boolean, float, double, ...), array <strong>references<\/strong> are passed into functions by value (instead of the values IN the array being passed by value). What it means is that if you modify the array in the function, it modifies the original array that was given to it. \n\t\t\t<br\/><br\/>\n\t\t\tAssume someone has the following code (such as in a processing void setup(){}):\n\t\t\t\n<pre class='brush: java; gutter: false;'>\nint[] x = {1,2,3,4,5};\nreverse(x);\n\/\/now x should be {5,4,3,2,1}\n<\/pre>\n\t\t\tWrite the function, reverse, with return type void.","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/394\/-1","defaultCode":"void reverse( ???? ) {\n\treturn ???? ;\n}"},{"title":"(list) hasDuplicates()","statement":"Create a a function that returns true if there are any duplicate numbers in the ArrayList x:\n<pre class='brush: java; gutter: false;'>\nboolean hasDuplicates(ArrayList&lt;Integer&gt; x) {\n}\n<\/pre>\nYou will probably use a loop within a loop to search if any two values are the same.<br \/><br \/><em>Learn more about lists at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/collections<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/395\/-1","defaultCode":"boolean hasDuplicates(ArrayList&lt;Integer&gt; x) {\n\n\treturn ???? ;\n}"},{"title":"(Map) Add up keys","statement":"You are passed a HashMap&lt;Integer, Integer&gt; x which contains pairs such as 6=&gt;42 113=&gt;5. Add up all the keys in the map (in this case 6 + 113 = 119). You should loop through all the keys in the following manner:\n<pre class='brush: java; gutter: false;'>\nfor(Integer key : x.keySet()) {\n  \/\/use key\n}\n<\/pre>\n<br \/><br \/><em>Learn more about maps at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/collections<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/396\/-1","defaultCode":"int sumKeys(HashMap&lt;Integer,Integer&gt; x) {\n}"},{"title":"(recurse) Combos","statement":"Write a recursive function that computes every combination of a sequence of characters. For each combination, you should run addAnswer(String result). For example, for the argument \"ABC\", you should run addAnswer(\"\") addAnswer(\"C\") addAnswer(\"B\") addAnswer(\"BC\") addAnswer(\"A\") addAnswer(\"AC\") addAnswer(\"AB\") addAnswer(\"ABC\"). You will need to write a help function in addition to this one. <em>Note: The grader will treat \"CBA\" as incorrect, so make sure to output letters in the right order. The grader does not care what order you print sets, just items within a set. Make sure to include the empty set (\"\") as an answer. You may write a helper function in addition to the answer function<\/em><br \/><br \/><em>Learn more about recursion and combinatorics at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/recursion<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/397\/-1","defaultCode":"void combos(String letters) {\n    \/\/run addAnswer in the helper function for each result rather than println\n}"},{"title":"(recurse) Variations","statement":"Write recursive function(s) that computes every variation of a fixed length. For example, if your argument was \"ABC\" and 2, then it would run addAnswer(\"AA\") addAnswer(\"AB\") addAnswer(\"AC\") addAnswer(\"BA\") addAnswer(\"BB\") addAnswer(\"BC\") addAnswer(\"CA\") addAnswer(\"CB\") addAnswer(\"CC\")<br \/><br \/><em>Learn more about recursion and combinatorics at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/recursion<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/398\/-1","defaultCode":"void variations(String letters, int length) {\n  \/\/run addAnswer in helper function\n}"},{"title":"(recurse) Permute","statement":"Write recursive function(s) that computes every permutation of a fixed length. For example, if your argument was \"ABC\" and 2, then it would run addAnswer(\"AB\") addAnswer(\"AC\") addAnswer(\"BA\") addAnswer(\"BC\") addAnswer(\"CA\") addAnswer(\"CB\")<br \/><br \/><em>Learn more about recursion and combinatorics at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/recursion<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/399\/-1","defaultCode":"void permutations(String letters, int length) {\n  \/\/run addAnswer in helper function\n}"},{"title":"(flood) Count Flood","statement":"You are given a two dimensional array of characters as an argument, such as the one commented below:\n<pre class='brush: java; gutter: false;'>\n\/\/##....###\n\/\/#...###..\n\/\/#.#..#..s\n\/\/####.#...\n\/\/##...####\n<\/pre>\nAs you can see, one of the positions is marked with a lower case 's', signifying the start position. Your function should return how many dots \".\" are reachable from the start position, assuming you can go up down right and left. Assume you cannot move onto a pound symbol \"#\", and assume you cannot move diagonally. You may find this testing code useful:\n<pre class='brush: java; gutter: false;'>\nString map = \"##....###!#...###..!#.#..#..s!####.#...!##...####\";\nString[] lines = map.split(\"!\");\nchar[][] grid = new char[lines.length][lines[0].length()];\nfor (int j=0;j&lt;grid.length;j++) for (int i=0;i&lt;grid[j].length;i++)\n\tgrid[j][i] = lines[j].charAt(i);\n\/\/..use grid\n<\/pre>\n<br \/><br \/><em>Learn more about recursion and combinatorics at the kittybyte textbook: http:\/\/www.kittybyte.com\/textbook\/recursion<\/em>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/400\/-1","defaultCode":"int countMap(char[][] grid) {\n\t\/\/get rows from grid.length\n\t\/\/get columns from grid[0].length\n\t\/\/search for the start position\n\t\/\/recursively count from that position\n}"},{"title":"(dijkstra) Dijkstra","statement":"You are given a graph with the following node class for a directed graph:\n<pre class='brush: java; gutter: false;'>\nclass Node implements Comparable&lt;Node&gt; {\n\tpublic int value;\n\tpublic Integer dist; \/\/null is infinity\n\tpublic Map&lt;Node,Integer&gt; neighbors = new HashMap&lt;Node,Integer&gt;();\n\tpublic int compareTo(Node other) {\n\t\tif(dist == null && other.dist == null) return 0;\n\t\telse if(other.dist == null) return -1;\n\t\telse if(this.dist == null) return 1;\n\t\telse return dist.compareTo(other.dist);\n\t}\n}\n<\/pre>\nWrite a function that finds the shortest path from one node to another. Return -1 if there is no path from the beginning to the end. The compareTo and Comparable above allow you to create a PriorityQueue generic on Node to keep track of the nodes.","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/401\/-1","defaultCode":"public int dijkstra(Node a, Node b) {\n}"},{"title":"(dijkstra) Diameter","statement":"The diameter of a graph is the longest shortest-path between any two nodes. In other words, you perform dijkstra for every pair of nodes and maximize. You are given a graph with the following node class for a directed graph:\n<pre class='brush: java; gutter: false;'>\nclass Node&lt;T&gt; {\n\tpublic T value;\n\tpublic Integer dist; \/\/null is infinity\n\tpublic Map&lt;Node&lt;T&gt; ,Integer&gt; neighbors = new HashMap&lt;Node&lt;T&gt; ,Integer&gt;();\n}\n<\/pre>\nWrite a function that finds the graph diameter. You will need to also include (probably a separate function) that performs dijkstra. This dijkstra function should create a priority queue in the following manner:\n<pre class='brush: java; gutter: false;'>\nPriorityQueue&lt;Node&lt;T&gt;&gt; pq = new PriorityQueue&lt;Node&lt;T&gt; &gt; (1, new Comparator&lt;Node&lt;T&gt;&gt;() {\n\tpublic int compare(Node&lt;T&gt; a, Node&lt;T&gt; b) {\n\t\tif(a.dist == null && b.dist == null) return 0;\n\t\telse if(b.dist == null) return -1;\n\t\telse if(a.dist == null) return 1;\n\t\telse return a.dist.compareTo(b.dist);\n\t}\n});\n<\/pre>","submitURL":"http:\/\/www.kapparate.com\/coder\/submit\/97\/402\/-1","defaultCode":"public &lt;T&gt; int diameter(ArrayList&lt;Node&lt;T&gt;&gt; graph) {\n}"}];

var Grader=function(inputFunction,submitURL){
	//Has this been touched?
	this.activated=false;
	//Variables for bounciness
	this.velocity=0;
	this.scale=0;
	//Variables for clicking
	this.clicked=0;
	this.clickedLerp=0;
	this.hover=0;
	this.hoverLerp=0;
	//Variables for loading
	this.loading=0;
	this.loadingLerp=0;
	this.loadPhase=0;
	this.loadVelocity=0;
	this.lastPush=false;
	//Variables for state
	this.currentOutput="Click to check";
	this.cases=[];
	this.currentCase=0;
	this.icon="check";
	this.background="gray";
	//Variables for text
	this.textSwap=0;
	this.casesVisible=0;
	this.casesVisibleLerp=0;
	//Flag as to whether the grader needs updating
	this.needsUpdate=false;
	this.fullUpdate=false;
	//Cross refrencing
	this.inputFunction=inputFunction;
	this.submitURL=submitURL;
	//Added variables
	this.successful=false;
	this.savedCode="";
	this.savedTime=0;
	this.startTime=null;
}
Grader.prototype={
	//Updates the output text of the bubble. If text==true, set text from object field and do not animate.
	updateText:function(text){
		if(text!=true&&text.length){
			this.currentOutput=text;
		}
		// Added line
		if(this!=graders[currentProblem]){return}
		if(text==true){
			this.element.find(".previousoutput").text("");
			this.element.find(".currentoutput").text(this.currentOutput);
		}
		else{
			this.element.find(".previousoutput").text(this.element.find(".currentoutput").text());
			this.element.find(".currentoutput").text(text);
			this.textSwap=1;
		}
	},
	//Updates the icon, with background and symbol.
	updateIcon:function(background,icon){
		if(icon){
			this.icon=icon;
		}
		if(background){
			this.background=background;
		}
		// Added line
		if(this!=graders[currentProblem]){return}
		this.element.find(".background").attr("fill",colorDef[this.background]);
		this.element.find(".symbol").attr("d",symbolDef[this.icon]);
	},
	//Updates the test cases
	updateCaseBar:function(){
		// Added line
		if(this!=graders[currentProblem]){return}
		var cases=this.element.find(".cases");
		cases.find(".case").remove();
		var start=0,current;
		for(var c=0;c<this.cases.length-1;c++){
			if(this.cases[c].color!=this.cases[c+1].color){
				current=(c+1)/this.cases.length;
				cases.append($("<li class=\"case\"></li>")
					.css("background-color",colorDef[this.cases[c].color])
					.css("width",100*(current-start)+"%"));
				start=current;
			}
		}
		if(this.cases.length>=1){
			cases.append($("<li class=\"case\"></li>")
				.css("background-color",colorDef[this.cases[this.cases.length-1].color])
				.css("width",100*(1-start)+"%"));
			this.element.find(".casesarrow").css("border-right-color",colorDef[this.cases[0].color]);
		}
		else{
			this.element.find(".casesarrow").css("border-right-color","inherit");
		}
	},
	//Updates the test case details
	updateCaseDetails:function(){
		// Added line
		if(this!=graders[currentProblem]){return}
		if(this.cases.length<=0){
			return;
		}
		this.element.find(".toparrow").css("left",100*((this.currentCase+0.5)/this.cases.length)+"%")
		var $details=this.element.find(".details"),caseDetails=this.cases[this.currentCase];
		$details.find(".caseName").text(caseDetails.name);
		$details.find(".caseDetails").text(caseDetails.details)
		$details.css("border-top-color",colorDef[caseDetails.color]);
		if("input" in caseDetails){
			$details.find(".caseInput").show()
			$details.find(".caseInput>pre").text(caseDetails.input);
		}
		else{
			$details.find(".caseInput").hide();
			$details.find(".caseInput>pre").text("");
		}
		if("output" in caseDetails){
			$details.find(".caseOutput").show()
			$details.find(".caseOutput>pre").text(caseDetails.output);
		}
		else{
			$details.find(".caseOutput").hide();
			$details.find(".caseOutput>pre").text("");
		}
		if("expected" in caseDetails){
			$details.find(".caseExpected").show()
			$details.find(".caseExpected>pre").text(caseDetails.expected);
		}
		else{
			$details.find(".caseExpected").hide();
			$details.find(".caseExpected>pre").text("");
		}
	},
	//Simulates bouncy motion by updating scale and velocity
	simulate:function(){
		this.scale+=this.velocity;
		this.velocity-=this.scale*0.1;
		this.velocity*=0.85;
		if(Math.abs(this.scale)<this.epsilon&&Math.abs(this.velocity)<this.epsilon){
			//Simulation has converged
			this.scale=0;
			this.velocity=0;
			return false;
		}
		//Simulation has not converged
		return true;
	},
	//Simulate spinback and rotation
	rotate:function(){
		this.loadPhase+=this.loadVelocity*2;
		this.loadVelocity=this.loadVelocity<1?Math.min(this.loadVelocity+0.05,1):Math.max(this.loadVelocity-0.05,1)
	},
	//Bind element to the grader. Called only once.
	bind:function(element){
		this.element=$(element);
		this.element[0].grader=this;
		this.element.find("svg").on({
			"mousedown":iconMouseDown,
			"mouseup":iconMouseUp,
			"mouseenter":iconMouseEnter,
			"mouseleave":iconMouseLeave
		})
		this.element.find(".results").on({
			"mouseenter":resultsMouseEnter,
			"mouseleave":resultsMouseLeave,
		})
		this.element.find(".cases").on({
			"mousemove":casesMouseMove
		})
		return this;
	},
	initialSpinback:3,//How much to kick back the spinner initially
	spinback:2,//How much to kick back the spinner per click
	impulse:0.2,//How much to bounce the grader per click
	epsilon:0.01,//A small number
	casesPeek:0.05,//The amount the test case bar will "peek" out when inactive
	duplicateDelay:500//How many milliseconds between button pushes to disregard
}
//Given returns a if r=0 and b if r=1 and intermediate values for non-integer r.
var lerp=function(a,b,r){
	return a*(1-r)+b*r;
}
//Returns a value of n such that min<n<max
var clamp=function(n,min,max){
	return Math.min(Math.max(n,min),max);
}
var colorDef={
	"green":"#00CC00",
	"yellow":"#EEEE00",
	"orange":"#FFAA00",
	"red":"#FF0000",
	"purple":"#AA00FF",
	"blue":"#0000FF",
	"gray":"#CCCCCC"
}
var symbolDef={
	"check":"M 70 30 l -35 35 l -15 -15",//Check
	"unequal":"M 25 35 l 40 0 M 25 55 l 40 0 M 35 65 l 20 -40",//Unequal
	"diamond":"M 45 20 L 70 45 L 45 70 L 20 45 Z",//Diamond
	"cross":"M 25 25 l 40 40 M 25 65 l 40 -40",//Cross
	"triangle":"M 45 20 L 20 60 L 70 60 Z",//Triangle
	"offline":"M 45 20 L 30 45 L 60 45 L 45 70"//Offline
}
var mouseUp=function(){
	for(var grader=0;grader<graders.length;grader++){
		var currentGrader=graders[grader];
		if(currentGrader.clicked!=0){
			currentGrader.velocity+=currentGrader.impulse;
			currentGrader.needsUpdate=true;
		}
		currentGrader.clicked=0;
	}
	requestGraderUpdate();
}
window.addEventListener("mouseup",mouseUp)
//Mouse down handler for each grader
var iconMouseDown=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	currentGrader.clicked=1;
	currentGrader.velocity-=currentGrader.impulse;
	requestGraderUpdate(currentGrader);
}
//Mouse up handler for each grader
var iconMouseUp=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	//Don't count button mashers
	if(currentGrader.clicked!=0&&(currentGrader.lastPush==false||((new Date()).valueOf()-currentGrader.lastPush)>currentGrader.duplicateDelay)){
		currentGrader.updateText("Checking...");
		if(currentGrader.loading==0){
			currentGrader.loading=1;
			currentGrader.casesVisible=0;
			currentGrader.clicked=0;
			currentGrader.velocity+=currentGrader.impulse;
			currentGrader.loadVelocity=-currentGrader.initialSpinback;
			requestGraderUpdate(currentGrader);
			checkProblem(currentGrader);
		}
		else{
			currentGrader.loadVelocity=clamp(currentGrader.loadVelocity-currentGrader.spinback,-4,-1);
		}
	}
	currentGrader.lastPush=(new Date()).valueOf();
}
var iconMouseEnter=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	currentGrader.hover=1;
	requestGraderUpdate(currentGrader);
}
var iconMouseLeave=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	currentGrader.hover=0;
	requestGraderUpdate(currentGrader);
}
var resultsMouseEnter=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	currentGrader.casesVisible=1;
	requestGraderUpdate(currentGrader);
}
var resultsMouseLeave=function(event){
	var currentGrader=$(event.target).closest(".grader")[0].grader;//graders[0]
	currentGrader.casesVisible=0;
	requestGraderUpdate(currentGrader);
}
var casesMouseMove=function(event){
	var $grader = $(event.target).closest(".grader");
	var currentGrader=$grader[0].grader;//graders[0]
	var fullWidth=$grader.find(".cases").innerWidth();
	var realOffset=event.pageX-$grader.find(".cases").offset().left;
	var calculatedCase=Math.round((currentGrader.cases.length-1)*clamp(realOffset/fullWidth,0,1));
	if(calculatedCase!=currentGrader.currentCase){
		currentGrader.currentCase=calculatedCase;
		currentGrader.updateCaseDetails();
	}
}
var checkProblem=function(grader){
        codebox_textarea.val(codebox.getSession().getValue());
	$.ajax({
		"url":grader.submitURL,
		"type":"POST",
		"data":{
			"code":grader.inputFunction()
		},
		"timeout":15000,
		"dataType":"JSON",
		"success":function(response){
			if(response){
				serverData(grader,response);
			}
			else{
				serverData(grader,{"status":"server","text":"Server did not reply","details":"The grading server did not reply with any information. Try again later. If that doesn't work, contact the systems administrator."});
			}
		},
		"error":function(jqXHR,textStatus,errorThrown){
			if(errorThrown){
				serverData(grader,{"status":"server"});
			}
			switch(textStatus){
				case "timeout":
					serverData(grader,{"status":"offline","text":"Server took too long","details":"The grading server is taking awfully long to reply. Check your internet connection."});
					break;
				case "abort":
					serverData(grader,{"status":"offline","text":"Request was cancelled","details":"The request has been cancelled. Check your internet connection."});
					break;
				case "parsererror":
					serverData(grader,{"status":"server","text":"Server gave malformed data","details":"The grading server gave malformed information. Contact the systems administrator."});
					break;
				case "error":
					serverData(grader,{"status":"offline","text":"Request failed","details":"The request failed to complete. Check your internet connection."});
					break;
				default:
					serverData(grader,{"status":"other"});
					break;
			}
		}
	})
	grader.inputFunction()
}
var switchToNextProblemTimer=0;
//Server data returned for this element
var serverData=function(grader,serverData){
	grader.loading=0;
	grader.cases=[];
	grader.currentCase=0;
	try{
		switch(serverData.status){
			case "correct":
			case "mismatch":
				switch(serverData.status){
					case "correct":
						grader.updateIcon("green","check")
						grader.updateText("All test cases pass. Good job!");
						//Added
						if(!grader.successful){
							clearTimeout(switchToNextProblemTimer);
							switchToNextProblemTimer=setTimeout(switchToNextProblem,1000,currentProblem);
							grader.savedTime+=graders[currentProblem].savedTime+=(new Date()).valueOf()-graders[currentProblem].startTime;
						}
						grader.successful=true;
						break;
					case "mismatch":
						grader.updateIcon("yellow","unequal")
						grader.updateText("Returned the wrong result");
						break;
				}
				for(var c=0;c<serverData.cases.length;c++){
					if(serverData.cases[c].success!="true"){
						//{color:"",caseName:"",caseDetail:"",caseInput:"",caseOutput:"",caseExpected:""}
						grader.cases.push({
							"color":"yellow",
							"name":"Test Case "+(c+1),
							"details":"The output received from the submission does not match the correct output. Please correct the submission and re-check.",
							"input":serverData.cases[c].input,
							"expected":serverData.cases[c].expected,
							"output":serverData.cases[c].output
						});
					}
				}
				for(var c=0;c<serverData.cases.length;c++){
					if(serverData.cases[c].success=="true"){
						//{color:"",caseName:"",caseDetail:"",caseInput:"",caseOutput:"",caseExpected:""}
						grader.cases.push({
							"color":"green",
							"name":"Test Case "+(c+1),
							"details":"The submission generated the correct output for this test case. Good job!",
							"input":serverData.cases[c].input,
							"output":serverData.cases[c].output
						});
					}
				}
				break;
			case "runtime":
				grader.updateIcon("orange","diamond")
				grader.updateText("Submission cannot run");
				grader.cases=[{
					"color":"orange",
					"name":"Runtime error",
					"details":"At line "+serverData.errorline+", the submission threw the exception:\n"+serverData.error
				}];
				break;
			case "compile":
				grader.updateIcon("red","cross")
				grader.updateText("Submission cannot compile");
				grader.cases=[{
					"color":"red",
					"name":"Compilation error",
					"details":"At line "+serverData.errorline+", the submission failed to compile with the error:\n"+serverData.error
				}];
				break;
			case "server":
				grader.updateIcon("purple","triangle")
				grader.updateText(serverData.text||"Server error");
				grader.cases=[{
					"color":"purple",
					"name":"Server error",
					"details":serverData.details||"The grading server is experiencing technical difficulties. Contact the systems administrator."
				}];
				break;
			case "offline":
				grader.updateIcon("blue","offline")
				grader.updateText(serverData.text||"You are offline");
				grader.cases=[{
					"color":"blue",
					"name":"Internet disconnected",
					"details":serverData.details||"The grading server cannot be reached. Check your internet connection."
				}];
				break;
			default:
				grader.updateIcon("purple","triangle")
				grader.updateText(serverData.text||"Unknown error");
				grader.cases=[{
					"color":"purple",
					"name":"Unknown error",
					"details":serverData.details||"Unknown error. Try refreshing the page. If that doesn't work, contact the systems administrator."
				}];
		}
	}
	catch(error){
		grader.updateIcon("purple","triangle")
		grader.updateText("Grader error");
		grader.cases=[{
			"color":"purple",
			"name":"Grader error",
			"details":"The grading program is experiencing difficulties. Try refreshing the page. \nSpecifically: "+error
		}];
	}
	grader.updateCaseBar();
	grader.updateCaseDetails();
	grader.activated=true;
	grader.velocity-=2*grader.impulse;
	requestGraderUpdate(grader);
	//Added line
	updateProblemSwitcher();
}
graderUpdating=false;
//Starts the grader update loop if not already started.
var requestGraderUpdate=function(grader){
	if(grader){
		grader.needsUpdate=true;
	}
	if(!graderUpdating){
		graderUpdating=true;
		graderUpdate();
	}
}
//Helper function to lerp a variable and report if it needs further updating
var lerpUpdate=function(grader,variable,target,rate){
	if(grader[variable]==target){
		return false;
	}
	//Snap the lerped value to an iteger if it differs less than epsilon
	else if(Math.abs(grader[variable]-target)<grader.epsilon){
		grader[variable] = target;
		return true;
	}
	else{
		grader[variable] = lerp(grader[variable],target,rate);
		grader.needsUpdate=true;
		return true;
	}
}
//Fully updates a grader.
var fullUpdate=function(grader){
	grader.fullUpdate=true;
	grader.updateText(true);
	grader.updateIcon();
	grader.updateCaseBar();
	grader.updateCaseDetails();
	requestGraderUpdate(grader);
}
//Update each grader
var raf=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.requestAnimationFrame;
var graderUpdate=function(){
	var needsNextUpdate=false;
	for(var grader=0;grader<graders.length;grader++){
		//Added line:
		if(grader!=currentProblem){continue;}

		var currentGrader=graders[grader];
		if(currentGrader.needsUpdate){
			currentGrader.needsUpdate=false;
			var loadingLerpUpdate=lerpUpdate(currentGrader,"loadingLerp",currentGrader.loading,0.25)
			//Smooth show/hide the cases
			if(currentGrader.fullUpdate||lerpUpdate(currentGrader,"casesVisibleLerp",currentGrader.activated&&!currentGrader.loading?currentGrader.casesVisible:0,0.1)||loadingLerpUpdate){
				currentGrader.element.find(".cases").css("height",100*lerp(lerp(currentGrader.casesPeek,1,currentGrader.casesVisibleLerp),0,currentGrader.activated?currentGrader.loadingLerp:1)+"%");
				currentGrader.element.find(".details").css("opacity",currentGrader.casesVisibleLerp)
					.css("display",currentGrader.casesVisibleLerp==0?"none":"inherit");
				currentGrader.element.find(".toparrow,.casesarrow").css("opacity",currentGrader.casesVisibleLerp);
			};
			//Text swapping
			if(currentGrader.fullUpdate||lerpUpdate(currentGrader,"textSwap",0,0.1)){
				currentGrader.element.find(".currentoutput").css("top",-40*currentGrader.textSwap+"px")
					.css("opacity",1-currentGrader.textSwap);
				currentGrader.element.find(".previousoutput").css("top",40*(1-currentGrader.textSwap)+"px")
					.css("opacity",currentGrader.textSwap);
				if(currentGrader.textSwap==0){
					currentGrader.element.find(".previousoutput").text("");
				}
			}
			//Spin the spinner and scale it, if necessary
			if(currentGrader.fullUpdate||loadingLerpUpdate||currentGrader.loading==1){
				currentGrader.rotate();
				currentGrader.needsUpdate=true;
				var calculatedLoadingScale = currentGrader.loadingLerp;
				currentGrader.element.find(".spinner").attr("transform","matrix("+calculatedLoadingScale+",0,0,"+calculatedLoadingScale+","+45*(1-calculatedLoadingScale)+","+45*(1-calculatedLoadingScale)+") rotate("+currentGrader.loadPhase+",45,45)")
			}
			//Bounce the thing
			var scaleChanged=currentGrader.simulate();
			if(scaleChanged){
				currentGrader.needsUpdate=true;
			}
			//Smooth the clicks
			scaleChanged=lerpUpdate(currentGrader,"clickedLerp",currentGrader.clicked,0.25)||scaleChanged;
			//Smooth the hover
			scaleChanged=lerpUpdate(currentGrader,"hoverLerp",currentGrader.hover,0.25)||scaleChanged;
			//Scale the thing
			if(currentGrader.fullUpdate||scaleChanged){
				var calculatedGraderScale = 1+0.05*currentGrader.hoverLerp-0.2*currentGrader.clickedLerp+currentGrader.scale*0.2;
				currentGrader.element.find(".icon").attr("transform","matrix("+calculatedGraderScale+",0,0,"+calculatedGraderScale+","+45*(1-calculatedGraderScale)+","+45*(1-calculatedGraderScale)+")");
			}
			//Skip the next update if nothing needs to be updated
			if(currentGrader.needsUpdate){
				needsNextUpdate=true;
			}
			currentGrader.fullUpdate=false;
		}
	}
	//Run again if things need further updating
	if(needsNextUpdate==true){
		if(raf){
			raf(graderUpdate);
		}
		else{
			setTimeout(graderUpdate,1000/60);
		}
	}
	else{
		graderUpdating=false;
	}
}
var graders=[];

//End of bubble code
var valueFromSubmissionArea=function(){return $("#submissionArea textarea").val()};
var graders=[];
var graderElement=$("#grader");
var problemSwitcher=$("#problemSwitcher");
var problemClick=function(event){
	switchToProblem(parseInt($(event.target).attr("data-problem")));
	hideProblemSwitcher();
}
for(var p=0;p<problems.length;p++){
	var newGrader=new Grader(valueFromSubmissionArea,problems[p].submitURL);
	newGrader.savedCode=(problems[p].defaultCode);
	newGrader.element=graderElement;
	graders.push(newGrader);
	problemSwitcher.append(
		$("<li class=\"problem\"></li>")
		.text(p+1+". "+problems[p].title)
		.attr("data-problem",p)
		.click(problemClick));
}
//Bind events
graderElement.find("svg").on({
	"mousedown":iconMouseDown,
	"mouseup":iconMouseUp,
	"mouseenter":iconMouseEnter,
	"mouseleave":iconMouseLeave
})
graderElement.find(".results").on({
	"mouseenter":resultsMouseEnter,
	"mouseleave":resultsMouseLeave,
})
graderElement.find(".cases").on({
	"mousemove":casesMouseMove
})

var currentProblem=null;
var switchToProblem=function(problemNumber){
	if(currentProblem==null||problemNumber!=currentProblem){
		if(currentProblem!=null){
			//Not the first time
			fullUpdate(graders[problemNumber]);
			//Save the code
			graders[currentProblem].savedCode=valueFromSubmissionArea();
			if(!graders[currentProblem].successful){
				graders[currentProblem].savedTime+=(new Date()).valueOf()-graders[currentProblem].startTime;
			}
		}
		currentProblem=problemNumber;
		graders[currentProblem].startTime=(new Date()).valueOf();
		//Load the code
		codebox.getSession().setValue(graders[currentProblem].savedCode);
		//Mark current as viewed
		graders[currentProblem].viewed=true;
		$("#grader")[0].grader=graders[problemNumber];
		$problem=$("#problemDescription");
		$problem.find(".problemName").text(currentProblem+1+". "+problems[currentProblem].title);
		if("input" in problems[currentProblem]){
			$problem.find(".problemInput").show()
			$problem.find(".problemInput>pre").text(problems[currentProblem].input);
		}
		else{
			$problem.find(".problemInput").hide();
			$problem.find(".problemInput>pre").text("");
		}
		if("output" in problems[currentProblem]){
			$problem.find(".problemOutput").show()
			$problem.find(".problemOutput>pre").text(problems[currentProblem].output);
		}
		else{
			$problem.find(".problemOutput").hide();
			$problem.find(".problemOutput>pre").text("");
		}
		$problem.find(".problemDetails").html(problems[currentProblem].statement);
		updateProblemSwitcher();
	}
}
var updateProblemSwitcher=function(){
	problemSwitcher.find("li").each(function(index){
		var borderColor="transparent";
		if(graders[index].successful){
			borderColor=colorDef["green"];
		}
		else if(graders[index].viewed){
			borderColor="#AAAAFF";
		}
		$(this).css("border-left-color",borderColor)
			.removeClass("active");
		if(index==currentProblem){
			$(this).addClass("active");
		}
	})
}
problemSwitcher.add("#problemDescription").mouseenter(function(){
	problemSwitcher.stop().animate({"right":"300px"},400,expoEaseOut)
})
.mouseleave(function(){hideProblemSwitcher()});
var hideProblemSwitcher=function(){
	problemSwitcher.stop().animate({"right":"5px"},400,expoEaseOut);
}
var expoEaseOut=function (x, t, b, c, d) { //http://gsgd.co.uk/sandbox/jquery/easing/
	return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
}
var switchToNextProblem=function(current){
	if(currentProblem==current){
		for (var p = 1; p < problems.length; p++) {
			var tryProblem=(p+currentProblem)%problems.length;
			if(!graders[tryProblem].successful){
				switchToProblem(tryProblem);
				return;
			}
		};
	}
}

//Timer
var timerElement = $("#timer");
var updateTimer = function(){
	if(currentProblem!=null&&graders[currentProblem].startTime!=null){
		var currentTime = graders[currentProblem].savedTime;
		if(!graders[currentProblem].successful){
			currentTime+=(new Date()).valueOf()-graders[currentProblem].startTime;
		}
		var minutes=Math.floor(currentTime/1000)%60;
		timerElement.text(Math.floor(currentTime/60000)+":"+(minutes<10?"0":"")+minutes+"."+Math.floor(currentTime%1000/100));
	}
	if(raf){
		raf(updateTimer);
	}
	else{
		setTimeout(updateTimer,1000/60);
	}
}
updateTimer();
// Prepare codebox
var codebox = ace.edit("codebox_ace");
var codebox_textarea = $('#codebox');
codebox.setTheme("ace/theme/eclipse");
codebox.setFontSize(20);
var JavaMode = ace.require("ace/mode/java").Mode;
codebox.getSession().setMode(new JavaMode());
codebox.setValue(codebox_textarea.innerHTML);
codebox.getSession().setValue(codebox_textarea.val());
codebox.getSession().on('change', function(){
	codebox_textarea.val(codebox.getSession().getValue());
});

switchToProblem(0)
//})();
