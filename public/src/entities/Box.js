/*
*/

define(function(require, exports, module) {
    let THREE = require("THREE");

    function Box() {
        THREE.Mesh.call(this);
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        return this;
    }
    Box.prototype = Object.create(THREE.Mesh.prototype);
    Box.prototype.constructor = Box;

    return Box;
});
