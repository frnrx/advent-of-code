const fs = require('fs');
 
let contents = fs.readFileSync('./file.txt', (err, data) => {
    if (err) {
        console.log('error');
    }
    return data;
    // console.log(data.toString());
});

contents = contents.toString();

let floor = 0;
let verify = true;

for (let j = 0; j < contents.length; j++) {
    if (contents.substr(j, 1) === '(') {
        floor++;
    }
    else if (contents.substr(j, 1) === ')') {
        floor--;
    }
    if (verify)
    if (floor === -1){
        verify = false;
        console.log('Santa entered the basement at the position', j+1)
    }
  }

  console.log('and ended up at the', floor, 'floor.');
