import * as fs from 'fs';
import { createFolderOnPath } from "../directories/folders.js";
import { normalize, extname } from 'path';
import { getImageNameFromURL } from '../helper.js';
import { downloadImage } from '../downloaders/imagesDownloader.js';

function processImage(entity, type, folderName) {

    let resourceFormat;
    let folderPath;
    let filePath;
    let file;
    let imageURLname;
    if(type) {
        resourceFormat = extname(entity.images[type]).toLowerCase() // Extract format from url: .jpg, .png ...
        imageURLname = getImageNameFromURL(entity.images[type])  // Extract the image name from image url
        folderPath = createFolderOnPath(`${folderName}/${type}`) // creates folder for logos...
        
        filePath = normalize(`${folderPath}/${imageURLname}${resourceFormat}`);
        file = fs.createWriteStream(filePath);
        
        downloadImage(entity.images[type], file)      
    } else {
        resourceFormat = extname(entity.url).toLowerCase() // Extract format from url: .jpg, .png ...
        imageURLname = getImageNameFromURL(entity.url)

        filePath = normalize(`${folderName}/${imageURLname}${resourceFormat}`);
        file = fs.createWriteStream(filePath);

        downloadImage(entity.url, file)
    }


    file.on('finish', () => {
        file.close()
        console.log(`Download completed, check downloads/${folderName} folder`)
    })

    file.on('error', (err) => {
        console.error(`Error downloading file: ${err.message}`)
        fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
                console.error(`Error deleting file: ${unlinkErr.message}`)
            } else {
                console.log(`File ${filePath} deleted successfully.`)
            }
        })
    })
}

function processImagesURLs(images, folderName, name) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImage(image, null, folderName)
    });
}

export {
    processImage,
    processImagesURLs
}