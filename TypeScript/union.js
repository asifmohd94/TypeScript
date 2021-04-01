"use strict";
function combineNew(n1, n2) {
    var result;
    if (typeof n1 == "number" && typeof n2 == 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineNumbers = combineNew(30, 26);
console.log(combineNumbers);
var combineNames = combineNew('Abcd', 'xyz');
console.log(combineNames);
