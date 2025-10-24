// Minimal sigil animation
const canvas = document.getElementById('sigilCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 200; canvas.height = 200;
let t = 0;

function drawSigil(){
  ctx.clearRect(0,0,200,200);
  ctx.save(); ctx.translate(100,100);

  ctx.beginPath();
  ctx.arc(0,0,70+Math.sin(t/10)*5,0,Math.PI*2);
  ctx.strokeStyle = `rgba(90,50,255,${0.4+Math.sin(t/15)*0.2})`;
  ctx.lineWidth = 2; ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,40);
  ctx.bezierCurveTo(15,0,-15,0,0,-60);
  ctx.bezierCurveTo(10,-15,-10,-15,0,40);
  ctx.fillStyle = `rgba(80,100,255,${0.3+Math.sin(t/20)*0.4})`;
  ctx.fill();

  for(let i=0;i<3;i++){
    const a=t/30+i*Math.PI*2/3;
    const x=Math.cos(a)*80, y=Math.sin(a)*80;
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2);
    ctx.fillStyle="rgba(180,150,255,0.8)"; ctx.fill();
  }

  ctx.restore(); t++; requestAnimationFrame(drawSigil);
}
drawSigil();
