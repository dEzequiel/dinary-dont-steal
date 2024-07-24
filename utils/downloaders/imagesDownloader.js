import https from 'https';
import http from 'http';
import { normalize } from 'path';
import { getUrlProtocol } from '../helper.js';

function downloadImage(image, file) {
    if(image.startsWith('/img') || image.startsWith('img')) {
        const yourttooDomain = 'https://www.yourttoo.com/'
        var url = normalize(`${yourttooDomain}${image}`)
        console.log('Downloading from yourttoo...')
        downloadDependingOnProtocol(url, file)
    } else {
        console.log('Downloading from cloudinary...')
        downloadDependingOnProtocol(image, file)
    }
    }

export function downloadDependingOnProtocol(url, file) {
    if(getUrlProtocol(url) === 'https:') {
        const request = https.get(url, (res) => {
            res.pipe(file)
        })
    
        request.on('error', (error) => {
            console.error('Error:', error);
          });
    
        request.end();
    } 

    if(getUrlProtocol(url) === 'http:') {
        const request = http.get(url, (res) => {
            res.pipe(file)
        })
    
        request.on('error', (error) => {
            console.error('Error:', error);
          });
    
        request.end();
    }
}


export {
    downloadImage
}

