import { NormalizerFactory } from "../normalizes/base/normalizerFactory.js";

//#region NORMALIZERS
const dmcNormalizer = NormalizerFactory.createNormalizer('DMC');
const dmcProductNormalizer = NormalizerFactory.createNormalizer('DMCProduct');
const affiliateNormalizer = NormalizerFactory.createNormalizer('Affiliate');
const affiliateFAQNormalizer = NormalizerFactory.createNormalizer('AffiliateFAQ');
const bookedProductNormalizer = NormalizerFactory.createNormalizer('BookedProduct');
const budgetProductNormalizer = NormalizerFactory.createNormalizer('BudgetProduct');
const budgetNormalizer = NormalizerFactory.createNormalizer('Budget');
const dmcFaqNormalizer = NormalizerFactory.createNormalizer('DMCFAQ');
const managementGroupNormalizer = NormalizerFactory.createNormalizer('ManagementGroup');
const pageNormalizer = NormalizerFactory.createNormalizer('Page');
const pageCategoryNormalizer = NormalizerFactory.createNormalizer('PageCategory');
const providerNormalizer = NormalizerFactory.createNormalizer('Provider');
const tripTagNormalizer = NormalizerFactory.createNormalizer('TripTag');
const travelerNormalizer = NormalizerFactory.createNormalizer('Traveler');
const adminNormalizer = NormalizerFactory.createNormalizer('Admin');
const userNormalizer = NormalizerFactory.createNormalizer('User');
const destinationCountryNormalizer = NormalizerFactory.createNormalizer('DestinationCountry');
const destinationCountryZoneNormalizer = NormalizerFactory.createNormalizer('DestinationCountryZone');
const destinationCityNormalizer = NormalizerFactory.createNormalizer('DestinationCity');
const tagNormalizer = NormalizerFactory.createNormalizer('Tag');
const bookingNormalizer = NormalizerFactory.createNormalizer('Booking');
const invoiceNormalizer = NormalizerFactory.createNormalizer('Invoice');
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

export function normalizeBookings(bookings) {
    let normalizedBookings = []
    bookings.forEach(booking => {
        normalizedBookings.push(bookingNormalizer.normalize(booking.idBooking, booking.voucher, booking.voucherflights, booking.passport, booking.visaletter, booking.invoicesaerial, booking.invoicesagency, booking.invoicesprovider, booking.invoicestravelersense))
    });

    return normalizedBookings
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
        normalizedBookedProducts.push(bookedProductNormalizer.normalize(bookedProduct._id, bookedProduct.slug, bookedProduct.productimage, bookedProduct.itinerary))
    });

    return normalizedBookedProducts
}

export function normalizeBudgetProduct(budgetProducts) {
    let normalizedBudgetProducts = []
    budgetProducts.forEach(budgetProduct => {
        normalizedBudgetProducts.push(budgetProductNormalizer.normalize(budgetProduct._id, budgetProduct.name, budgetProduct.slug, budgetProduct.productImage, budgetProduct.itinerary))
    });

    return normalizedBudgetProducts
}

export function normalizeBudget(budgets) {
    let normalizedBudgets = []
    budgets.forEach(budget => {
        normalizedBudgets.push(budgetNormalizer.normalize(budget._id, budget.code, budget.vocuher, budget.passportfile, budget.visaletterfile, budget.invoicesaerial, budget.invoicesagency, budget.invoicesprovider, budget.invoicestravelersense))
    });

    return normalizedBudgets
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
        normalizedPageCategories.push(pageCategoryNormalizer.normalize(pageCategory._id, pageCategory.name, pageCategory.mainImage, pageCategory.imageFacebook))
    });

    return normalizedPageCategories
}

export function normalizeProvider(providers) {
    let normalizedProviders = []
    providers.forEach(provider => {
        normalizedProviders.push(providerNormalizer.normalize(provider._id, provider.name, provider.slug, provider.images))
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

export function normalizeTags(tags) {
    let normalizedTags = []
    tags.forEach(tag => {
        normalizedTags.push(tagNormalizer.normalize(tag.mainImage))
    });

    return normalizedTags

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

export function normalizeUser(users) {
    let normalizedUsers = []
    users.forEach(user => {
        normalizedUsers.push(userNormalizer.normalize(user._id, user.username, user.photo))
    });

    return normalizedUsers
}

export function normalizeDestinationCountry(destinationCountries) {
    let normalizedDestinationCountries = []
    destinationCountries.forEach(destinationCountry => {
        normalizedDestinationCountries.push(destinationCountryNormalizer.normalize(destinationCountry._id, destinationCountry.slug, destinationCountry.title_es, destinationCountry.mainImage, destinationCountry.imageFacebook))
    })

    return normalizedDestinationCountries
}

export function normalizeDestinationCountryZones(destinationCountryZones) {
    let normalizedDestinationContryZones = []
    destinationCountryZones.forEach(destinationCountryZone => {
        normalizedDestinationContryZones.push(destinationCountryZoneNormalizer.normalize(destinationCountryZone._id, destinationCountryZone.slug, destinationCountryZone.title_es, destinationCountryZone.mainImage, destinationCountryZone.iconImage))
    });

    return normalizedDestinationContryZones
}

export function normalizeDestinationCities(destinationCities) {
    let normalizedDestinationCities = []
    destinationCities.forEach(destinationCity => {
        normalizedDestinationCities.push(destinationCityNormalizer.normalize(destinationCity._id, destinationCity.slug, destinationCity.mainImage, destinationCity.imageFacebook))
    });

    return normalizedDestinationCities
}

export function normalizeInvoices(invoices) {
    let normalizedInvoices = []
    invoices.forEach(invoice => {
        normalizedInvoices.push(invoiceNormalizer.normalize(invoice.name, invoice.file))
    });

    return normalizedInvoices
}