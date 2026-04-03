function drawGraph(data, color="#4caf50"){
  const canvas = document.getElementById("graphCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0,0,canvas.width,canvas.height);

  let max = Math.max(...data);
  let min = Math.min(...data);

  data.forEach((v,i)=>{
    let x = (i/(data.length-1))*canvas.width;
    let y = canvas.height - ((v-min)/(max-min))*canvas.height;

    if(i===0) ctx.moveTo(x,y);
    else ctx.lineTo(x,y);
  });

  ctx.strokeStyle=color;
  ctx.stroke();
}
