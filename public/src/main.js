/*
*/

require(["THREE"], function(THREE) {
    let w = window.innerWidth, h = window.innerHeight;
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, w / h, 1e-1, 1e3);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    window.document.body.append(renderer.domElement);

    function render() {
        /*
        */
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function update() {
        /*
        */
        let cube = scene.children[0];
        cube.rotation.x += 1e-2
        cube.rotation.y += -2e-2;
    }

    function populate() {
        /*
        */
        let g = new THREE.BoxGeometry(1, 1, 1);
        let m = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        scene.add(new THREE.Mesh(g, m));
        camera.position.z = 5;
    }

    (function() {
        populate();
        render();
        setInterval(update, 20);
    })();
});
