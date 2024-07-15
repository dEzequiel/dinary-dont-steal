import * as http from 'http';
import * as fs from 'fs';
import { normalize,extname } from 'path';

export function downloadImagesFromDMCProducts(products) {
    const folderName = "dmcProductImages"
    const folderPath = createFolder(`${folderName}/`) 
    products.forEach(product => {
        processImageURL(product.image, folderPath, product.name )
    });
}

export function downloadImagesFromDMC(dmcs) {
    const folderName = "dmcImages"
    createFolder(folderName)
    dmcs.forEach(dmc => {
        
        if(dmc.images.photo || dmc.dmc.logo)
            createFolderForEntity(folderName, dmc.name)

        if(dmc.images.photo) {
            processImage(dmc, folderName, 'photo')
        } 
        
        if (dmc.images.logo) {
            processImage(dmc, folderName, 'logo')
        } 
    })
}

export function downloadAffiliatesImages(affiliates) {
    const folderName = "affiliateImages"
    createFolder(folderName)
    affiliates.forEach(affiliate => {
        
        if(affiliate.images.photo || affiliate.images.logo)
            createFolderForEntity(folderName, affiliate.name)

        if(affiliate.images.photo) {
            processImage(affiliate, folderName, 'photo')
        } 
        
        if (affiliate.images.logo) {
            processImage(affiliate, folderName, 'logo')
        } 
    })
}

export function downloadImagesFromBanners(banners) {
    const folderName = "bannerImages"
    const folderPath = createFolder(`${folderName}/`) 
    banners.forEach(banner => {
        processImageURL(banner.image, folderPath, banner.name )
    });
}
//#region 

function createFolder(folderName) {
    let folder = normalize(`downloads/${folderName}`);
    if(!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
        console.log(`${folder} created`);
    }

    return folder;
}

function createFolderForEntity(path, entity) {
    const folderPath = createFolder(`${path}/${entity}`);
    if(!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {  recursive: true  })
    }
}

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
    console.log(images)
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

function processImage(entity, folderName, type) {
    const resourceFormat = extname(entity.images[type]).toLowerCase() // Extract format from url: .jpg, .png ...
    const folderPath = createFolder(`${folderName}/${entity.name}/${type}`) // creates folder for logos...
    const filePath = normalize(`${folderPath}/${entity.name}${resourceFormat}`);
    const file = fs.createWriteStream(filePath);
    
    if(type === 'photo') {
        downloadImagesPhoto(entity.images, file);
    } else if(type === 'logo') {
        downloadImagesLogo(entity.images, file);
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
    const resourceFormat = extname(image.url).toLowerCase() // Extract format from url: .jpg, .png ...
    const filePath = normalize(`${folderName}/${name}${resourceFormat}`)
    const file = fs.createWriteStream(filePath)

    if(image.url.startsWith('/img')) {
        const yourttooDomain = 'http://www.yourttoo.com/'
        http.get(normalize(`${yourttooDomain}${image.url}`), (res) => {
            console.log('Downloading from yourttoo...')
            res.pipe(file)
        })
    } else {
        http.get(image.url, (res) => {
            console.log('Downloading from cloudinary...')
            res.pipe(file)
        })    
    }

    file.on('finish', () => {
        file.close()
        console.log(`Download completed, check ${folderName}/ folder`)
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

//#endregion

