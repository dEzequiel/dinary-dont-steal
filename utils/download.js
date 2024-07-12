import * as http from 'http';
import * as fs from 'fs';
import { normalize } from 'path';

function downloadCloduinaryImagesFromDMCProducts(products) {
    
    products.forEach(product => {
        const filePath = normalize(`images/${product.name}.${product.image.format}`)
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
            console.log('Download completed, check /images folder')
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


export { downloadCloduinaryImagesFromDMCProducts }