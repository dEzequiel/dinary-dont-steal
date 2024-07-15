import dbClient from "./dbClient.js";
import { findAllAffiliatesImages } from "./queries/affiliate.js";
import { findAllBannersWithImages } from "./queries/banner.js";
import { findAllDMCProductsImages, findAllDMCImages } from "./queries/dmc.js";
import { findAllBookedProductsImages } from "./queries/booked.js";
import * as utils from "./utils/index.js";
import  * as fetcher from "./utils/resourceFetchers.js";
  

async function run() {
    try {
        const client =  await dbClient.connect();
        const database = client.db("openmarkettravel")

        //#region 1. Download images from dmc products
        //// Download DMC Products images hosted on cloudinary or yourttoo machine.
        // const dmcProductsCollection = database.collection('dmcproducts');
        // const productsWithNonEmptyProductImageUrl = await findAllDMCProductsImages(dmcProductsCollection, 10);
        // const productsNormalized = utils.normalizeDMCProduct(productsWithNonEmptyProductImageUrl)
        // fetcher.downloadImagesFromDMCProducts(productsNormalized)
        // #endregion

        // #region 2. Download images from dmc
        //// Download DMC images hosted on cloudinary or yourttoo machine.
        // const dmcCollection = database.collection('dmcs')
        // const dmcWithNonEmptyImages = await findAllDMCImages(dmcCollection, 10)
        // const dmcsNormalized = utils.normalizeDMC(dmcWithNonEmptyImages)        
        // fetcher.downloadImagesFromDMC(dmcsNormalized)
        // #endregion

        // #region 3. Download images from affiliates
        //// Download Affiliates images hosted on cloudinary or yourttoo machine.
        // const affiliatesCollection = database.collection('affiliates')
        // const affiliatesWithNonEmptyImages = await findAllAffiliatesImages(affiliatesCollection, 15)
        // const affiliatesNormalized = utils.normalizeAffilates(affiliatesWithNonEmptyImages)
        // fetcher.downloadAffiliatesImages(affiliatesNormalized)
        // #endregion

        // #region 4. Download images from banners
        //// Download Affiliates images hosted on cloudinary or yourttoo machine.
        // const bannersCollection = database.collection('banners')
        // const bannersWithNonEmptyImages = await findAllBannersWithImages(bannersCollection, 15)
        // const bannersNormalized = utils.normalizeBanner(bannersWithNonEmptyImages)
        // fetcher.downloadImagesFromBanners(bannersNormalized)
        // #endregion

        //#region 5. Download images from booked products
        const bookedProductsCollection = database.collection('bookedproducts')
        const bookedProductsWithNonEmptyImages = await findAllBookedProductsImages(bookedProductsCollection, 40)
        const bookedProductsNormalized = utils.normalizeBookedProduct(bookedProductsWithNonEmptyImages)
        fetcher.downloadImagesFromBookedPoducts(bookedProductsNormalized)
        //#endregion
    } finally {
        await dbClient.closeConnection();
      }
}

run().catch(console.error)