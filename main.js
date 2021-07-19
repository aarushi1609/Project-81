canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red" ;
ctx.lineWidth = 3;
ctx.rect(200, 200, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue" ;
ctx.lineWidth = 4;
ctx.arc(300, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black" ;
ctx.lineWidth = 4;
ctx.arc(400, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red" ;
ctx.lineWidth = 4;
ctx.arc(500, 270, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow" ;
ctx.lineWidth = 4;
ctx.arc(350, 320, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green" ;
ctx.lineWidth = 4;
ctx.arc(450, 320, 40, 0, 2 * Math.PI);
ctx.stroke();