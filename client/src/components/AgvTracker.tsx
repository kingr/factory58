import React, { useRef, useEffect } from 'react';

const AgvTracker = ({title}:{title:string}) => {
    useEffect(() => {
        // shim layer with setTimeout fallback 
        window.requestAnimFrame = (function(){ 
          return  window.requestAnimationFrame     
        })(); 
        if (canvasRef.current) {
        
          var x = 0; 
        var y = 8; 

        const drawAvg = () => { 
            if (y === 0) {
              window.requestAnimFrame(drawAvg);   
            }
            window.requestAnimFrame(drawAvg); 
            const canvas : any = canvasRef.current;
            // const c : CanvasRenderingContext2D | null = canvas.getContext('2d');  
            const c : any = canvas.getContext('2d');  
            c?.clearRect(0,0,canvas.width,canvas.height); 
            c?.beginPath();
            c.strokeStyle = 'blue';
            c.moveTo(0,20);
            c.lineTo(95, 20);
            c.lineTo(95, 70);
            c.lineTo(200, 70);
            c.lineTo(200, 20);
            c.stroke();
            c.fillStyle = "tomato"; 
            c.fillRect(x,y,25,25); 
            
            if (x >= 185) {
              y--;
            } else if (x >= 0 && x <= 80) {
              x++;
            } else if (x >= 80 && y <= 55) {
              y++
            } else if (x > 80 && y > 55) {
              x++;
            }

            console.log(`x:${x} y:${y}`)
        } 

        // window.requestAnimFrame(drawAvg);      
      } 
    },[]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return <canvas ref={canvasRef} height={200} width={240} />;
};

export default AgvTracker;
