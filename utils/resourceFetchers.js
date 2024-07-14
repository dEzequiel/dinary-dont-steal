import * as http from 'http';
import * as fs from 'fs';
import { normalize,extname } from 'path';
import { Console } from 'console';

function downloadImagesFromDMCProducts(products) {
    const folderName = "downloads/dmcProductImages"
    createFolder(folderName)

    products.forEach(product => {
        const filePath = normalize(`${folderName}/${product.name}.${product.image.format}`)
        const file = fs.createWriteStream(filePath)
        
        if(product.image.url.startsWith('/img')) {
            const yourttooDomain = 'http://www.yourttoo.com/'
            http.get(normalize(`${yourttooDomain}${product.image.url}`), (res) => {
                console.log('Downloading from yourttoo...')
                res.pipe(file)
            })
        } else {
            http.get(product.image.url, (res) => {
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
    });
}

function downloadImagesFromDMC(dmcs) {
    
    const folderName = "dmcImages";
    dmcs.forEach(dmc => {
        createFolderForDMC(dmc.name)
        const resourceFormat = extname(dmc.images.photo).toLowerCase() // Extract format from url: .jpg, .png ...
        const filePath = normalize(`downloads/${folderName}/${dmc.name}/${dmc.name}${resourceFormat}`);
        const file = fs.createWriteStream(filePath);

        if(dmc.images.photo.startsWith('/img') || dmc.images.photo.startsWith('img')) {
            const yourttooDomain = 'http://www.yourttoo.com/'
            http.get(normalize(`${yourttooDomain}${dmc.images.photo}`), (res) => {
                console.log('Downloading from yourttoo...')
                res.pipe(file)
            })
        } else {
            http.get(normalize(dmc.images.photo), (res) => {
                console.log('Downloading from cloudinary...')
                res.pipe(file)
            })
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
    })
}

function createFolder(folderName) {
    if(!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName, { recursive: true });
        console.log(`${folderName} created`);
    }
}

function createFolderForDMC(dmcName) {
    const folderPath = normalize(`downloads/dmcImages/${dmcName}`);
    if(!fs.existsSync(`downloads/dmcImages/`)) {
        fs.mkdirSync(`downloads/dmcImages/`, {  recursive: true  })
    }
    createFolder(folderPath);
}

export { downloadImagesFromDMCProducts, downloadImagesFromDMC }