'use strict';

/**
 * @class dE94
 * @classdesc
 * The CIE94 algorithm: an iteration of the CIE76 algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @constructs dE94
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @example
 * var deltaE = new dE94(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */
function dE94(x1, x2, weights) {
    this.x1 = x1;
    this.x2 = x2;
    
    this.weights = weights || {};
    this.weights.lightness = this.weights.lightness || 1;
    this.weights.chroma = this.weights.chroma || 1;
    this.weights.hue = this.weights.hue || 1;
    
    if (1 === this.weights.lightness) {
        this.weights.K1 = 0.045;
        this.weights.K2 = 0.015;
    } else {
        this.weights.K1 = 0.048;
        this.weights.K2 = 0.014;
    }
}

/**
 * Returns the dE94 value.
 * @method
 * @returns {number}
 */
dE94.prototype.getDeltaE = function() {
    var x1 = this.x1;
    var x2 = this.x2;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    
    return sqrt(
        pow(this.calculateL(x1, x2), 2) +
        pow(this.calculateA(x1, x2), 2) +
        pow(this.calculateB(x1, x2), 2)
    );
};

/**
 * Calculates the lightness value.
 * @method
 * @returns {number}
 */
dE94.prototype.calculateL = function(x1, x2) {
    return (x1.L - x2.L) / this.weights.lightness;
};

/**
 * Calculates the chroma value.
 * @method
 * @returns {number}
 */
dE94.prototype.calculateA = function(x1, x2) {
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    
    //top
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var c2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2));
    var cab = c1 - c2;
    
    // bottom
    var sc = 1 + (this.weights.K1 * c1);
    
    return cab / (this.weights.chroma * sc);
};

/**
 * Calculates the hue value.
 * @method
 * @returns {number}
 */
dE94.prototype.calculateB = function(x1, x2) {
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    
    // cab
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var c2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2));
    var cab = c1 - c2;
    
    // top
    var a = x1.A - x2.A;
    var b = x1.B - x2.B;
    var hab = sqrt(
        pow(a, 2) +
        pow(b, 2) -
        pow(cab, 2)
    ) || 0;
    
    // bottom
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var sh = 1 + (this.weights.K2 * c1);
    
    return hab / sh;
};

export default dE94;
