// select Canvas
const canvas = document.querySelector('#pong');
const ctx = canvas.getContext('2d');

// Game Objects *********
const net = 
{
    x: canvas.width / 2 - 1,
    y: 0,
    width: 2,
    height: 3,
    color: "#59CE8f"
}

// Draw Shapes & Text functions **********

function drawRect (x , y , w , h , color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x,y ,w,h);

}


function drawCircle (x , y , r , color)
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0, Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}

drawCircle(100,100,50,'white');

function drawText (text, x , y , color)
{
    ctx.fillStyle = color;
    ctx.font = '45px fantasy';
    ctx.fillText(text , x , y);

}
drawText("korsat x parmaga" , 200 , 300 , "#fff");

function drawNet()
{
    for( let i=0; i <= canvas.height; i+= 5){
        drawRect(net.x , net.y + i , net.width , net.height , net.color)
    }
}

// Rendraw Canvas *************

function render ()
{
    // clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, "#e8f9fd");

    // Draw the net
    drawNet();

}

// Game Init *******************

function game()
{
    render()    
}

// Loop
const FPS = 60 ;

setInterval(game , 1000/FPS);

