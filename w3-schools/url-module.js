const url = require('url');
const adr = 'http://localhost:8080/default.html?year=2019&month=march';
const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query;
console.log(qdata.month);
