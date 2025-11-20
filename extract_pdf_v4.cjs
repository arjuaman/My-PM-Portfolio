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
        // Try cjs require
        pdfParser = require('pdf-parse/dist/node/cjs/index.js');
    } catch (e) {
        console.log('CJS require failed:', e.message);
        try {
            const cjsPath = 'node_modules/pdf-parse/dist/node/cjs';
            if (fs.existsSync(cjsPath)) {
                const files = fs.readdirSync(cjsPath);
                console.log('Files in dist/node/cjs:', files);
            }
        } catch (err) {
            console.log('Could not list dist/node/cjs:', err.message);
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
        console.error('Could not find pdf-parse function even with CJS require. Type:', typeof pdfParser);
    }
}

(async () => {
    await extractText('p24arju_MCV.pdf');
    await extractText('my_linkedin_preview_data.pdf');
})();
