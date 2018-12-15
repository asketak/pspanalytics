var dot=new Array();
var colors=new Array("#000000","#FF0000","#80FF00","#00FFFF","#808080","#FF8000","#408080","#8000FF","#CCCC00");
var now_color=1;
var size = 1;
$(function(){
	init();
	
	$("#changeSize").click(function(){
		if ($("#heights").val()!="" && $("#widths").val()!="")
		{
			$("#controlCanvas").attr("height",Math.abs($("#heights").val())*20+40);
			$("#controlCanvas").attr("width",Math.abs($("#widths").val())*20+40);

			init();
			var canvas = document.getElementById("controlCanvas"); 
			var context = canvas.getContext("2d");
			stage_info = canvas.getBoundingClientRect(); 

			for (var i=0;i<dot.length;i++)
			{
				cxt=context;
				cxt.fillStyle=colors[dot[i].c];
				cxt.beginPath();
				cxt.arc(dot[i].x,stage_info.bottom-dot[i].y-8,5,0,Math.PI*2,true);
				
				cxt.closePath();
				cxt.fill();
			}
		}
	});
	
	$("#getit").click(function(){
		var s="";
		for (var i=0;i<dot.length;i++)
		{
			s+=(dot[i].x-20)/20.0+", ";
			s+=(dot[i].y-20)/20.0;
			if ($("#cls").is(':checked'))
				s+=", "+dot[i].c

			if(i<dot.length-1) s+='\n';
		}
		$("#result").val(s);	  
	}	
	);
	
	$("#reset").click(function(){
		canvas = $('#controlCanvas')[0];
		canvas.width = canvas.width;
		dot=[];
		$("#result").val("");
		init();
	});
	
	$("#changeGrid").click(function(){
		size=$("#gridSize").val();
		init();
		var canvas = document.getElementById("controlCanvas"); 
		var context = canvas.getContext("2d");
		stage_info = canvas.getBoundingClientRect(); 
		
		for (var i=0;i<dot.length;i++)
		{
			cxt=context;
			cxt.fillStyle=colors[dot[i].c];
			cxt.beginPath();
			cxt.arc(dot[i].x,stage_info.bottom-dot[i].y-8,5,0,Math.PI*2,true);

			cxt.closePath();
			cxt.fill();
		}
	});	


	var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

	copy.addEventListener('click', function(event) {
		var copyTextarea = document.querySelector('.result');
		copyTextarea.select();

		try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		} catch (err) {
			console.log('Oops, unable to copy');
		}
	});

})

function changeColor(color)
{
	now_color=color;
	$("#c10").css('background-color', colors[color]);
	$("#c10").val(now_color+'');
}

function init() 
{
	var canvas = document.getElementById("controlCanvas"); 
	var context = canvas.getContext("2d"); 
	var canvasWidth=$(canvas).attr("width");
	
	var canvasHeight=$(canvas).attr("Height");
	var canvasWidthFloat=canvasWidth%20;
	var canvasHeightFloat=canvasHeight%20; 
	context.clearRect(0, 0, canvas.width, canvas.height);	
	canvas.onmousedown = function(event) {drawBegin(event);};

	function drawBegin(e) {

		stage_info = canvas.getBoundingClientRect();
		var X= (e.clientX-stage_info.left);
		var Y= (e.clientY-stage_info.top);
		var yy=(stage_info.bottom-e.clientY);
		if ($("#snapgrid").is(':checked')){
			X -= X % (size*20); 
			Y -= Y % (size*20); 
			yy -= yy % (size*20); 
			console.log("snapping")
			console.log(X)
			console.log(Y)

		}

		cxt=context;
		cxt.fillStyle=colors[now_color];
		cxt.beginPath();
		cxt.arc(X,Y,5,0,Math.PI*2,true);
		cxt.closePath();
		cxt.fill();
		dot[dot.length]={x:X,y:yy,c:now_color};
		//alert("Position:"+dot[dot.length-1].x+";Y:"+yy);
	}

	for ( var x = 20; x <canvasWidth-20; x += size * 20) { 
		context.moveTo(x, canvasHeightFloat); 
		context.lineTo(x, canvasHeight-20); 
	} 

	for ( var y = 20; y <canvasHeight-20; y += size * 20) { 
		context.moveTo(20, y+canvasHeightFloat); 
		context.lineTo(canvasWidth-20, y+canvasHeightFloat); 
	} 
	
	context.strokeStyle = "#ddd"; 
	context.stroke(); 
	context.beginPath(); 
	
	context.moveTo(20, canvasHeight-20); 
	context.lineTo(canvasWidth-20, canvasHeight-20); 
	context.moveTo(canvasWidth-35, canvasHeight-30); 
	context.lineTo(canvasWidth-20, canvasHeight-20); 
	context.lineTo(canvasWidth-35, canvasHeight-10); 
	//
	context.moveTo(20, canvasHeight-20); 
	context.lineTo(20, canvasHeightFloat); 
	context.moveTo(10, canvasHeightFloat+15); 
	context.lineTo(20, canvasHeightFloat); 
	context.lineTo(30, canvasHeightFloat+15);
	
	context.strokeStyle = "#000"; 
	context.stroke(); 
	var yvalue=0
	var yvalueMax=parseInt((canvasHeight-20)/20)
	//
	for(var x=20;x<canvasHeight;x+=20)
	{
		if(yvalue==yvalueMax)
			break;
		context.fillText(yvalue++,5,canvasHeight-x+3);//
	}
	//
	var xvalue=parseInt((canvasWidth-20)/20)-1
	for(var y=20;y<canvasWidth;y+=20)
	{
		if(xvalue==0)
			break;
		context.fillText(xvalue--,canvasWidth-y-canvasWidthFloat-3,canvasHeight-5);//
	}

}

