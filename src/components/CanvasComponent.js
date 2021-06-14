function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}
class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
  
        var R1=120, R2=140, R3=90;
        var Ax=0, Ay=0;
        var Bx=R3, By=0;
        var Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
        var Cy=Math.sqrt(R2*R2-Cx*Cx);
  
        var Ox = canvas.width / 2 - Bx/2;
        var Oy = canvas.height / 2 + Cy/2;
  
        ctx.beginPath();
        ctx.moveTo(Ox+Ax, Oy-Ay);
        ctx.lineTo(Ox+Bx, Oy-By);
        ctx.lineTo(Ox+Cx, Oy-Cy);
        ctx.closePath();
        ctx.fillStyle="blue"; ctx.lineWidth=2;
        ctx.stroke(); ctx.fill();
    }
    render() {
         return (
             <canvas id="canvas" width={300} height={300}>Canvas not supported by this browser</canvas>
         );
    }
}

export default CanvasComponent;