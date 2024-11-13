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
    downloadUserRelatedImages,
    downloadBudgetFiles, 
    downloadDestinationCitiesImages,
    downloadBudgetProducts} 
from "./collectionsDownloader.js";
import dbClient from "./dbClient.js";
import fs from 'fs';
import { migration_objects } from "./utils/migrations/createEntityMigrationObject.js";
  async function run() {
    try {
        const client =  await dbClient.connect();
        const database = client.db("openmarkettravel")

        //#region Tested
        const dmcProductsCollection = database.collection('dmcproducts');
        const dmcCollection = database.collection('dmcs')
        const dmcFAQsCollection = database.collection('dmc faqs')
        await downloadDMCRelatedImages(dmcProductsCollection, dmcCollection, dmcFAQsCollection, 0, 0)

        const affiliatesCollection = database.collection('affiliates')
        const affiliatesFAQsCollection = database.collection('affiliate faqs')
        await downloadAffiliateRelatedImages(affiliatesCollection, affiliatesFAQsCollection, 0, 10)

        const bannersCollection = database.collection('banners')
        await downloadBannerRelatedImages(bannersCollection, 0, 0)

        const bookedProductsCollection = database.collection('bookedproducts')
        await downloadBookedProductsRelatedImages(bookedProductsCollection, 0, 0)

        const pagesCollection = database.collection('pages')
        const pageCategoriesCollection = database.collection('pagecategories')
        await downloadPageRelatedImages(pagesCollection, pageCategoriesCollection, 0, 0)

        const destinationCountriesCollection = database.collection('destinationcountries')
        const destinationCountryZonesCollection = database.collection('destinationcountrieszones')
        await downloadDestinationCountryRelatedImages(destinationCountriesCollection, destinationCountryZonesCollection, 0, 10)
        
        const budgetCollection = database.collection('budget')
        await downloadBudgetFiles(budgetCollection, 0, 0)
      
        const budgetProductsCollection = database.collection('budgetproducts')
        await downloadBudgetProducts(budgetProductsCollection, 0, 40)

        const destinationCitiesCollection = database.collection('destinationcities')
        await downloadDestinationCitiesImages(destinationCitiesCollection, 0, 0)

        const bookingsCollection = database.collection('bookings2')
        await downloadBookingInvoices(bookingsCollection, 0, 0)

        const managementGroupsCollection = database.collection('managementgroups')
        await downloadManagementGroupRelatedImages(managementGroupsCollection, 0, 0)

        const providersCollection = database.collection('providers')
        await downloadProvidersRelatedImages(providersCollection, 0, 0)

        const tagsCollection = database.collection('tags')
        const tripTagsCollection = database.collection('triptags')
        await downloadTagsRelatedImages(tagsCollection, tripTagsCollection, 0, 0)

        const travelersCollection = database.collection('travelers')
        await downloadTravelerRelatedImages(travelersCollection, 0, 0)

        const adminCollection = database.collection('omtadmins') 
        await downloadAdminRelatedImages(adminCollection, 0, 0)

        const userCollection = database.collection('users')
        await downloadUserRelatedImages(userCollection, 0, 0)
        //#endregion
    } finally {
        print()
        await dbClient.closeConnection();
      }
}

run().catch(console.error)
const print = () => {
  const migration_objects_string = JSON.stringify(migration_objects, null, 2);
  const markdownContent = `# Migration Objects\n\n\`\`\`json\n${migration_objects_string}\n\`\`\``;
  fs.writeFile('migration_objects.md', markdownContent, (err) => {
      if (err) {
          console.error('Error writing to file', err);
      } else {
          console.log('Migration objects written to migration_objects.md');
      }
  });
}
// x = {
//   '[admin]-[589cd8e515aea338fa705d2b]-[bangkok-esencial]': {
//     container: 'public',
//     blob: 'uploads/whatever',
//     original_path: 'uploads/omtadmins/589cd8e515aea338fa705d2b/bangkok-esencial.jpg',
//     new_path: 'uploads/omtadmins/589cd8e515aea338fa705d2b/bangkok-esencial.jpg',
//   }
// }