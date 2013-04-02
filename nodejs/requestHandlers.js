var exec = require("child_process").exec;

function start(response) {
  console.log("Request handler 'start' was called.");
  exec("dir",
	  { timeout: 100000000, maxBuffer: 20000*1024 },
  function(error,stdout,stderr)
	{
  response.writeHead(200,{"Content-type":"text/plain;charset=gb2312"});
  //response.setContentType("text/html;charset=utf-8");
 // PrintWriter out = response.getWriter();
  response.write(stdout);
  response.write(stderr);
 // console.log(stderr);
 // console.log(stdout);
  response.end();
  }	  
  );
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
response.writeHead(200,{"Content-type":"text/plain"});
response.write("hello upload");
response.end();
}

exports.start = start;
exports.upload = upload;