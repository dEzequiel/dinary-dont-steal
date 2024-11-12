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

async function downloadDMCRelatedImages(dmcProductsCollection, dmcCollection, dmcFAQsCollection, skip, limit) {
    await downloadDMCImagesFromDMCProducts(dmcProductsCollection, skip, limit);
    await downloadImagesFromDMCProducts(dmcCollection, skip, limit);
    await downloadImagesFromDMCFaqs(dmcFAQsCollection, skip, limit);
}
// #endregion

// #region Affiliate
const downloadAffiliateImages = async (affiliatesCollection, skip, limit) => {
    const affiliatesWithNonEmptyImages = await queries.findAllAffiliatesImages(affiliatesCollection, skip, limit)
    const affiliatesNormalized = utils.normalizeAffilates(affiliatesWithNonEmptyImages)
    fetcher.downloadAffiliatesImages(affiliatesNormalized)
}
const downloadAffiliateFAQImages = async (affiliatesFAQsCollection) => {
    const affiliatesFAQsWithNonEmptyImages = await queries.findAllAffiliatesFAQImages(affiliatesFAQsCollection, 300)
    const affiliatesFAQsNormalized = utils.normalizeAffiliateFAQ(affiliatesFAQsWithNonEmptyImages)
    fetcher.downloadAffiliatesFAQImages(affiliatesFAQsNormalized)
}

async function downloadAffiliateRelatedImages(affiliatesCollection, affiliatesFAQsCollection, skip, limit) {
    await downloadAffiliateImages(affiliatesCollection, skip, limit)
    await downloadAffiliateFAQImages(affiliatesFAQsCollection, skip, limit)
}
// #endregion

// #region Page
const downloadPageImages = async (pagesCollection, skip, limit) => {
    const pagesWithNonEmptyImages = await queries.findAllPageImages(pagesCollection, skip, limit)
    const pagesWithNonEmptyImagesNormalized = utils.normalizePage(pagesWithNonEmptyImages)
    fetcher.downloadImagesFromPages(pagesWithNonEmptyImagesNormalized)
}

const downloadPageCategoryImages = async (pageCategoriesCollection, skip, limit) => {
    const pageCategoriesWithNonEmptyImages = await queries.findAllPageCategoryImages(pageCategoriesCollection, skip, limit)
    const pageCategoriesNormalized = utils.normalizePageCategories(pageCategoriesWithNonEmptyImages)
    fetcher.downloadImagesFromPageCategories(pageCategoriesNormalized)
}

async function downloadPageRelatedImages(pagesCollection, pageCategoriesCollection, skip, limit) {
    await downloadPageImages(pagesCollection, skip, limit)
    await downloadPageCategoryImages(pageCategoriesCollection, skip, limit)
}

// #endregion

// #region DestinationCountry
const downloadDestinationCountryImages = async (destinationCountriesCollection, skip, limit) => {
    const destinationCountriesWithNonEmptyImages = await queries.findAllDestinationCountriesImages(destinationCountriesCollection, skip, limit)
    const destinationCountriesNormalized = utils.normalizeDestinationCountry(destinationCountriesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountries(destinationCountriesNormalized)
}

const downloadDestinationCountryZonesImages = async (destinationCountryZonesCollection, skip, limit) => {
    const destinationCountryZonesWithNonEmptyImages = await queries.findAllDestinationCountryZonesImages(destinationCountryZonesCollection, skip, limit)
    const destinationCountryZonesNormalized = utils.normalizeDestinationCountryZones(destinationCountryZonesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCountryZones(destinationCountryZonesNormalized) 
}

async function downloadDestinationCountryRelatedImages(destinationCountriesCollection, destinationCountryZonesCollection, skip, limit) {
    await downloadDestinationCountryImages(destinationCountriesCollection, skip, limit)
    await downloadDestinationCountryZonesImages(destinationCountryZonesCollection, skip, limit)
}
// #endregion

// #region Tags
const downloadTagsImagesFromTripTags = async (tripTagsCollection, skip, limit) => {
    const tripTagsWithNonEmptyImages = await queries.findAllTripTagImages(tripTagsCollection, skip, limit)
    const tripTagsWithNonEmptyImagesNormalized = utils.normalizeTripTags(tripTagsWithNonEmptyImages)
    fetcher.downloadImagesFromTripTags(tripTagsWithNonEmptyImagesNormalized)
}

const downloadTagsImagesFromTags = async (tagsCollection, skip, limit) => {
    const tagsWithNonEmptyImages = await queries.findAllTagImages(tagsCollection, skip, limit)
    const tagsWithNonEmptyImagesNormalized = utils.normalizeTags(tagsWithNonEmptyImages)
    fetcher.downloadImagesFromTags(tagsWithNonEmptyImagesNormalized)
}

async function downloadTagsRelatedImages(tagsCollection, tripTagsCollection, skip, limit) {
    await downloadTagsImagesFromTripTags(tripTagsCollection, skip, limit)
    await downloadTagsImagesFromTags(tagsCollection, skip, limit)
}
// #endregion

// #region Banner
async function downloadBannerRelatedImages(bannersCollection, skip, limit) {
    const bannersWithNonEmptyImages = await queries.findAllBannersWithImages(bannersCollection, skip, limit)
    const bannersNormalized = utils.normalizeBanner(bannersWithNonEmptyImages)
    fetcher.downloadImagesFromBanners(bannersNormalized)
}

async function downloadBookedProductsRelatedImages(bookedProductsCollection, skip, limit) {
    const bookedProductsWithNonEmptyImages = await queries.findAllBookedProductsImages(bookedProductsCollection, skip, limit)
    const bookedProductsNormalized = utils.normalizeBookedProduct(bookedProductsWithNonEmptyImages)
    fetcher.downloadImagesFromBookedPoducts(bookedProductsNormalized)

}

async function downloadBookingInvoices(bookingsCollection, skip, limit) {
    const bookingWithNonEmptyImages = await queries.findAllBookingImages(bookingsCollection, skip, limit)
    const bookingsWithNonEmptyImagesNormalized = utils.normalizeBookings(bookingWithNonEmptyImages)
    fetcher.downloadInvoicesFromBookings(bookingsWithNonEmptyImagesNormalized)

}

async function downloadManagementGroupRelatedImages(managementGroupsCollection, skip, limit) {
    const managementGroupsWithNonEmptyImages = await queries.findAllManagementGroupImages(managementGroupsCollection, skip, limit)
    const managementGroupsWithNonEmptyImagesNormalized = utils.normalizeManagementGroup(managementGroupsWithNonEmptyImages)
    fetcher.downloadImagesFromManagementGroups(managementGroupsWithNonEmptyImagesNormalized)
}

async function downloadProvidersRelatedImages(providersCollection, skip, limit) {
    const providersWithNonEmptyImages = await queries.findAllProviderImages(providersCollection, skip, limit)
    const providersWithNonEmptyImagesNormalized = utils.normalizeProvider(providersWithNonEmptyImages)
    fetcher.downloadImagesFromProviders(providersWithNonEmptyImagesNormalized)
}

async function downloadAdminRelatedImages(adminsCollection, skip, limit) {
    const adminsWithNonEmptyImages = await queries.findAllAdminImages(adminsCollection, skip, limit)
    const adminsWithNonEmptyImagesNormalized = utils.normalizeAdmin(adminsWithNonEmptyImages)
    fetcher.downloadImagesFromAdmins(adminsWithNonEmptyImagesNormalized)
}

async function downloadUserRelatedImages(usersCollection, skip, limit) {
    const usersWithNonEmptyImages = await queries.findAllUserImages(usersCollection, skip, limit)
    const usersWithNonEmptyImagesNormalized = utils.normalizeUser(usersWithNonEmptyImages)
    fetcher.downloadImagesFromUsers(usersWithNonEmptyImagesNormalized)
}

async function downloadTravelerRelatedImages(travelersCollection, skip, limit) {
    const travelersWithNonEmptyImages = await queries.findAllTravelerImages(travelersCollection, skip, limit)
    const travelersWithNonEmptyImagesNormalized = utils.normalizeTraveler(travelersWithNonEmptyImages)
    fetcher.downloadImagesFromTraveler(travelersWithNonEmptyImagesNormalized)

}

async function downloadBudgetFiles(budgetCollection, skip, limit) {
    const budgetProductsWithNonEmptyImages = await queries.findAllBudgetFiles(budgetCollection, skip, limit)
    const budgetProductsNormalized = utils.normalizeBudget(budgetProductsWithNonEmptyImages)
    fetcher.downloadImagesFromBudgets(budgetProductsNormalized)
}

async function downloadBudgetProducts(budgetProductsCollection, skip, limit) {
    const budgetProductsWithNonEmptyImages = await queries.findAllBudgetProductImages(budgetProductsCollection, skip, limit)
    const budgetProductsNormalized = utils.normalizeBudgetProduct(budgetProductsWithNonEmptyImages)
    fetcher.downloadImagesFromBudgetProducts(budgetProductsNormalized)
}

async function downloadDestinationCitiesImages(destinationCitiesCollection, skip, limit) {
    const destinationCitiesWithNonEmptyImages = await queries.findAllDestinationCityImages(destinationCitiesCollection, skip, limit)
    const destinationCitiesNormalized = utils.normalizeDestinationCities(destinationCitiesWithNonEmptyImages)
    fetcher.downloadImagesFromDestinationCities(destinationCitiesNormalized)
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
    downloadBudgetFiles,
    downloadDestinationCitiesImages,
    downloadBudgetProducts
 }