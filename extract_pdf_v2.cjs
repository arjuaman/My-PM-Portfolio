const fs = require('fs');
const path = require('path');

async function extractText(filePath) {
    console.log(`\n--- Extracting ${path.basename(filePath)} ---`);
    if (!fs.existsSync(filePath)) {
        console.log('File not found');
        return;
    }
    const dataBuffer = fs.readFileSync(filePath);

    let pdfParser;
    try {
        // Try standard require
        pdfParser = require('pdf-parse');
    } catch (e) {
        console.log('Standard require failed:', e.message);
    }

    // If standard require gives an object but not a function, try to find the function
    if (typeof pdfParser !== 'function') {
        try {
            pdfParser = require('pdf-parse/dist/pdf-parse.js');
        } catch (e) {
            console.log('Dist require failed:', e.message);
        }
    }

    if (typeof pdfParser === 'function') {
        try {
            const data = await pdfParser(dataBuffer);
            console.log('SUCCESS_TEXT_START');
            console.log(data.text);
            console.log('SUCCESS_TEXT_END');
        } catch (error) {
            console.error('Error parsing PDF:', error);
        }
    } else {
        console.error('Could not find pdf-parse function. Type:', typeof pdfParser);
        if (typeof pdfParser === 'object') {
            console.log('Keys:', Object.keys(pdfParser));
        }
    }
}

(async () => {
    await extractText('p24arju_MCV.pdf');
    await extractText('my_linkedin_preview_data.pdf');
})();
