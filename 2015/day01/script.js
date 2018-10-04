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

for (let j = 0; j < contents.length; j++) {
    if (contents.substr(j, 1) === '(') {
        floor++;
    }
    else if (contents.substr(j, 1) === ')') {
        floor--;
    }
    if (floor === -1){
        console.log(j+1)
    }
  }

//   console.log(floor);

