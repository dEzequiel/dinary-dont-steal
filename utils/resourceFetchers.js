import { processImage, processImagesURLs } from './processors/imageProcessor.js';
import { createFolder, createFolderForEntity, createFolderOnPath } from './directories/folders.js';

export function downloadImagesFromDMCProducts(products) {
    const folderName = "dmcProductImages"
    products.forEach(product => {
        const folderPath = createFolderForEntity(`${folderName}/`, product.dmcName) 
        processImage(product.image, null, folderPath)
        processAssociatedImages(product, folderPath, 'itinerary', 'itinerary');
    });
}


export function downloadImagesFromDMC(dmcs) {
    const folderName = "dmcImages"
    dmcs.forEach(dmc => {
        const folderPath = createFolderForEntity(folderName, dmc.name)

        if(dmc.images.photo) {
            processImage(dmc, 'photo', folderPath)
        } 
        
        if (dmc.images.logo) {
            processImage(dmc, 'logo', folderPath)
        }

        processAssociatedImages(dmc, folderPath, 'associateImages', 'associations');
        processAssociatedImages(dmc, folderPath, 'tourEscorts', 'tourEscorts');
        processAssociatedImages(dmc, folderPath, 'associateImagesURLS', 'associationImages');
        processAssociatedImages(dmc, folderPath, 'tourEscortsImagesURLS', 'tourEscortsImages');
    })
}



export function downloadImagesFromDMCFAQs(dmcFAQs) {
    const folderName = "dmcFAQImages"
    const folderPath = createFolder(`${folderName}/`) 
    dmcFAQs.forEach(dmcFAQ => {
        if(dmcFAQ.imageFacebook) {
            processImage(dmcFAQ, 'imageFacebook', folderPath)
        }

        dmcFAQ.images.forEach(image => {
            processImage(image, null, folderPath)
        });

    });

}

export function downloadImagesFromBookedPoducts(bookedProducts) {
    const folderName = "bookedProductImages"
    const folderPath = createFolder(`${folderName}/`) 
    bookedProducts.forEach(bookedProduct => {
        processImage(bookedProduct.image, null, folderPath)
        processAssociatedImages(bookedProduct, folderPath, 'itinerary', 'itinerary');
    });

}

export function downloadImagesFromBudgetProducts(budgetProducts) {
    const folderName = "budgetProductImages"
    budgetProducts.forEach(budgetProduct => {
        const folderPath = createFolderForEntity(folderName, budgetProduct.name)
        processImage(budgetProduct.productImage, null, folderPath)
        processAssociatedImages(budgetProduct, folderPath, 'itinerary', 'itinerary');
    });


}

export function downloadAffiliatesImages(affiliates) {
    const folderName = "affiliateImages"
    affiliates.forEach(affiliate => {
        const folderPath = createFolderForEntity(folderName, affiliate.name)

        if(affiliate.images.photo) {
            processImage(affiliate, 'photo', folderPath)
        } 
        
        if (affiliate.images.logo) {
            processImage(affiliate, 'logo', folderPath)
        }
        
    })
}

export function downloadAffiliatesFAQImages(affiliatesFAQs) {
    const folderName = "affiliateFAQImages"
    affiliatesFAQs.forEach(affiliateFAQ => {
        const folderPath = createFolderForEntity(folderName, affiliateFAQ.title)
        affiliateFAQ.images.forEach(image => {
            processImage(image, null, folderPath)
        });
    });

}

export function downloadImagesFromBanners(banners) {
    const folderName = "bannerImages"
    const folderPath = createFolder(`${folderName}/`) 
    banners.forEach(banner => {
        processImage(banner.image, null, folderPath )
    });
}

export function downloadImagesFromManagementGroups(managementGroups) {
    const folderName = "managementGroupImages"
    managementGroups.forEach(managementGroup => {
        if(managementGroup.images) {
            const folderPath = createFolderForEntity(folderName, managementGroup.name)

            if(managementGroup.images.photo) {
                processImage(managementGroup, 'photo', folderPath)
            } 
            
            if (managementGroup.images.logo) {
                processImage(managementGroup, 'logo', folderPath)
            } 
        }
    })
}

export function downloadImagesFromPages(pages) {
    const folderName = "pageImages"
    pages.forEach(page => {
        const folderPath = createFolderForEntity(folderName, page.name)
        if(page.imageFacebook) {
            processImage(page.imageFacebook, null, folderPath)
        }

        if(page.imageGalery) {
            const imageGaleryFolderPath = createFolderOnPath(`${folderPath}/imageGalery`)
            page.imageGalery.forEach(image => {
                processImage(image, null, imageGaleryFolderPath)
            })
        }

        processImage(page.image, null, folderPath);

    });

}

export function downloadImagesFromPageCategories(pageCategories) {
    const folderName = "pageCategoriesImages"
    pageCategories.forEach(page => {
        const folderPath = createFolderForEntity(folderName, page.name)

        if(page.imageFacebook) {
            processImage(page.imageFacebook, null, folderPath)
        }

        if(page.image) {
            processImage(page.image, null, folderPath);
        }
    });

}

export function downloadImagesFromProviders(providers) {
    const folderName = "providerImages"
    providers.forEach(provider => {
        if(provider.images) {
            const folderPath = createFolderForEntity(folderName, provider.name)

            if(provider.images.photo) {
                processImage(provider, 'photo', folderPath)
            } 
            
            if (provider.images.logo) {
                processImage(provider, 'logo', folderPath)
            } 
        }
    })
}

// Building...
export function downloadImagesFromTripTags(tripTags) {
    return;
    // const folderName = "tripTagImages"
    // const folderPath = createFolder(`${folderName}/`)
    // tripTags.forEach(tripTag => {
    //     processImageURL(tripTag.image, folderPath, tripTag.slug)

    //     // if(tripTag.imageFacebook) {
    //     //     processImage(tripTag, folderPath, 'imageFacebook')
    //     // }
    // });
}

export function downloadImagesFromTraveler(travelers) {
    const folderName = "travelerImages"
    travelers.forEach(traveler => {
        if(traveler.images) {
            const folderPath = createFolderForEntity(folderName, traveler.name)
            if(traveler.images.photo) {
                processImage(traveler, 'photo', folderPath)
            }
    
            if(traveler.images.logo) {
                processImage(traveler, 'logo', folderPath)
            }
        }
    });
}

export function downloadImagesFromAdmins(admins) {
    const folderName = "adminImages"
    admins.forEach(admin => {
        if(admin.images) {
            const folderPath = createFolderForEntity(folderName, admin.name)

            if(admin.images.photo) {
                processImage(admin, 'photo', folderPath)
            } 
            
            if (admin.images.logo) {
                processImage(admin, 'logo', folderPath)
            } 
        }
    });
}

export function downloadImagesFromDestinationCountries(destinationCountries) {
    const folderName = "destinationCountryImages"
    destinationCountries.forEach(destinationCountry => {
        if(destinationCountry.image || destinationCountry.imageFacebook) {
            const folderPath = createFolderForEntity(folderName, destinationCountry.name)
            
            if(destinationCountry.image) {
                processImage(destinationCountry.image, null, folderPath)
            }

            if(destinationCountry.imageFacebook) {
                processImage(destinationCountry.imageFacebook, null, folderPath)
            } 
        }
    });
}

export function downloadImagesFromDestinationCountryZones(destinationCountryZones) {
    const folderName = "destinationCountryZoneImages"
    destinationCountryZones.forEach(destinationCountryZone => {
        const folderPath = createFolderForEntity(folderName, destinationCountryZone.name)
        if(destinationCountryZone.image || destinationCountryZone.iconImage) {
            const folderPath = createFolderForEntity(folderName, destinationCountryZone.name)

            if(destinationCountryZone.image) {
                processImage(destinationCountryZone.image, null, folderPath)
            }
    
            if(destinationCountryZone.iconImage) {
                processImage(destinationCountryZone.iconImage, null, folderPath)
            } 
        }
        
    });
}


function processAssociatedImages(entity, folderPath, imageProperty, subFolderName) {
    if (entity[imageProperty]) {
        const specificFolderPath = createFolderOnPath(`${folderPath}/${subFolderName}`);
        processImagesURLs(entity[imageProperty], specificFolderPath);
    }
}