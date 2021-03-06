/**
 * @file test
 */


const cc = require('./colorConvert.js');
const test = require('tape');


// rgb2hsl
test('rgb to hsl', t => {
    t.deepEqual(cc.rgb2hsl(0, 0, 0), [0, 0, 0]);
    t.deepEqual(cc.rgb2hsl(255, 0, 0), [0, 100, 50]);
    t.deepEqual(cc.rgb2hsl(255, 255, 0), [60, 100, 50]);
    t.deepEqual(cc.rgb2hsl(0, 0, 255), [240, 100, 50]);
    t.deepEqual(cc.rgb2hsl(0, 255, 255), [180, 100, 50]);
    t.deepEqual(cc.rgb2hsl(255, 255, 255), [0, 0, 100]);
    t.deepEqual(cc.rgb2hsl(255, 34, 178), [321, 100, 57]);
    t.deepEqual(cc.rgb2hsl(12, 1, 23), [270, 92, 5]);
    t.deepEqual(cc.rgb2hsl(233, 200, 200), [0, 43, 85]);
    t.end();
});


// rgb2hsv
test('rgb to hsv', t => {
    t.deepEqual(cc.rgb2hsv(0, 0, 0), [0, 0, 0]);
    t.deepEqual(cc.rgb2hsv(255, 0, 0), [0, 100, 100]);
    t.deepEqual(cc.rgb2hsv(255, 255, 0), [60, 100, 100]);
    t.deepEqual(cc.rgb2hsv(0, 0, 255), [240, 100, 100]);
    t.deepEqual(cc.rgb2hsv(0, 255, 255), [180, 100, 100]);
    t.deepEqual(cc.rgb2hsv(255, 255, 255), [0, 0, 100]);
    t.deepEqual(cc.rgb2hsv(255, 34, 178), [321, 87, 100]);
    t.deepEqual(cc.rgb2hsv(12, 1, 23), [270, 96, 9]);
    t.deepEqual(cc.rgb2hsv(233, 200, 200), [0, 14, 91]);
    t.deepEqual(cc.rgb2hsv(1, 2, 3), [210, 67, 1]);
    t.end();
});


// hsl2rgb
test('hsl to rgb', t => {
    t.deepEqual(cc.hsl2rgb(0, 0, 0), [0, 0, 0]);
    t.deepEqual(cc.hsl2rgb(0, 100, 100), [255, 255, 255]);
    t.deepEqual(cc.hsl2rgb(60, 100, 50), [255, 255, 0]);
    t.deepEqual(cc.hsl2rgb(240, 100, 50), [0, 0, 255]);
    t.deepEqual(cc.hsl2rgb(180, 100, 50), [0, 255, 255]);
    t.deepEqual(cc.hsl2rgb(0, 0, 100), [255, 255, 255]);
    t.deepEqual(cc.hsl2rgb(321, 100, 57), [255, 36, 178]);
    t.deepEqual(cc.hsl2rgb(270, 92, 5), [13, 1, 24]);
    t.deepEqual(cc.hsl2rgb(0, 43, 85), [233, 200, 200]);
    t.end();
});


// hsv2rgb
test('hsv to rgb', t => {
    t.deepEqual(cc.hsv2rgb(0, 0, 0), [0, 0, 0]);
    t.deepEqual(cc.hsv2rgb(0, 100, 100), [255, 0, 0]);
    t.deepEqual(cc.hsv2rgb(60, 100, 100), [255, 255, 0]);
    t.deepEqual(cc.hsv2rgb(240, 100, 100), [0, 0, 255]);
    t.deepEqual(cc.hsv2rgb(180, 100, 100), [0, 255, 255]);
    t.deepEqual(cc.hsv2rgb(0, 0, 100), [255, 255, 255]);
    t.deepEqual(cc.hsv2rgb(321, 87, 100), [255, 33, 177]);
    t.deepEqual(cc.hsv2rgb(270, 96, 9), [12, 1, 23]);
    t.deepEqual(cc.hsv2rgb(0, 14, 91), [232, 200, 200]);
    t.deepEqual(cc.hsv2rgb(210, 67, 1), [1, 2, 3]);
    t.end();
});


// rgb2hex
test('rgb to hex', t => {
    t.deepEqual(cc.rgb2hex(0, 0, 0), '#000000');
    t.deepEqual(cc.rgb2hex(255, 0, 0), '#FF0000');
    t.deepEqual(cc.rgb2hex(255, 255, 0), '#FFFF00');
    t.deepEqual(cc.rgb2hex(0, 0, 255), '#0000FF');
    t.deepEqual(cc.rgb2hex(0, 255, 255), '#00FFFF');
    t.deepEqual(cc.rgb2hex(255, 255, 255), '#FFFFFF');
    t.deepEqual(cc.rgb2hex(255, 34, 178), '#FF22B2');
    t.deepEqual(cc.rgb2hex(12, 1, 23), '#0C0117');
    t.deepEqual(cc.rgb2hex(233, 200, 200), '#E9C8C8');
    t.deepEqual(cc.rgb2hex(1, 2, 3), '#010203');
    t.deepEqual(cc.rgb2hex(1, 2, 3, 67), '#010203AB');
    t.end();
});


// hex2rgb
test('hex to rgb', t => {
    t.deepEqual(cc.hex2rgb('#000000'), [0, 0, 0]);
    t.deepEqual(cc.hex2rgb('#FF0000'), [255, 0, 0]);
    t.deepEqual(cc.hex2rgb('#FFFF00'), [255, 255, 0]);
    t.deepEqual(cc.hex2rgb('#0000FF'), [0, 0, 255]);
    t.deepEqual(cc.hex2rgb('#00FFFF'), [0, 255, 255]);
    t.deepEqual(cc.hex2rgb('#FFFFFF'), [255, 255, 255]);
    t.deepEqual(cc.hex2rgb('#FF22B2'), [255, 34, 178]);
    t.deepEqual(cc.hex2rgb('#0C0117'), [12, 1, 23]);
    t.deepEqual(cc.hex2rgb('#E9C8C8'), [233, 200, 200]);
    t.deepEqual(cc.hex2rgb('#010203'), [1, 2, 3]);
    t.deepEqual(cc.hex2rgb('#c23'), [204, 34, 51]);
    t.deepEqual(cc.hex2rgb('#c23'), [204, 34, 51]);
    t.deepEqual(cc.hex2rgb('#0006'), [0, 0, 0, 40]);
    t.deepEqual(cc.hex2rgb('#fff'), [255, 255, 255]);
    t.deepEqual(cc.hex2rgb('#010203AB'), [1, 2, 3, 67]);
    t.deepEqual(cc.hex2rgb('#010203FF'), [1, 2, 3, 100]);
    t.deepEqual(cc.hex2rgb('#01020300'), [1, 2, 3, 0]);
    t.deepEqual(cc.hex2rgb('01020300'), [1, 2, 3, 0]);
    t.deepEqual(cc.hex2rgb('0C0117'), [12, 1, 23]);
    t.end();
});
