import { downloadDMCRelatedImages, 
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
    downloadUserRelatedImages } from "./collectionsDownloader.js";
import dbClient from "./dbClient.js";

  async function run() {
    try {
        const client =  await dbClient.connect();
        const database = client.db("openmarkettravel")

        const dmcProductsCollection = database.collection('dmcproducts');
        const dmcCollection = database.collection('dmcs')
        const dmcFAQsCollection = database.collection('dmc faqs')
        await downloadDMCRelatedImages(dmcProductsCollection, dmcCollection, dmcFAQsCollection)

        const affiliatesCollection = database.collection('affiliates')
        const affiliatesFAQsCollection = database.collection('affiliate faqs')
        //await downloadAffiliateRelatedImages(affiliatesCollection, affiliatesFAQsCollection)

        // # Download images from banners
        const bannersCollection = database.collection('banners')
        //await downloadBannerRelatedImages(bannersCollection)

        //# Download images from booked products
        const bookedProductsCollection = database.collection('bookedproducts')
        //await downloadBookedProductsRelatedImages(bookedProductsCollection)
        
        const pagesCollection = database.collection('pages')
        const pageCategoriesCollection = database.collection('pagecategories')
        //await downloadPageRelatedImages(pagesCollection, pageCategoriesCollection)

        const destinationCountriesCollection = database.collection('destinationcountries')
        const destinationCountryZonesCollection = database.collection('destinationcountrieszones')
        //await downloadDestinationCountryRelatedImages(destinationCountriesCollection, destinationCountryZonesCollection)
        
        // // # Download images from budget products
        // // ### UNTESTED ###
        // // const budgetProductsCollection = database.collection('budgetproducts')
        // // const budgetProductsWithNonEmptyImages = await queries.findAllBudgetProductImages(budgetProductsCollection, 20)
        // // const budgetProductsNormalized = utils.normalizeBudgetProduct(budgetProductsWithNonEmptyImages)
        // // fetcher.downloadImagesFromBudgetProducts(budgetProductsNormalized)  
        // //#endregion

        // // # Download images from booking
        const bookingsCollection = database.collection('bookings2')
        //await downloadBookingInvoices(bookingsCollection)

        // // # Download images from management groups
        const managementGroupsCollection = database.collection('managementgroups')
        //await downloadManagementGroupRelatedImages(managementGroupsCollection)

        // // # Download images from providers
        const providersCollection = database.collection('providers')
        //await downloadProvidersRelatedImages(providersCollection)

        // // # Download images from trip tags
        const tagsCollection = database.collection('tags')
        const tripTagsCollection = database.collection('triptags')
        //await downloadTagsRelatedImages(tagsCollection, tripTagsCollection)

        // // # Download images from travelers
        const travelersCollection = database.collection('travelers')
        //await downloadTravelerRelatedImages(travelersCollection)

        // // # Download images from admin
        const adminCollection = database.collection('omtadmins') 
        //await downloadAdminRelatedImages(adminCollection)

        const userCollection = database.collection('users')
        //await downloadUserRelatedImages(userCollection)

    } finally {
        await dbClient.closeConnection();
      }
}

run().catch(console.error)