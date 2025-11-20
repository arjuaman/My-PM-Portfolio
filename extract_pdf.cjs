const fs = require('fs');
const pdfLib = require('pdf-parse');

console.log('Type of pdfLib:', typeof pdfLib);
// console.log('pdfLib keys:', Object.keys(pdfLib)); // might crash if not object

const dataBuffer = fs.readFileSync('p24arju_MCV.pdf');

let pdf = pdfLib;
if (typeof pdfLib !== 'function' && pdfLib.default) {
    pdf = pdfLib.default;
}

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(function (error) {
        console.error('Error parsing PDF:', error);
    });
} else {
    console.error('Could not find pdf function. pdfLib is:', pdfLib);
}
