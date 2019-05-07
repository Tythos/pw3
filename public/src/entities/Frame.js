/*
*/

define(function(require, exports, module) {
    let THREE = require("THREE");

    function getLine(xyz0, xyz1, rgb) {
        let geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3(xyz0[0], xyz0[1], xyz0[2]),
            new THREE.Vector3(xyz1[0], xyz1[1], xyz1[2])
        );
        let material = new THREE.LineBasicMaterial({
            color: new THREE.Color(rgb[0], rgb[1], rgb[2])
        });
        return new THREE.Line(geometry, material);
    }

    function Frame() {
        THREE.Mesh.call(this);
        this.add(getLine([0, 0, 0], [1, 0, 0], [1, 0, 0]));
        this.add(getLine([0, 0, 0], [0, 1, 0], [0, 1, 0]));
        this.add(getLine([0, 0, 0], [0, 0, 1], [0, 0, 1]));
        return this;
    }
    Frame.prototype = Object.create(THREE.Mesh.prototype);
    Frame.prototype.constructor = Frame;

    return Frame;
});
