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
    let folderPath = createFolder(`${folderName}`); 
    affiliatesFAQs.forEach(affiliateFAQ => {
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

export function downaloadImagesFromManagementGroups(managementGroups) {
    const folderName = "managementGroupImages"
    managementGroups.forEach(managementGroup => {
        
        if(managementGroup.images.photo || managementGroup.images.logo)
            createFolderForEntity(folderName, managementGroup.name)

        if(managementGroup.images.photo) {
            processImage(managementGroup, folderName, 'photo')
        } 
        
        if (managementGroup.images.logo) {
            processImage(managementGroup, folderName, 'logo')
        } 
    })
}

export function downloadImagesFromPages(pages) {
    const folderName = "pageImages"
    createFolder(`${folderName}/`)
    pages.forEach(page => {
        let pageFolder = createFolderForEntity(folderName, page.name)
        if(page.imageFacebook) {
            processImageURL(page.imageFacebook, pageFolder, page.name)
        }

        if(page.imageGalery) {
            processImagesURLs(page.imageGalery, pageFolder, page.name)
        }

        processImageURL(page.image, pageFolder, page.name);

    });

}

export function downloadImagesFromProviders(providers) {
    const folderName = "providerImages"
    providers.forEach(provider => {
        
        if(provider.images.photo || provider.images.logo)
            createFolderForEntity(folderName, provider.name)
        if(provider.images.photo) {
            processImage(provider, folderName, 'photo')
        } 
        
        if (provider.images.logo) {
            processImage(provider, folderName, 'logo')
        } 
    })
}

export function downloadImagesFromTripTags(tripTags) {
    const folderName = "tripTagImages"
    const folderPath = createFolder(`${folderName}/`)
    tripTags.forEach(tripTag => {
        processImageURL(tripTag.image, folderPath, tripTag.slug)
    });
}

export function downloadImagesFromTraveler(travelers) {
    const folderName = "travelerImages"
    travelers.forEach(traveler => {
        if(traveler.images.photo || traveler.images.logo)
            createFolderForEntity(folderName, traveler.name)

        if(traveler.images.photo) {
            processImage(traveler, folderName, 'photo')
        } 
        
        if (traveler.images.logo) {
            processImage(traveler, folderName, 'logo')
        }     
    });
}

export function downloadImagesFromAdmins(admins) {
    const folderName = "adminImages"
    admins.forEach(admin => {
        if(admin.images.photo || admin.images.logo)
            createFolderForEntity(folderName, admin.name)

        if(admin.images.photo) {
            processImage(admin, folderName, 'photo')
        } 
        
        if (admin.images.logo) {
            processImage(admin, folderName, 'logo')
        } 
    });
}

export function downloadImagesFromDestinationCountries(destinationCountries) {
    const folderName = "destinationCountryImages"
    const folderPath = createFolder(`${folderName}/`)
    destinationCountries.forEach(destinationCountry => {
        processImageURL(destinationCountry.image, folderPath, destinationCountry.name)
    });
}

export function downloadImagesFromDestinationCountryZones(destinationCountryZones) {
    const folderName = "destinationCountryZoneImages"
    destinationCountryZones.forEach(destinationCountryZone => {
        const folderPath = createFolderForEntity(folderName, destinationCountryZone.name)

        if(destinationCountryZone.image) {
            processImageURL(destinationCountryZone.image, folderPath, destinationCountryZone.name)
        }

        if(destinationCountryZone.iconImage) {
            processImageURL(destinationCountryZone.iconImage, folderPath, destinationCountryZone.name)
        }
    });
}