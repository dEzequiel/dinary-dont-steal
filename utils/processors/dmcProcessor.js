import { processImageURL } from './imageProcessor.js'

export function processDMCAssociateImagesURLs(images, folderName) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImageURL(image, folderName, `${image.name}_associate_${imageCounter}`)
    });
}

export function processDMCTourEscortsImagesURLs(images, folderName, name) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImageURL(image, folderName, `${name}_tourEscort_${imageCounter}`)
    });
}