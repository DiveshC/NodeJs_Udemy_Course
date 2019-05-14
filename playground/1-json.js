const fs = require('fs');

const dataBufer = fs.readFileSync('1-json.json');
const dataJSON  = dataBufer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Divesh';
data.age = 20;

const modJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', modJSON);
