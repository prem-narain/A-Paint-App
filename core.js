        var copiedObject;
        var copiedObjects = new Array();
        var canvasScale = 1;
        var SCALE_FACTOR = 1.2;
        var canvas = new fabric.Canvas('canvas', {});
        var cnv1 = document.getElementById('canvas');

        function clearCanvas(cnv) {
            var ctx = cnv.getContext('2d'); // gets reference to canvas context
            ctx.clearRect(0, 0, cnv.width, cnv.height);
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function fill() {
            latitude=Math.floor(Math.random() * 426)
            return latitude;
             // body...  
        }
        function left() {
            lagitude=Math.floor(Math.random()*599)
            return lagitude;
             // body...  
        }
        var onSolidCircle = function() {
                canvas.add(new fabric.Circle({
                    radius: 30,
                    fill: getRandomColor(),
                    top:fill(),
                    left:left(),
                    hasBorders: false,
                    hasControls: false
                }));
                canvas.forEachObject(function(o) {
                    o.hasBorders = o.hasControls = false;
                });

                canvas.hoverCursor = 'pointer';

                function animate(e, dir) {
                    if (e.target) {
                        fabric.util.animate({
                            startValue: e.target.get('angle'),
                            endValue: e.target.get('angle') + (dir ? 10 : -10),
                            duration: 100,
                            onChange: function(value) {
                                e.target.setAngle(value);
                                canvas.renderAll();
                            },
                            onComplete: function() {
                                e.target.setCoords();
                            }
                        });
                        fabric.util.animate({
                            startValue: e.target.get('scaleX'),
                            endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
                            duration: 100,
                            onChange: function(value) {
                                e.target.scale(value);
                                canvas.renderAll();
                            },
                            onComplete: function() {
                                e.target.setCoords();
                            }
                        });
                    }
                }
                canvas.on('mouse:down', function(e) { animate(e, 1); });
                canvas.on('mouse:up', function(e) { animate(e, 0); });
                this.__canvases.push(canvas);

            }
            // bind event handler to clear button
        document.getElementById('clear').addEventListener('click', function() {
            clearCanvas(cnv1);
        }, false);


      