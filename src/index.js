'use strict';

/**
 * @class DeltaE
 * @classdesc
 * A package of dE76, dE94, and dE00 algorithms.
 * @constructs DeltaE
 * @example
 * var DeltaE = new DeltaE();
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE94(labColor1, labColor2);
 */

import dE76 from './dE76.js';
import dE94 from './dE94.js';
import dE00 from './dE00.js';

export default {
    getDeltaE76(lab1,lab2){
        return new dE76(lab1,lab2).getDeltaE()
    },
    getDeltaE94(lab1,lab2){
        return new dE94(lab1,lab2).getDeltaE()
    },
    getDeltaE00(lab1,lab2){
        return new dE00(lab1,lab2).getDeltaE()
    }
};