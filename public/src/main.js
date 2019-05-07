/*
*/

require(["THREE", "OrbitControls", "entities/Box", "entities/BoardArea", "entities/Frame"], function(THREE, OrbitControls, Box, BoardArea, Frame) {
    function init() {
        /*
        */
        let w = window.innerWidth, h = window.innerHeight;
        window.scene = new THREE.Scene();
        window.camera = new THREE.PerspectiveCamera(45, w / h, 1e-1, 1e3);
            window.camera.up.set(0, 0, 1);
            window.camera.position.set(4, 2, 1);
        window.renderer = new THREE.WebGLRenderer();
            window.renderer.setSize(w, h);
            window.document.body.append(window.renderer.domElement);
        window.controls = new OrbitControls(window.camera, window.renderer.domElement);
        //window.socket = new WebSocket("wss://" + )
    }

    function populate() {
        /*
        */
        window.scene.add(new Box());
        window.scene.add(new BoardArea(100, 100));
        window.scene.add(new Frame());
    }

    function render() {
        /*
        */
        requestAnimationFrame(render);
        window.renderer.render(window.scene, window.camera);
    }

    function update() {
        /*
        */
        let cube = window.scene.children[0];
        cube.rotation.x += 1e-2
        cube.rotation.y += -2e-2;
    }

    (function() {
        init();
        populate();
        render();
        setInterval(update, 20);
    })();
});
