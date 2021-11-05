<template>
  <div
    ref="matter"
    class="matter"
  />
</template>

<script>
import Matter from 'matter-js'
export default {
    mounted() {
        // module aliases
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Common = Matter.Common,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Composites = Matter.Composites,
            Composite = Matter.Composite;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        var render = Render.create({
            element: this.$refs.matter,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false
            }
        });

        // add bodies
        var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
            var sides = Math.round(Common.random(1, 8));

            // triangles can be a little unstable, so avoid until fixed
            sides = (sides === 3) ? 4 : sides;

            // round the edges of some bodies
            var chamfer = null;
            if (sides > 2 && Common.random() > 0.7) {
                chamfer = {
                    radius: 10
                };
            }

            // document.body.getPropertyValue('--color-font-general');

            switch (Math.round(Common.random(0, 1))) {
            case 0:
                if (Common.random() < 0.8) {
                    return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer: chamfer, render:{fillStyle: '#9146ff'} });
                } else {
                    return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer: chamfer, render:{fillStyle: '#FE7DB7'} });
                }
            case 1:
                return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer: chamfer, render:{fillStyle: 'white'} });
            }
        });

        Composite.add(engine.world, stack);

        // add walls
        Composite.add(engine.world, [
            // walls
            Bodies.rectangle(0, 0, window.innerWidth*2, 40, { isStatic: true, render:{fillStyle: '#000000' }}),
            Bodies.rectangle(0, window.innerHeight, window.innerWidth*2, 40, { isStatic: true, render:{fillStyle: '#000000' }}),
            Bodies.rectangle(0, 0, 40, window.innerHeight*2, { isStatic: true, render:{fillStyle: '#000000' }}),
            Bodies.rectangle(window.innerWidth, 0, 40, window.innerHeight*2, { isStatic: true, render:{fillStyle: '#000000' }})
        ]);

        // add mouse control
        var mouse = Mouse.create(render.canvas);
        var mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);
    },
}
</script>

<style>
.matter canvas{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
}
</style>