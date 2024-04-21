#!/usr/bin/javascript

// Mengulangi pesan 1500 kali dengan for loop
for (let i = 0; i < 1500; i++) {
  console.log("JAVASCRIPT CONFIGURATION-" + (i+1));
}

// Mengulangi pesan 1500 kali menggunakan while loop
let counter = 0;
while (counter < 1500) {
  console.log("JAVASCRIPT POPULAR LANGUAGES-" + (counter+1));
  counter++;
}

// mengkoneksikan javascrip dengan shell
const { exec } = require('child_process');

exec('bash install.sh', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});
