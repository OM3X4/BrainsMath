import fs from  "fs"

const path = '/i:/Learn BackEnd/BrainsMath/Code/Client/src/assets/bank.js';

// Read the file
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Use a regular expression to find and modify all choices arrays
    const modifiedData = data.replace(/choices: \[([^\]]+)\]/g, (match, p1) => {
        return `choices: [${p1}].sort(() => Math.random() - 0.5)`;
    });

    // Write the modified data back to the file
    fs.writeFile(path, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File has been updated successfully.');
    });
});
