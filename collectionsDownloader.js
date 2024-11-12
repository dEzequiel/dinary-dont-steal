import * as queries from "./queries/index.js";
import * as utils from "./utils/index.js";
import  * as fetcher from "./utils/resourceFetchers.js";

// #region DMC
const downloadDMCImagesFromDMCProducts = async (dmcProductsCollection, skip, limit) => {
    const productsWithNonEmptyProductImageUrl = await queries.findAllDMCProductsImages(dmcProductsCollection);
    const productsNormalized = utils.normalizeDMCProduct(productsWithNonEmptyProductImageUrl)
    fetcher.downloadImagesFromDMCProducts(productsNormalized)
}
const downloadImagesFromDMCProducts = async (dmcCollection, skip, limit) => {
    const dmcWithNonEmptyImages = await queries.findAllDMCImages(dmcCollection, skip, limit)
    const dmcsNormalized = utils.normalizeDMC(dmcWithNonEmptyImages) 
    fetcher.downloadImagesFromDMC(dmcsNormalized)
}
const downloadImagesFromDMCFaqs = async (dmcFAQsCollection, skip, limit) => {
    const dmcFAQsWithNonEmptyImages = await queries.findAllDMCFAQImages(dmcFAQsCollection, skip, limit)
    const dmcFAQsWithNonEmptyImagesNormalized = utils.normalizeDMCFAQ(dmcFAQsWithNonEmptyImages)
    fetcher.downloadImagesFromDMCFAQs(dmcFAQsWithNonEmptyImagesNormalized)
}

async function downloadDMCRelatedImages(dmcProductsCollection, dmcCollection, dmcFAQsCollection) {
    //await downloadDMCImagesFromDMCProducts(dmcProductsCollection);
    await downloadImagesFromDMCProducts(dmcCollection, 10, 5);
    //await downloadImagesFromDMCFaqs(dmcFAQsCollection);
}
// #endregion

// #region Affiliate
const downloadAffiliateImages = async (affiliatesCollection) => {
    const affiliatesWithNonEmptyImages = await queries.findAllAffiliatesImages(affiliatesCollection, 300)
    const affiliatesNormalized = utils.normalizeAffilates(affiliatesWithNonEmptyImages)
    fetcher.downloadAffiliatesImages(affiliatesNormalized)
}
const downloadAffiliateFAQImages = async (affiliatesFAQsCollection) => {
    const affiliatesFAQsWithNonEmptyImages = await queries.findAllAffiliatesFAQImages(affiliatesFAQsCollection, 300)
    const affiliatesFAQsNormalized = utils.normalizeAffiliateFAQ(affiliatesFAQsWithNonEmptyImages)
    fetcher.downloadAffiliatesFAQImages(affiliatesFAQsNormalized)
}

async function downloadAffiliateRelatedImages(affiliatesCollection, affiliatesFAQsCollection) {
    await downloadAffiliateImages(affiliatesCollection)
    await downloadAffiliateFAQImages(affiliatesFAQsCollection)
}
// #endregion

// #region Page
const downloadPageImages = async (pagesCollection) => {
    const pagesWithNonEmptyImages = await queries.findAllPageImages(pagesCollection, 20)
    const pagesWithNonEmptyImagesNormalized = utils.normalizePage(pagesWithNonEmptyImages)
    fetcher.downloadImagesFromPages(pagesWithNonEmptyImagesNormalized)
}

const downloadPageCategoryImages = async (pageCategoriesCollection) => {
    const pageCategoriesWithNonEmptyImages = await queries.findAllPageCategoryImages(pageCategoriesCollection, 300)
    const pageCategoriesNormalized = utils.normalizePageCategories(pageCategoriesWithNonEmptyImages)
    fetcher.downloadImagesFromPageCategories(pageCategoriesNormalized)
}

async function downloadPageRelatedImages(pagesCollection, pageCategoriesCollection) {
    await downloadPageImages(pagesCollection)
    await downloadPageCategoryImages(pageCategoriesCollection)
}

// #endregion

// #region DestinationCountry
const downloadDestinationCountryImages = async (destinationCountriesCollection) => {
    const destinationCountriesWithNonEmptyImages = await queries.findAllDestinationCountriesImages(destinationCountriesCollection, 10)
    const destinationCountriesNormalized = utils.normalizeDestinationCountry(destinationCountriesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountries(destinationCountriesNormalized)
}

const downloadDestinationCountryZonesImages = async (destinationCountryZonesCollection) => {
    const destinationCountryZonesWithNonEmptyImages = await queries.findAllDestinationCountryZonesImages(destinationCountryZonesCollection, 10)
    const destinationCountryZonesNormalized = utils.normalizeDestinationCountryZones(destinationCountryZonesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountryZones(destinationCountryZonesNormalized) 
}

async function downloadDestinationCountryRelatedImages(destinationCountriesCollection, destinationCountryZonesCollection) {
    await downloadDestinationCountryImages(destinationCountriesCollection)
    await downloadDestinationCountryZonesImages(destinationCountryZonesCollection)
}
// #endregion

// #region Tags
const downloadTagsImagesFromTripTags = async (tripTagsCollection) => {
    const tripTagsWithNonEmptyImages = await queries.findAllTripTagImages(tripTagsCollection, 20)
    const tripTagsWithNonEmptyImagesNormalized = utils.normalizeTripTags(tripTagsWithNonEmptyImages)
    fetcher.downloadImagesFromTripTags(tripTagsWithNonEmptyImagesNormalized)
}

const downloadTagsImagesFromTags = async (tagsCollection) => {
    const tagsWithNonEmptyImages = await queries.findAllTagImages(tagsCollection, 20)
    const tagsWithNonEmptyImagesNormalized = utils.normalizeTags(tagsWithNonEmptyImages)
    fetcher.downloadImagesFromTags(tagsWithNonEmptyImagesNormalized)
}

async function downloadTagsRelatedImages(tagsCollection, tripTagsCollection) {
    await downloadTagsImagesFromTripTags(tripTagsCollection)
    await downloadTagsImagesFromTags(tagsCollection)
}
// #endregion

// #region Banner
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

async function downloadUserRelatedImages(usersCollection) {
    const usersWithNonEmptyImages = await queries.findAllUserImages(usersCollection, 0, 0)
    const usersWithNonEmptyImagesNormalized = utils.normalizeUser(usersWithNonEmptyImages)
    fetcher.downloadImagesFromUsers(usersWithNonEmptyImagesNormalized)
}

async function downloadTravelerRelatedImages(travelersCollection) {
    const travelersWithNonEmptyImages = await queries.findAllTravelerImages(travelersCollection, 20)
    const travelersWithNonEmptyImagesNormalized = utils.normalizeTraveler(travelersWithNonEmptyImages)
    fetcher.downloadImagesFromTraveler(travelersWithNonEmptyImagesNormalized)

}

async function downloadBudgetFiles(budgetCollection) {
    const budgetProductsWithNonEmptyImages = await queries.findAllBudgetFiles(budgetCollection, 20)
    const budgetProductsNormalized = utils.normalizeBudget(budgetProductsWithNonEmptyImages)
    fetcher.downloadImagesFromBudgets(budgetProductsNormalized)
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
    downloadTravelerRelatedImages,
    downloadUserRelatedImages,
    downloadBudgetFiles
 }