"use strict";
// enum
// enum adalah sebuah tipe data yg menyimpan sekumpulan data constans
// numeric enums
// enum Month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MAY
// }
// console.log(Month.MAR);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "February";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.JAN);
