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
        // Try deep require
        pdfParser = require('pdf-parse/dist/node/pdf-parse.js');
    } catch (e) {
        console.log('Deep require failed:', e.message);
        try {
            // Try finding it in the list
            const distNode = 'node_modules/pdf-parse/dist/node';
            if (fs.existsSync(distNode)) {
                const files = fs.readdirSync(distNode);
                console.log('Files in dist/node:', files);
            }
        } catch (err) {
            console.log('Could not list dist/node:', err.message);
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
    } else if (pdfParser && pdfParser.default && typeof pdfParser.default === 'function') {
        try {
            const data = await pdfParser.default(dataBuffer);
            console.log('SUCCESS_TEXT_START');
            console.log(data.text);
            console.log('SUCCESS_TEXT_END');
        } catch (error) {
            console.error('Error parsing PDF:', error);
        }
    } else {
        console.error('Could not find pdf-parse function even with deep require.');
    }
}

(async () => {
    await extractText('p24arju_MCV.pdf');
    await extractText('my_linkedin_preview_data.pdf');
})();
