const https = require('https');
https.get('https://www.coinbase.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // try to find font sizes or header classes
    const match = data.match(/<nav.*?<\/nav>/i);
    if(match) console.log("Nav found, length: " + match[0].length);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
