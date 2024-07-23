import https from 'https';
import http from 'http';
import { normalize } from 'path';
import { getUrlProtocol } from '../helper.js';

function downloadImagesPhoto(images, file) {
    if(images.photo.startsWith('/img') || images.photo.startsWith('img')) {
        const yourttooDomain = 'https://www.yourttoo.com/'
        var url = normalize(`${yourttooDomain}${images.photo}`)
        console.log('Downloading from yourttoo...')
        downloadFromHttps(url, file)
    } else {
        console.log('Downloading from cloudinary...')
        downloadDependingOnProtocol(images.photo, file)
    }
}


function downloadImagesLogo(images, file) {
    if(images.logo.startsWith('/img') || images.logo.startsWith('img')) {
        const yourttooDomain = 'https://www.yourttoo.com/'
        var url = normalize(`${yourttooDomain}${images.logo}`)
        console.log('Downloading from yourttoo...')
        downloadFromHttps(url, file)
    } else {
        console.log('Downloading from cloudinary...')
        downloadDependingOnProtocol(images.logo, file)
    }
}

function downloadImagesFacebook(url, file) {
    const request = http.get(normalize(url), (res) => {
        console.log('Downloading from cloudinary...')
        res.pipe(file)
    })

    request.on('error', (error) => {
        console.error('Error:', error);
      });
      
    request.end();
}

export function downloadDependingOnProtocol(url, file) {
    if(getUrlProtocol(url) === 'https:') {
        downloadFromHttps(url, file)
    } 

    if(getUrlProtocol(url) === 'http:') {
        downloadFromHttp(url, file)
    }
}

function downloadFromHttp(url, file) {
    const request = http.get(url, (res) => {
        res.pipe(file)
    })

    request.on('error', (error) => {
        console.error('Error:', error);
      });

    request.end();
}

function downloadFromHttps(url, file) {
    const request = https.get(url, (res) => {
        res.pipe(file)
    })

    request.on('error', (error) => {
        console.error('Error:', error);
      });

    request.end();
}

export {
    downloadImagesLogo, 
    downloadImagesPhoto,
    downloadImagesFacebook
}

