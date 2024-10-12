const canvas=document.getElementById('mycontainer');
const bubble2d=canvas.getContext('2d');
var circleClr='red';  
var afterhitColor='black';
var arrX=canvas.width-100;
var Movarr=false;

function drawCircle() {
    bubble2d.beginPath();
    bubble2d.arc(100,canvas.height/2, 50 ,0, Math.PI * 2);
    bubble2d.fillStyle = circleClr;
    bubble2d.fill();
    bubble2d.closePath();
}

function drawArrow() {
    bubble2d.beginPath();
    bubble2d.moveTo(arrX,canvas.height/2);
    bubble2d.lineTo(arrX+20,canvas.height/2-10);
    bubble2d.lineTo(arrX+ 20,canvas.height/2+ 10);
    bubble2d.closePath();
    bubble2d.fillStyle='black';
    bubble2d.fill();

    bubble2d.beginPath();
    bubble2d.moveTo(arrX+20,canvas.height/2);
    bubble2d.lineTo(arrX+60,canvas.height/2);
    bubble2d.lineWidth = 5;
    bubble2d.strokeStyle = 'black';
    bubble2d.stroke();
}

function draw() {
    bubble2d.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    drawArrow();
}

function hit()
{
    if (!Movarr)
    {
        Movarr =true;
    const interval=setInterval(() => {
        if (arrX>150)
        {
            arrX-=5;
            draw();
        }
        else if (arrX<=150 && arrX>=100)
        {  
            circleClr=afterhitColor;  
            draw();
            clearInterval(interval);
            Movarr=false;
        }
        else
        {
          clearInterval(interval);
          draw();
            Movarr=false;
            }
        },10);
    }
}

function reset() {
    arrX = canvas.width - 100;
    circleClr='red'; 
    draw();
}

draw();