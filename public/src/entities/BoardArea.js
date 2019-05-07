/* Defines flat board area, colored by square (a la chessboard)
*/

define(function(require, exports, module) {
    let THREE = require("THREE");

    function BoardArea(nx, ny) {
        if (!nx) { nx = 10; }
        if (!ny) { ny = 10; }
        THREE.Mesh.call(this);
        this.geometry = new THREE.PlaneGeometry(nx, ny, nx, ny);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x223355,
            transparent: true,
            opacity: 0.5,
            side: THREE.SideDouble
        });
        return this;
    }
    BoardArea.prototype = Object.create(THREE.Mesh.prototype);
    BoardArea.prototype.constructor = BoardArea;

    return BoardArea;
});
