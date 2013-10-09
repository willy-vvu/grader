[
	{
		"title":"Right Triangles",
		"statement":"Write a program ..etc...",
		"submitURI":"/coder/...",
		"defaultCode":"println(???)"
	}
]

POST query
to submitURI
?code=code goes here


Correct: All test cases pass.
Mismatch: A test case does not produce the expected result.
{
	"submitURI":"...",
	"cases":[
		{"input":"a=1, b=2","expected":"1","actual":"3","status":"correct"},
		{"input":"a=1, b=2","expected":"1","actual":"3","status":"mismatch"},
		//...
	]
}


// 
Runtime: The program fails on a test case.
Compile: The program fails to compile.
{
	"submitURI":"...",
	"status":"runtime"
}


// Client handled
Server: The server is experiencing issues. - 
Offline: The sumbission cannot be sent. - Cannot connect
Client handled.
$.ajax({
	"error":function(){
		etc.etc.
	}
})