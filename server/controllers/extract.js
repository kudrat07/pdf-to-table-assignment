const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

// Function to reconstruct headers and extract table data
function parseTableData(text) {
    const sections = [];
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);

    const headers = [
        "Category",
        "Participants",
        "Ballots_completed",
        "Ballots_incompleted",
        "Results",
        "Time_to_complete"
    ];

    
    const startIndex = lines.findIndex(line => line.includes("Blind"));


    for (let i = startIndex; i < lines.length; i++) {
        
        if (/\b(Blind|Low Vision|Dexterity|Mobility)\b/.test(lines[i])) {
            let combinedRow = lines[i];

            while (i + 1 < lines.length && !/\b(Blind|Low Vision|Dexterity|Mobility)\b/.test(lines[i + 1])) {
                combinedRow += " " + lines[i + 1];
                i++;
            }

            
            const rowParts = combinedRow.split(/\s{2,}|\s(?=\d)/);

            
            if (rowParts.length >= 6) {
                sections.push({
                    "Disability_category": rowParts[0],
                    "Participants": rowParts[1],
                    "Ballots_completed": rowParts[2],
                    "Ballots_incompleted": rowParts[3],
                    "Results": rowParts[4],
                    "Time_to_complete": rowParts[5],
                });
            }
        }
    }

    return sections;
}

// Main PDF extraction controller
exports.extractData = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../pdf/table.pdf');
        const pdfBuffer = fs.readFileSync(filePath);

        // Extract PDF content
        const pdfData = await pdf(pdfBuffer);

        // Parse and structure data
        const structuredData = parseTableData(pdfData.text);

        res.status(200).json(structuredData);

    } catch (error) {
        console.error('Error extracting PDF content:', error);
        res.status(500).json({
            success: false,
            message: 'Error while extracting PDF content',
            error: error.message,
        });
    }
};
