import { NormalizerFactory } from "../normalizes/base/normalizerFactory.js";

//#region NORMALIZERS
const dmcNormalizer = NormalizerFactory.createNormalizer('DMC');
const dmcProductNormalizer = NormalizerFactory.createNormalizer('DMCProduct');
const affiliateNormalizer = NormalizerFactory.createNormalizer('Affiliate');
const affiliateFAQNormalizer = NormalizerFactory.createNormalizer('AffiliateFAQ');
const bookedProductNormalizer = NormalizerFactory.createNormalizer('BookedProduct');
const budgetProductNormalizer = NormalizerFactory.createNormalizer('BudgetProduct');
const dmcFaqNormalizer = NormalizerFactory.createNormalizer('DMCFAQ');
const managementGroupNormalizer = NormalizerFactory.createNormalizer('ManagementGroup');
const pageNormalizer = NormalizerFactory.createNormalizer('Page');
const pageCategoryNormalizer = NormalizerFactory.createNormalizer('PageCategory');
const providerNormalizer = NormalizerFactory.createNormalizer('Provider');
const tripTagNormalizer = NormalizerFactory.createNormalizer('TripTag');
const travelerNormalizer = NormalizerFactory.createNormalizer('Traveler');
const adminNormalizer = NormalizerFactory.createNormalizer('Admin');
const destinationCountryNormalizer = NormalizerFactory.createNormalizer('DestinationCountry');
const destinationCountryZoneNormalizer = NormalizerFactory.createNormalizer('DestinationCountryZone');
//#endregion

export function normalizeDMCProduct(products) {
    let normalizedProducts = []
    products.forEach(product => {
        normalizedProducts.push(
            dmcProductNormalizer.normalize(product.dmc, product.name, product.productimage, product.dmcDetails.name, product.itinerary))
        })
    return normalizedProducts;

}; 

export function normalizeDMC(dmcs) {
    let normalizedDMCs = []
    dmcs.forEach(dmc => {
        normalizedDMCs.push(dmcNormalizer.normalize(dmc._id, dmc.name, dmc.images, dmc.additionalinfo.associations, dmc.tourEscorts))
    });
    return normalizedDMCs
}

export function normalizeDMCFAQ(dmcs) {
    let normalizedDMCFAQs = []
    dmcs.forEach(dmc => {
        normalizedDMCFAQs.push(dmcFaqNormalizer.normalize(dmc._id, dmc.slug, dmc.images, dmc.imageFacebook))
    });
    
    return normalizedDMCFAQs

}

export function normalizeAffilates(affiliates) {
    let normalizedAffiliates = []
    affiliates.forEach(affiliate => {
        normalizedAffiliates.push(affiliateNormalizer.normalize(affiliate._id, affiliate.userId, affiliate.name, affiliate.images))
    });
    return normalizedAffiliates
}

export function normalizeManagementGroup(managementGroups) {
    let normalizedManagementGroups = []
    managementGroups.forEach(managementGroup => {
        normalizedManagementGroups.push(managementGroupNormalizer.normalize(managementGroup._id, managementGroup.name, managementGroup.images))
    });

    return normalizedManagementGroups

}

export function normalizeAffiliateFAQ(affiliateFAQs) {
    let normalizedAffiliateFAQs = []
    affiliateFAQs.forEach(affiliateFAQ => {
        normalizedAffiliateFAQs.push(affiliateFAQNormalizer.normalize(affiliateFAQ._id, affiliateFAQ.title, affiliateFAQ.slug, affiliateFAQ.images))
    });
    return normalizedAffiliateFAQs
}


export function normalizeBanner(banners) {
    let normalizedBanners = []
    banners.forEach(banner => {
        normalizedBanners.push({
            id: String(banner._id),
            name: banner.slug,
            image: { url: banner.image.url }
        })
    });

    return normalizedBanners
}

export function normalizeBookedProduct(bookedProducts) {
    let normalizedBookedProducts = []
    bookedProducts.forEach(bookedProduct => {
        normalizedBookedProducts.push(bookedProductNormalizer.normalize(bookedProduct.slug, bookedProduct.productimage, bookedProduct.itinerary))
    });

    return normalizedBookedProducts
}

export function normalizeBudgetProduct(budgetProducts) {
    let normalizedBudgetProducts = []
    budgetProducts.forEach(budgetProduct => {
        normalizedBudgetProducts.push(budgetProductNormalizer.normalize(budgetProduct.name, budgetProduct.slug, budgetProduct.productImage, budgetProduct.itinerary))
    });

    return normalizedBudgetProducts
}

export function normalizePage(pages) {
    let normalizedPages = []
    pages.forEach(page => {
        normalizedPages.push(pageNormalizer.normalize(page._id, page.slug, page.title, page.image, page.imageFacebook, page.imageGalery))
    });

    return normalizedPages
}

export function normalizePageCategories(pageCategories) {
    let normalizedPageCategories = []
    pageCategories.forEach(pageCategory => {
        normalizedPageCategories.push(pageCategoryNormalizer.normalize(pageCategory.mainImage, pageCategory.imageFacebook))
    });

    return normalizedPageCategories
}

export function normalizeProvider(providers) {
    let normalizedProviders = []
    providers.forEach(provider => {
        normalizedProviders.push(providerNormalizer.normalize(provider.name, provider.slug, provider.images))
    });

    return normalizedProviders
}

export function normalizeTripTags(tripTags) {
    let normalizedTripTags = []
    tripTags.forEach(tripTag => {
        normalizedTripTags.push(tripTagNormalizer.normalize(tripTag.slug, tripTag.title, tripTag.mainImage, tripTag.imageFacebook))
    });

    return normalizedTripTags   
}

export function normalizeTraveler(travelers) {
    let normalizedTravelers = []
    travelers.forEach(traveler => {        
        normalizedTravelers.push(travelerNormalizer.normalize(traveler.slug, traveler.firstname, traveler.lastname, traveler.images))
    });

    return normalizedTravelers
}

export function normalizeAdmin(admins) {
    let normalizedAdmins = []
    admins.forEach(admin => {
        normalizedAdmins.push(adminNormalizer.normalize(admin._id, admin.name, admin.images))
    });

    return normalizedAdmins
}

export function normalizeDestinationCountry(destinationCountries) {
    let normalizedDestinationCountries = []
    destinationCountries.forEach(destinationCountry => {
        normalizedDestinationCountries.push(destinationCountryNormalizer.normalize(destinationCountry.slug, destinationCountry.title_es, destinationCountry.mainImage, destinationCountry.imageFacebook))
    })

    return normalizedDestinationCountries
}

export function normalizeDestinationCountryZones(destinationCountryZones) {
    let normalizedDestinationContryZones = []
    destinationCountryZones.forEach(destinationCountryZone => {
        normalizedDestinationContryZones.push(destinationCountryZoneNormalizer.normalize(destinationCountryZone.slug, destinationCountryZone.title_es, destinationCountryZone.mainImage, destinationCountryZone.iconImage))
    });

    return normalizedDestinationContryZones
}