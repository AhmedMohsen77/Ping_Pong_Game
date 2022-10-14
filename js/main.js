// select Canvas
const canvas = document.querySelector('#pong');
const ctx = canvas.getContext('2d');

// Draw Shapes & Text functions **********

function drawRect (x , y , w , h , color)
{
    ctx.fillStyle = color;
    ctx.fillRect(x,y ,w,h);

}
drawRect( 0 , 0 , canvas.width , canvas.height , '#000');

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
