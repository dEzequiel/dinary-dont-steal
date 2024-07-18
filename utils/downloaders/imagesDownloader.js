import * as http from 'http';
import { normalize } from 'path';

function downloadImagesPhoto(images, file) {
    if(images.photo.startsWith('/img') || images.photo.startsWith('img')) {
        const yourttooDomain = 'http://www.yourttoo.com/'
        http.get(normalize(`${yourttooDomain}${images.photo}`), (res) => {
            console.log('Downloading from yourttoo...')
            res.pipe(file)
        })
    } else {
        http.get(normalize(images.photo), (res) => {
            console.log('Downloading from cloudinary...')
            res.pipe(file)
        })
    }
}


function downloadImagesLogo(images, file) {
    if(images.logo.startsWith('/img') || images.logo.startsWith('img')) {
        const yourttooDomain = 'http://www.yourttoo.com/'
        http.get(normalize(`${yourttooDomain}${images.logo}`), (res) => {
            console.log('Downloading from yourttoo...')
            res.pipe(file)
        })
    } else {
        http.get(normalize(images.logo), (res) => {
            console.log('Downloading from cloudinary...')
            res.pipe(file)
        })
    }
}

function downloadImagesFacebook(url, file) {
    http.get(normalize(url), (res) => {
        console.log('Downloading from cloudinary...')
        res.pipe(file)
    })
}

export {
    downloadImagesLogo, 
    downloadImagesPhoto,
    downloadImagesFacebook
}