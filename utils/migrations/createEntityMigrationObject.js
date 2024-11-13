
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
        bookedProduct.itinerary.forEach((itinerary, index) => {
            if(itinerary.url) {
                createEntityMigrationObject(collection, bookedProduct.id, `itinerary.${index}.image.url`, itinerary.url, nature)
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
        budgetProduct.itinerary.forEach((itinerary, index) => {
            if(itinerary.url) {
                createEntityMigrationObject(collection, budgetProduct.id, `itinerary.${index}.image.url`, itinerary.url, nature)
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

export function createBookingInvoiceMigrationObject(booking, nature) {
    if(booking.voucher) {
        createEntityMigrationObject('bookings', booking.id, 'voucher.url', booking.voucher.url, nature)
    }

    if(booking.voucherflights) {
        createEntityMigrationObject('bookings', booking.id, 'voucherflights.url', booking.voucherflights.url, nature)
    }

    if(booking.passport) {
        createEntityMigrationObject('bookings', booking.id, 'passport.url', booking.passport.url, nature)
    }

    if(booking.visaletter) {
        createEntityMigrationObject('bookings', booking.id, 'visaletter.url', booking.visaletter.url, nature)
    }

    if(booking.invoicesaerial) {
        booking.invoicesaerial.forEach((invoice, index) => {
            createEntityMigrationObject('bookings', booking.id, `invoicesaerial.${index}.url`, invoice.url, nature)
        })
    }

    if(booking.invoicesagency) {
        booking.invoicesagency.forEach((invoice, index) => {
            createEntityMigrationObject('bookings', booking.id, `invoicesagency.${index}.url`, invoice.url, nature)
        })
    }

    if(booking.invoicesprovider) {
        booking.invoicesprovider.forEach((invoice, index) => {
            createEntityMigrationObject('bookings', booking.id, `invoicesprovider.${index}.url`, invoice.url, nature)
        })
    }

    if(booking.invoicestravelersense) {
        booking.invoicestravelersense.forEach((invoice, index) => {
            createEntityMigrationObject('bookings', booking.id, `invoicestravelersense.${index}.url`, invoice.url, nature)
        })
    }
}

export function createManagementGroupMigrationObject(managementGroup, nature) {
    const collection = 'managementgroups'
    if(managementGroup.images) {
        if(managementGroup.images.logo && !managementGroup.images.photo) {
            createEntityMigrationObject(collection, managementGroup.id, 'images.logo.url', managementGroup.images.logo, nature)
        } else if(managementGroup.images.photo && !managementGroup.images.logo) {
            createEntityMigrationObject(collection, managementGroup.id, 'images.photo.url', managementGroup.images.photo, nature)
        } else if(managementGroup.images.logo && managementGroup.images.photo) {
            createEntityMigrationObject(collection, managementGroup.id, 'images.logo.url', managementGroup.images.logo, nature)
            createEntityMigrationObject(collection, managementGroup.id, 'images.photo.url', managementGroup.images.photo, nature)
        }
    } else {
        return;
    }
}

export function createProviderMigrationObject(provider, nature) {
    const collection = 'providers'

    if(provider.images) {
        if(provider.images.logo && !provider.images.photo) {
            createEntityMigrationObject(collection, provider.id, 'images.logo.url', provider.images.logo, nature)
        } else if(provider.images.photo && !provider.images.logo) {
            createEntityMigrationObject(collection, provider.id, 'images.photo.url', provider.images.photo, nature)
        } else if(provider.images.logo && provider.images.photo) {
            createEntityMigrationObject(collection, provider.id, 'images.logo.url', provider.images.logo, nature)
            createEntityMigrationObject(collection, provider.id, 'images.photo.url', provider.images.photo, nature)
        }
    }
}

export function createTripTagMigrationObject(tripTag, nature) {
    if(tripTag.image) {
        createEntityMigrationObject('tags', tripTag.id, 'image.url', tripTag.image.url, nature)
    }

    if(tripTag.imageFacebook) {
        createEntityMigrationObject('tags', tripTag.id, 'imageFacebook.url', tripTag.imageFacebook.url, nature)
    }
}

export function createTagMigrationObject(tag, nature) {
    if(tag.image) {
        createEntityMigrationObject('tags', tag.id, 'image.url', tag.image.url, nature)
    }
}

export function createTravelerMigrationObject(traveler, nature) {
    const collection = 'travelers'
    if(traveler.images) {
        if(traveler.images.logo && !traveler.images.photo) {
            createEntityMigrationObject(collection, traveler.id, 'images.logo.url', traveler.images.logo, nature)
        } else if(traveler.images.photo && !traveler.images.logo) {
            createEntityMigrationObject(collection, traveler.id, 'images.photo.url', traveler.images.photo, nature)
        } else if(traveler.images.logo && traveler.images.photo) {
            createEntityMigrationObject(collection, traveler.id, 'images.logo.url', traveler.images.logo, nature)
            createEntityMigrationObject(collection, traveler.id, 'images.photo.url', traveler.images.photo, nature)
        }
    } else {
        return;
    }
}

export function createAdminMigrationObject(admin, nature) {
    const collection = 'omtadmins'
    if(admin.images) {
        if(admin.images.logo && !admin.images.photo) {
            createEntityMigrationObject(collection, admin.id, 'images.logo.url', admin.images.logo, nature)
        } else if(admin.images.photo && !admin.images.logo) {
            createEntityMigrationObject(collection, admin.id, 'images.photo.url', admin.images.photo, nature)
        } else if(admin.images.logo && admin.images.photo) {
            createEntityMigrationObject(collection, admin.id, 'images.logo.url', admin.images.logo, nature)
            createEntityMigrationObject(collection, admin.id, 'images.photo.url', admin.images.photo, nature)
        }
    } else {
        return;
    }
}

export function createUserMigrationObject(user, nature) {
    const collection = 'users'
    if(user.image && user.image.url !== '') {
        createEntityMigrationObject(collection, user.id, 'image.url', user.image.url, nature)
    }
}

export function createDMCProductMigrationObject(dmcProduct, nature) {
    const collection = 'dmcproducts'
    if(dmcProduct.image) {
        createEntityMigrationObject(collection, dmcProduct.id, 'image.url', dmcProduct.image.url, nature)
    }

    if(dmcProduct.itinerary && dmcProduct.itinerary.length > 0) {
        dmcProduct.itinerary.forEach((itinerary, index) => {
            if(itinerary.url) {
                createEntityMigrationObject(collection, dmcProduct.id, `itinerary.${index}.image.url`, itinerary.url, nature)
            }
        })
    }
}

export function createDMCImageMigrationObject(dmcProductImage, nature) {
    const collection = 'dmcs'
    
    if(dmcProductImage.images) {
        if(dmcProductImage.images.logo && !dmcProductImage.images.photo) {
            createEntityMigrationObject(collection, dmcProductImage.id, 'images.logo.url', dmcProductImage.images.logo, nature)
        } else if(dmcProductImage.images.photo && !dmcProductImage.images.logo) {
            createEntityMigrationObject(collection, dmcProductImage.id, 'images.photo.url', dmcProductImage.images.photo, nature)
        } else if(dmcProductImage.images.logo && dmcProductImage.images.photo) {
            createEntityMigrationObject(collection, dmcProductImage.id, 'images.logo.url', dmcProductImage.images.logo, nature)
            createEntityMigrationObject(collection, dmcProductImage.id, 'images.photo.url', dmcProductImage.images.photo, nature)
        }
    }

    if(dmcProductImage.associateImages && dmcProductImage.associateImages.length > 0) {
        dmcProductImage.associateImages.forEach((image, index) => {
            if(image.url) {
                createEntityMigrationObject(collection, dmcProductImage.id, `additionalinfo.associations.${index}.image.url`, image.url, nature)
            }
        })
    }

    if(dmcProductImage.tourEscorts && dmcProductImage.tourEscorts.length > 0) {
        dmcProductImage.tourEscorts.forEach((tour, index) => {
            if(tour.url) {
                createEntityMigrationObject(collection, dmcProductImage.id, `tourEscorts.${index}.image.url`, tour.url, nature)
            }
        })
    }
}

export function createDMCFAQMigrationObject(dmcFAQ, nature) {
    const collection = 'dmc faqs'
    if(dmcFAQ.images && dmcFAQ.images.length > 0) {
        dmcFAQ.images.forEach(image => {
            createEntityMigrationObject(collection, dmcFAQ.id, 'images.url', image.url, nature)
        })
    }

    if(dmcFAQ.imageFacebook) {
        createEntityMigrationObject(collection, dmcFAQ.id, 'imageFacebook.url', dmcFAQ.imageFacebook.url, nature)
    }
}