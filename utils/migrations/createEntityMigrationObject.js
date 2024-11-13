
export let migration_objects = []
function createEntityMigrationObject(collection_name, entity_id, object_property, entity_path, nature) {
    const key = `${collection_name}-${entity_id}-${object_property}`
    migration_objects.push({
        [key]: {
            container: nature,
            blob: 'uploads/whatever',
            original_path: entity_path,
            new_path: '[full-blob-url]'
        }
    })
}

export function createAffiliateMigrationObject(affiliate) {
    const collection = 'affiliates'
    if(affiliate.images) {
        if(affiliate.images.logo && !affiliate.images.photo) {
            createEntityMigrationObject(collection, affiliate.id, 'images.logo.url', affiliate.images.logo, 'public')
        } else if(affiliate.images.photo && !affiliate.images.logo) {
            createEntityMigrationObject(collection, affiliate.id, 'images.photo.url', affiliate.images.photo, 'public')
        } else if(affiliate.images.logo && affiliate.images.photo) {
            createEntityMigrationObject(collection, affiliate.id, 'images.logo.url', affiliate.images.logo, 'public')
            createEntityMigrationObject(collection, affiliate.id, 'images.photo.url', affiliate.images.photo, 'public')
        }
    } else {
        return;
    }
}

export function createAffiliateFAQMigrationObject(affiliateFAQ) {
    const collection = 'affiliate faqs'
    if(affiliateFAQ.images && affiliateFAQ.images.length > 0) {
        affiliateFAQ.images.forEach(image => {
            createEntityMigrationObject(collection, affiliateFAQ.id, 'images.url', image.url, 'public')
        })
    }
}

export function createBannerMigrationObject(banner) {
    const collection = 'banners'
    createEntityMigrationObject(collection, banner.id, 'image.url', banner.image.url, 'public')
}

export function createBookedProductMigrationObject(bookedProduct, nature) {
    const collection = 'bookedproducts'
    if(bookedProduct.productImage) {
        createEntityMigrationObject(collection, bookedProduct.id, 'productimage.url', bookedProduct.productImage.url, nature)
    }

    if(bookedProduct.itinerary && bookedProduct.itinerary.length > 0) {
        let itinerary_counter = 0;
        bookedProduct.itinerary.forEach(itinerary => {
            if(itinerary.url) {
                createEntityMigrationObject(collection, bookedProduct.id, `itinerary.${itinerary_counter}.image.url`, itinerary.url, nature)
                itinerary_counter++;
            }
        })
    }
}

export function createPageMigrationObject(page, nature) {
    const collection = 'pages'
    
    if(page.image) {
        createEntityMigrationObject(collection, page.id, 'image.url', page.image.url, nature)
    }

    if(page.imageFacebook) {
        createEntityMigrationObject(collection, page.id, 'imageFacebook.url', page.imageFacebook.url, nature)
    }

    if(page.imageGalery && page.imageGalery.length > 0) {
        let image_counter = 0;
        page.imageGalery.forEach(image => {
            if(image.url) {
                createEntityMigrationObject(collection, page.id, `imageGalery.${image_counter}.url`, image.url, nature)
                image_counter++;
            }
        })
    }
}

export function createPageCategoryMigrationObject(pageCategory, nature) {
    const collection = 'pageCategories'
    if(pageCategory.image) {
        createEntityMigrationObject(collection, pageCategory.id, 'image.url', pageCategory.image.url, nature)
    }

    if(pageCategory.imageFacebook) {
        createEntityMigrationObject(collection, pageCategory.id, 'imageFacebook.url', pageCategory.imageFacebook.url, 'public')
    }
}

export function createDestinationCountryMigrationObject(destinationCountry, nature) {
    const collection = 'destinationcountries'
    if(destinationCountry.image) {
        createEntityMigrationObject(collection, destinationCountry.id, 'image.url', destinationCountry.image.url, nature)
    }

    if(destinationCountry.imageFacebook) {
        createEntityMigrationObject(collection, destinationCountry.id, 'imageFacebook.url', destinationCountry.imageFacebook.url, nature)
    }
}

export function createDestinationCountryZoneMigrationObject(destinationCountryZone, nature) {
    const collection = 'destinationcountrieszones'
    if(destinationCountryZone.image) {
        createEntityMigrationObject(collection, destinationCountryZone.id, 'image.url', destinationCountryZone.image.url, nature)
    }

    if(destinationCountryZone.iconImage) {
        createEntityMigrationObject(collection, destinationCountryZone.id, 'iconImage.url', destinationCountryZone.iconImage.url, nature)
    }
}

export function createBudgetFilesMigrationObject(budget, nature) {
    const collection = 'budget'
    
    if(budget.voucher) {
        createEntityMigrationObject(collection, budget.id, 'voucher.url', budget.voucher.url, nature)
    }

    if(budget.passportfile) {
        createEntityMigrationObject(collection, budget.id, 'passportfile.url', budget.passportfile.url, nature)
    }

    if(budget.visaletterfile) {
        createEntityMigrationObject(collection, budget.id, 'visaletterfile.url', budget.visaletterfile.url, nature)
    }

    if(budget.invoicesaerial) {
        createEntityMigrationObject(collection, budget.id, 'invoicesaerial.file.url', budget.invoicesaerial.file.url, nature)
    }

    if(budget.invoicesagency) {
        createEntityMigrationObject(collection, budget.id, 'invoicesagency.file.url', budget.invoicesagency.file.url, nature)
    }

    if(budget.invoicesprovider) {
        createEntityMigrationObject(collection, budget.id, 'invoicesprovider.file.url', budget.invoicesprovider.file.url, nature)
    }

    if(budget.invoicestravelersense) {
        createEntityMigrationObject(collection, budget.id, 'invoicestravelersense.file.url', budget.invoicestravelersense.file.url, nature)
    }

}

export function createBudgetProductMigrationObject(budgetProduct, nature) {
    const collection = 'budgetproducts'
    if(budgetProduct.productImage) {
        createEntityMigrationObject(collection, budgetProduct.id, 'productImage.url', budgetProduct.productImage.url, nature)
    }

    if(budgetProduct.itinerary && budgetProduct.itinerary.length > 0) {
        let itinerary_counter = 0;
        budgetProduct.itinerary.forEach(itinerary => {
            if(itinerary.url) {
                createEntityMigrationObject(collection, budgetProduct.id, `itinerary.${itinerary_counter}.image.url`, itinerary.url, nature)
                itinerary_counter++;
            }
        })
    }
}

export function createDestinationCityMigrationObject(destinationCity, nature) {
    const collection = 'destinationcities'
    if(destinationCity.mainImage) {
        createEntityMigrationObject(collection, destinationCity.id, 'mainImage.url', destinationCity.mainImage.url, nature)
    }

    if(destinationCity.imageFacebook) {
        createEntityMigrationObject(collection, destinationCity.id, 'imageFacebook.url', destinationCity.imageFacebook.url, nature)
    }
}