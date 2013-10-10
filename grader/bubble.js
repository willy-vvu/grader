//(function(){
String.prototype.hashCode = function(){// From http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0, l = this.length; i < l; i++) {
        char  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);// Modified from original
};
var newHash =function(){
	return (new Date()).valueOf().toString()+(Math.random()).toString().hashCode();
}
var userID= newHash();

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
	this.lastCheck=false;
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
	this.savedTime=null;
	this.startTime=null;
	this.eventHash=null;
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
	if(currentGrader.clicked!=0){
		checkProblem(currentGrader);
	}
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
	grader.loadVelocity=-grader.initialSpinback;
	grader.velocity+=grader.impulse;
	if(grader.lastCheck==false||((new Date()).valueOf()-grader.lastCheck)>grader.duplicateDelay){
		grader.lastCheck=(new Date()).valueOf();
		if(grader.loading==0){
			grader.updateText("Checking...");
			grader.loading=1;
			grader.casesVisible=0;
			grader.clicked=0;
			requestGraderUpdate(grader);
		}
		else{
			grader.loadVelocity=clamp(grader.loadVelocity-grader.spinback,-4,-1);
			return;
		}
	}
	else{
		return;
	}
	var code={
		"code":grader.inputFunction(),
	}
	if(currentProblem>0){
		$.extend(code,{
		"event":"endproblem",
		"problemID":grader.submitURL.split("/").slice(-2,-1)[0],
		"userID":userID,
		"eventHash":grader.eventHash
	})
	}
	$.ajax({
		"url":grader.submitURL,
		"type":"POST",
		"data":code,
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
						if(grader.savedTime==null){
							clearTimeout(switchToNextProblemTimer);
							switchToNextProblemTimer=setTimeout(switchToNextProblem,1500,currentProblem);
							graders[currentProblem].savedTime=(new Date()).valueOf()-graders[currentProblem].startTime;
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
var valueFromSubmissionArea=function(){return codebox.getSession().getValue()};
var setValueToSubmissionArea=function(value){return codebox.setValue(value)};

var graders=[];
var graderElement=$("#grader");
var problemSwitcher=$("#problemSwitcher");
var problemClick=function(event){
	switchToProblem(parseInt($(event.target).attr("data-problem")));
	hideProblemSwitcher();
}
var currentProblem=null;
var switchToProblem=function(problemNumber){
	if(currentProblem==null||problemNumber!=currentProblem){
		if(currentProblem!=null){
			//Not the first time
			//Save the code
			graders[currentProblem].savedCode=valueFromSubmissionArea();
		}
		currentProblem=problemNumber;
		fullUpdate(graders[currentProblem]);
		if(graders[currentProblem].startTime==null){
			graders[currentProblem].startTime=(new Date()).valueOf();
			graders[currentProblem].eventHash=newHash();
			if(currentProblem>0){
				$.ajax({
					"url":"http://www.kapparate.com/coder/event",
					"type":"POST",
					"data":{
						"event":"startproblem",
						"problemID":graders[currentProblem].submitURL.split("/").slice(-2,-1)[0],
						"userID":userID,
						"eventHash":graders[currentProblem].eventHash
					}
				})
			}
		}
		//Load the code
		setValueToSubmissionArea(graders[currentProblem].savedCode);
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
		if(window.demo){
			avgTime=currentProblem==0?0:Math.random()*Math.random()*120000+30000;
			var minutes=Math.floor(avgTime/1000)%60;
			timerElement.find(".avgTime").text(Math.floor(avgTime/60000)+":"+(minutes<10?"0":"")+minutes+"."+Math.floor(avgTime%1000/100)+" Average");
			done=0;
		}
	}
}
var avgTime=null;
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
problemSwitcher.parent().mouseenter(function(){
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

var done=0;
//Timer
var timerElement = $("#timer");
var updateTimer = function(){
	if(currentProblem!=null&&graders[currentProblem].startTime!=null){
		var currentTime;
		if(currentProblem>0){
			if(graders[currentProblem].savedTime==null){
				currentTime =(new Date()).valueOf()-graders[currentProblem].startTime;
			}
			else{
				currentTime = graders[currentProblem].savedTime;
			}
		}
		else{
			currentTime=0;
		}
		var minutes=Math.floor(currentTime/1000)%60;
		timerElement.find(".time").text(Math.floor(currentTime/60000)+":"+(minutes<10?"0":"")+minutes+"."+Math.floor(currentTime%1000/100));
		if(window.demo){
			if(currentProblem>0){
				done=clamp(currentTime/(avgTime*2),0,1);
				timerElement.find(".donebar").css("width",100*done+"%");
				timerElement.find(".percent").text(Math.round(100*done)+"% are done");
			}
			else{
				timerElement.find(".donebar").css("width","0%");
				timerElement.find(".percent").text("0% is done");
				if(avgTime==null){
					timerElement.find(".avgTime").text("0:00.0 Average")
				}
			}
		}
	}
	if(raf){
		raf(updateTimer);
	}
	else{
		setTimeout(updateTimer,1000/60);
	}
}
// Prepare codebox
var codebox = ace.edit("codebox_ace");
codebox.setTheme("ace/theme/eclipse");
codebox.setFontSize(20);
var JavaMode = ace.require("ace/mode/java").Mode;
codebox.getSession().setMode(new JavaMode());
var unescape = function(string){
	return string.replace(/&lt;/g,"<").replace(/&gt;/g,">");
}
var unescapeObject = function(object){
	for(var prop in object){
		if(typeof object[prop] == "string"){
			object[prop]=unescape(object[prop]);
		}
		else if(typeof object[prop] == "object"){
			unescapeObject(object[prop]);
		}
	}
	return object;
}
var problems=[];
var init=function(data){
problems=unescapeObject(data);
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
codebox.commands.addCommand({
  name: 'myCommand',
  bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
  exec: function(editor) {
        checkProblem(graders[currentProblem]);
    },

});
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
timerElement.mouseenter(function(){
	if(window.demo){
		timerElement.stop().animate({"height":"150px"},300,expoEaseOut)
	}
})
.mouseleave(function(){
	if(window.demo){
		timerElement.stop().animate({"height":"50px"},300,expoEaseOut);
	}
})

switchToProblem(0);
updateTimer();
}
$.ajax({
	"url":"http://www.kittybyte.com/coder/kittyproblems",
	"dataType":"JSON",
	"success":init
})

//})();
