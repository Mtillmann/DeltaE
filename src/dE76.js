'use strict';

/**
 * @class dE76
 * @classdesc
 * The CIE76 color difference algorithm: a simple euclidean distance calculation.
 * http://en.wikipedia.org/wiki/Color_difference#CIE76
 * @constructs dE76
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @example
 * var deltaE = new dE76(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */
function dE76(x1, x2) {
    this.x1 = x1;
    this.x2 = x2;
}

/**
 * Returns the dE76 value.
 * @method
 * @returns {number}
 */
dE76.prototype.getDeltaE = function() {
    var x1 = this.x1;
    var x2 = this.x2;
    
    return Math.sqrt(
        Math.pow(x2.L - x1.L, 2) +
        Math.pow(x2.A - x1.A, 2) +
        Math.pow(x2.B - x1.B, 2)
    );
};

export default dE76;