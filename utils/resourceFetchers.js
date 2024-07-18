import { processImage, processImageURL, processImagesURLs } from './processors/imageProcessor.js';
import { createFolder, createFolderForEntity } from './directories/folders.js';

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

export function downloadImagesFromDMCFAQs(dmcFAQs) {
    const folderName = "dmcFAQImages"
    let folderPath = createFolder(`${folderName}/`)
    dmcFAQs.forEach(dmcFAQ => {
        if(dmcFAQ.imageFacebook) {
            let dmcFaqFolder = createFolderForEntity(folderPath, dmcFAQ.name)
            processImageURL(dmcFAQ.imageFacebook, dmcFaqFolder, dmcFAQ.name)
        }

        dmcFAQ.images.forEach(image => {
            processImageURL(image, folderPath, dmcFAQ.name);
        });

    });

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
        let folderPath = createFolder(`${folderName}`); 
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



//#endregion

