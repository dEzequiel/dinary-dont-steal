import https from 'https';
import http from 'http';
import { normalize } from 'path';

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
    http.get(normalize(url), (res) => {
        console.log('Downloading from cloudinary...')
        res.pipe(file)
    })
}

function downloadDependingOnProtocol(url, file) {
    if(getUrlProtocol(url) === 'https:') {
        downloadFromHttps(url, file)
    } 

    if(getUrlProtocol(url) === 'http:') {
        downloadFromHttp(url, file)
    }
}

function downloadFromHttp(url, file) {
    http.get(url, (res) => {
        res.pipe(file)
    })
}

function downloadFromHttps(url, file) {
    https.get(url, (res) => {
        res.pipe(file)
    })
}

export {
    downloadImagesLogo, 
    downloadImagesPhoto,
    downloadImagesFacebook
}

function getUrlProtocol(url) {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol
}
