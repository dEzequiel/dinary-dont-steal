import * as queries from "./queries/index.js";
import * as utils from "./utils/index.js";
import  * as fetcher from "./utils/resourceFetchers.js";

async function downloadDMCRelatedImages(dmcProductsCollection, dmcCollection, dmcFAQsCollection) {
    const productsWithNonEmptyProductImageUrl = await queries.findAllDMCProductsImages(dmcProductsCollection, 20);
    const productsNormalized = utils.normalizeDMCProduct(productsWithNonEmptyProductImageUrl)
    fetcher.downloadImagesFromDMCProducts(productsNormalized)

    const dmcWithNonEmptyImages = await queries.findAllDMCImages(dmcCollection, 1, 20)
    const dmcsNormalized = utils.normalizeDMC(dmcWithNonEmptyImages) 
    fetcher.downloadImagesFromDMC(dmcsNormalized)
    
    const dmcFAQsWithNonEmptyImages = await queries.findAllDMCFAQImages(dmcFAQsCollection, 20)
    const dmcFAQsWithNonEmptyImagesNormalized = utils.normalizeDMCFAQ(dmcFAQsWithNonEmptyImages)
    fetcher.downloadImagesFromDMCFAQs(dmcFAQsWithNonEmptyImagesNormalized)
}

async function downloadAffiliateRelatedImages(affiliatesCollection, affiliatesFAQsCollection) {
    const affiliatesWithNonEmptyImages = await queries.findAllAffiliatesImages(affiliatesCollection, 300)
    const affiliatesNormalized = utils.normalizeAffilates(affiliatesWithNonEmptyImages)
    fetcher.downloadAffiliatesImages(affiliatesNormalized)

    const affiliatesFAQsWithNonEmptyImages = await queries.findAllAffiliatesFAQImages(affiliatesFAQsCollection, 300)
    const affiliatesFAQsNormalized = utils.normalizeAffiliateFAQ(affiliatesFAQsWithNonEmptyImages)
    fetcher.downloadAffiliatesFAQImages(affiliatesFAQsNormalized)
}

async function downloadPageRelatedImages(pagesCollection, pageCategoriesCollection) {
    const pagesWithNonEmptyImages = await queries.findAllPageImages(pagesCollection, 20)
    const pagesWithNonEmptyImagesNormalized = utils.normalizePage(pagesWithNonEmptyImages)
    fetcher.downloadImagesFromPages(pagesWithNonEmptyImagesNormalized)

    const pageCategoriesWithNonEmptyImages = await queries.findAllPageCategoryImages(pageCategoriesCollection, 300)
    const pageCategoriesNormalized = utils.normalizePageCategories(pageCategoriesWithNonEmptyImages)
    fetcher.downloadImagesFromPageCategories(pageCategoriesNormalized)
}

async function downloadDestinationCountryRelatedImages(destinationCountriesCollection, destinationCountryZonesCollection) {
    const destinationCountriesWithNonEmptyImages = await queries.findAllDestinationCountriesImages(destinationCountriesCollection, 10)
    const destinationCountriesNormalized = utils.normalizeDestinationCountry(destinationCountriesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountries(destinationCountriesNormalized)

    const destinationCountryZonesWithNonEmptyImages = await queries.findAllDestinationCountryZonesImages(destinationCountryZonesCollection, 10)
    const destinationCountryZonesNormalized = utils.normalizeDestinationCountryZones(destinationCountryZonesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountryZones(destinationCountryZonesNormalized)
}

async function downloadTagsRelatedImages(tagsCollection, tripTagsCollection) {
    
        const tripTagsWithNonEmptyImages = await queries.findAllTripTagImages(tripTagsCollection, 20)
        const tripTagsWithNonEmptyImagesNormalized = utils.normalizeTripTags(tripTagsWithNonEmptyImages)
        fetcher.downloadImagesFromTripTags(tripTagsWithNonEmptyImagesNormalized)
        
        const tagsWithNonEmptyImages = await queries.findAllTagImages(tagsCollection, 20)
        const tagsWithNonEmptyImagesNormalized = utils.normalizeTags(tagsWithNonEmptyImages)
        fetcher.downloadImagesFromTags(tagsWithNonEmptyImagesNormalized)
}

async function downloadBannerRelatedImages(bannersCollection) {
    const bannersWithNonEmptyImages = await queries.findAllBannersWithImages(bannersCollection, 20)
    const bannersNormalized = utils.normalizeBanner(bannersWithNonEmptyImages)
    fetcher.downloadImagesFromBanners(bannersNormalized)
}

async function downloadBookedProductsRelatedImages(bookedProductsCollection) {
    const bookedProductsWithNonEmptyImages = await queries.findAllBookedProductsImages(bookedProductsCollection, 20)
    const bookedProductsNormalized = utils.normalizeBookedProduct(bookedProductsWithNonEmptyImages)
    fetcher.downloadImagesFromBookedPoducts(bookedProductsNormalized)

}

async function downloadBookingInvoices(bookingsCollection) {
    const bookingWithNonEmptyImages = await queries.findAllBookingImages(bookingsCollection, 50)
    const bookingsWithNonEmptyImagesNormalized = utils.normalizeBookings(bookingWithNonEmptyImages)
    fetcher.downloadInvoicesFromBookings(bookingsWithNonEmptyImagesNormalized)

}

async function downloadManagementGroupRelatedImages(managementGroupsCollection) {
    const managementGroupsWithNonEmptyImages = await queries.findAllManagementGroupImages(managementGroupsCollection, 50)
    const managementGroupsWithNonEmptyImagesNormalized = utils.normalizeManagementGroup(managementGroupsWithNonEmptyImages)
    fetcher.downloadImagesFromManagementGroups(managementGroupsWithNonEmptyImagesNormalized)
}

async function downloadProvidersRelatedImages(providersCollection) {
    const providersWithNonEmptyImages = await queries.findAllProviderImages(providersCollection, 50)
    const providersWithNonEmptyImagesNormalized = utils.normalizeProvider(providersWithNonEmptyImages)
    fetcher.downloadImagesFromProviders(providersWithNonEmptyImagesNormalized)
}

async function downloadAdminRelatedImages(adminsCollection) {
    const adminsWithNonEmptyImages = await queries.findAllAdminImages(adminsCollection, 20)
    const adminsWithNonEmptyImagesNormalized = utils.normalizeAdmin(adminsWithNonEmptyImages)
    fetcher.downloadImagesFromAdmins(adminsWithNonEmptyImagesNormalized)
}

async function downloadTravelerRelatedImages(travelersCollection) {
    const travelersWithNonEmptyImages = await queries.findAllTravelerImages(travelersCollection, 20)
    const travelersWithNonEmptyImagesNormalized = utils.normalizeTraveler(travelersWithNonEmptyImages)
    fetcher.downloadImagesFromTraveler(travelersWithNonEmptyImagesNormalized)

}

export { downloadDMCRelatedImages, 
    downloadAffiliateRelatedImages,
    downloadPageRelatedImages,
    downloadDestinationCountryRelatedImages,
    downloadTagsRelatedImages,
    downloadBannerRelatedImages,
    downloadBookedProductsRelatedImages,
    downloadBookingInvoices,
    downloadManagementGroupRelatedImages,
    downloadProvidersRelatedImages,
    downloadAdminRelatedImages,
    downloadTravelerRelatedImages }