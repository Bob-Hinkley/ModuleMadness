var http = require('http');
var module3 = require('./module3')

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write('Account Balance:' +'\n');
  res.write(module3.randomNumber());
  res.write('\n');
  res.write('                     __'+ '\n');
  res.write('       "Quack"  -  <(o )___'+ '\n');
  res.write('                    ( ._> /'+ '\n');
  res.write('                     `---"  '+ '\n');
  // res.write(number() + '\n')

  res.end();
}).listen(3000);
