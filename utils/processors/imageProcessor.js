import * as http from 'http';
import * as fs from 'fs';
import { downloadImagesLogo, downloadImagesPhoto, downloadImagesFacebook, downloadDependingOnProtocol } from "../downloaders/imagesDownloader.js";
import { createFolder, createFolderForEntity } from "../directories/folders.js";
import { normalize, extname } from 'path';


function processImage(entity, folderName, type) {
    const resourceFormat = extname(entity.images[type]).toLowerCase() // Extract format from url: .jpg, .png ...
    const folderPath = createFolder(`${folderName}/${entity.name}/${type}`) // creates folder for logos...
    
    let filePath = normalize(`${folderPath}/${entity.name}${resourceFormat}`);
    let file = fs.createWriteStream(filePath);
    
    if(type === 'photo') {
        downloadImagesPhoto(entity.images, file);
    } else if(type === 'logo') {
        downloadImagesLogo(entity.images, file);
    } else if(type === 'imageFacebook') {
        filePath = normalize(`${folderPath}/${entity.name}_facebook${resourceFormat}`);
        file = fs.createWriteStream(filePath);
        downloadImagesFacebook(entity.imageFacebook, file);
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

function processImageURL(image, folderName, name) {
    const resourceFormat = extname(image.url).toLowerCase(); // Extract format from url: .jpg, .png ...
    if (image.url.startsWith('/img')) {
        console.log('Downloading from yourttoo...')
        const yourttooDomain = 'http://www.yourttoo.com/';
        const filePath = normalize(`${folderName}/${name}_yourttoo${resourceFormat}`);
        const file = fs.createWriteStream(filePath);
        downloadDependingOnProtocol(normalize(`${yourttooDomain}${image.url}`), file)
        file.on('finish', () => {
            file.close();
            console.log(`Download completed for ${image.url}, check ${folderName}/ folder`);
        });

        file.on('error', (err) => {
            console.error(`Error downloading file ${image.url}: ${err.message}`);
            fs.unlink(filePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error(`Error deleting file ${filePath}: ${unlinkErr.message}`);
                } else {
                    console.log(`File ${filePath} deleted successfully.`);
                }
            });
        });
    } else {
        const filePath = normalize(`${folderName}/${name}_cloudinary${resourceFormat}`);
        const file = fs.createWriteStream(filePath);
        downloadDependingOnProtocol(image.url, file);   
        file.on('finish', () => {
            file.close();
            console.log(`Download completed for ${image.url}, check ${folderName}/ folder`);
        });

        file.on('error', (err) => {
            console.error(`Error downloading file ${image.url}: ${err.message}`);
            fs.unlink(filePath, (unlinkErr) => {
                if (unlinkErr) {
                    console.error(`Error deleting file ${filePath}: ${unlinkErr.message}`);
                } else {
                    console.log(`File ${filePath} deleted successfully.`);
                }
            });
        }); 
    }
}

function processImagesURLs(images, folderName, name) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImageURL(image, folderName, `${name}_${imageCounter}`)
    });
}


export {
    processImage,
    processImageURL,
    processImagesURLs
}