canvas = document.getElementById("myCanvas");


ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(240, 200, 40, 0 , 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(340, 200, 40, 0 , 2* Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(440, 200, 40, 0 , 2* Math.PI);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(285, 240, 40, 0 , 2* Math.PI);
ctx.stroke();




ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(385, 240, 40, 0 , 2* Math.PI);
ctx.stroke();


