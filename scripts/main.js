const paint = (function () {

    const canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');

        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 10;
    getMousePos = (canvas, evt) => {
            let rect = canvas.getBoundingClientRect();
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top
            };
        }
    draw = (x,y) => {
        ctx.lineTo(x,y);
        ctx.stroke();
        console.log('ahoj')
    }
    handleMouse = () => {
        let isDrawing = false;
        canvas.addEventListener('mousedown', e => {
            isDrawing = true;
            ctx.beginPath();
        })
        canvas.addEventListener('mouseup', e => {
            isDrawing = false;
        })
        canvas.addEventListener('mousemove', e => {
            let pos = getMousePos(canvas,e);
            if (isDrawing) {

                draw(pos.x,pos.y);

            }
        })
    }

    return {
        handleMouse: handleMouse
    }
})()
paint.handleMouse();