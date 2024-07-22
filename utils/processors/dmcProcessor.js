import { processImageURL } from './imageProcessor.js'

export function processDMCAssociateImagesURLs(images, folderName, name) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImageURL(image, folderName, `${image.name}_${imageCounter}`)
    });
}