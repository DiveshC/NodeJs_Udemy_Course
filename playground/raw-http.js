const https = require('https');

const url = 'https://api.darksky.net/forecast/691a1e4b3535f1932e33d89f5302f5f5/40,-75?units=si';

const request = https.request(url, (response)=>{
    let data = '';
    response.on('data', (chunk) => {
        data = data+chunk.toString();
    });

    response.on('end', () => {
        console.log(data);

        const body = JSON.parse(data);
        console.log(body);
    });
});
request.on('error', (error) => {
    console.log('An error', error);
});

request.end();