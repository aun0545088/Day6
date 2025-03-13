const fs = require('fs');

const text = "Hello, myself Aun Mohammad!";

fs.writeFile('about.txt', text, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing to file: ${err}`);
        return;
    }
    console.log("File has been written successfully!");
});
