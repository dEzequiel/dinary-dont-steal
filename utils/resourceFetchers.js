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

export function downloadImagesFromBookedPoducts(bookedProducts) {
    const folderName = "bookedProductImages"
    bookedProducts.forEach(bookedProduct => {
        const folderPath = createFolderForEntity(folderName, bookedProduct.slug)
        processImageURL(bookedProduct.productImage, folderPath, bookedProduct.slug )
        processImagesURLs(bookedProduct.itinerary, folderPath, bookedProduct.slug)
    });

}

export function downloadImagesFromBudgetProducts(budgetProducts) {
    const folderName = "budgetProductImages"
    budgetProducts.forEach(budgetProduct => {
        const folderPath = createFolderForEntity(folderName, budgetProduct.name)
        processImageURL(budgetProduct.productImage, folderPath, budgetProduct.slug )
        processImagesURLs(budgetProduct.itinerary, folderPath, budgetProduct.slug)
    });


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

export function downloadAffiliatesFAQImages(affiliatesFAQs) {
    const folderName = "affiliateFAQImages"
    affiliatesFAQs.forEach(affiliateFAQ => {
        let folderPath = createFolder(`${folderName}/${affiliateFAQ.title}/`); 
        affiliateFAQ.images.forEach(image => {
            processImageURL(image, folderPath, affiliateFAQ.slug);
        });
    });

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

    return folderPath
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
    const resourceFormat = extname(image.url).toLowerCase(); // Extract format from url: .jpg, .png ...
    let filePath = normalize(`${folderName}/${name}${resourceFormat}`);

    if (image.url.startsWith('/img')) {
        const yourttooDomain = 'http://www.yourttoo.com/';
        filePath = normalize(`${folderName}/${name}_yourttoo${resourceFormat}`);
        http.get(normalize(`${yourttooDomain}${image.url}`), (res) => {
            console.log('Downloading from yourttoo...');
            const file = fs.createWriteStream(filePath);
            res.pipe(file);

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
        });
    } else {
        http.get(image.url, (res) => {
            console.log('Downloading from cloudinary...');
            filePath = normalize(`${folderName}/${name}_cloudinary${resourceFormat}`);
            const file = fs.createWriteStream(filePath);
            res.pipe(file);

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
        });
    }
}

function processImagesURLs(images=[], folderName, name) {
    let imageCounter = 0
    images.forEach(image => {
        imageCounter++
        processImageURL(image, folderName, `${name}_${imageCounter}`)
    });
}


//#endregion

