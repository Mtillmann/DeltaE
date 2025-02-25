# ES Module fork
- Install using `npm install Mtillmann/DeltaE --save`   
- Import using regular import `import DeltaE from "delta-e";`    
- Usage stays the same as described below.    
- Browser version was not touched
- no business logic was touched

---

# DeltaE - Quantify Color Difference

Check out the following GitHub Pages respository for information on this library.

http://zschuessler.github.io/DeltaE/

## About Delta E

This package gives access to three color difference algorithms. 
These algorithms represent the hard work of the [International Commission on Illumination (CIE).](http://www.cie.co.at/)


Historically, each iterative algorithm has been used in print
and textile industries to maintain consistency in machine calibration.
These days, far more interesting use cases arise with media processing.
    
## Install It

DeltaE comes in flavors of npm and Bower.

    // install via npm
    npm install delta-e

    // install via Bower
    bower install delta-e

### Use It
    // For npm: use require
    var DeltaE = require('delta-e');

    // For Bower: include the script. DeltaE global now accessible.
    <script src="bower_components/delta-e/dist/deltae.global.min.js"></script>

    // Create two test LAB color objects to compare!
    var color1 = {L: 36, A: 60, B: 41};
    var color2 = {L: 100, A: 40, B: 90};
    
    // 1976 formula
    console.log(DeltaE.getDeltaE76(color1, color2));
    
    // 1994 formula
    console.log(DeltaE.getDeltaE94(color1, color2));
    
    // 2000 formula
    console.log(DeltaE.getDeltaE00(color1, color2));

## Tests

A simple Mocha test is setup to test the accuracy of each dE algorithm, for both
npm and Bower versions.

    $ cd tests/
    $ mocha main.js

## Gulp Tasks

### build

Builds both the Bower and npm version from source.

    $ gulp build

### jsdoc

Generates full documentation in the /jsdoc/ folder.

    $ gulp jsdoc

## Licensing

This is Unlicensed. Do what you want. Just don't sue me, and we is cool.

> This is free and unencumbered software released into the public domain.
>
> Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
>
> In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
>
> For more information, please refer to <http://unlicense.org>
