import { NormalizerFactory } from "./normalize/base/normalizerFactory.js";

//#region NORMALIZERS
const dmcNormalizer = NormalizerFactory.createNormalizer('DMC');
const dmcProductNormalizer = NormalizerFactory.createNormalizer('DMCProduct');
const affiliateNormalizer = NormalizerFactory.createNormalizer('Affiliate');
const affiliateFAQNormalizer = NormalizerFactory.createNormalizer('AffiliateFAQ');
const bookedProductNormalizer = NormalizerFactory.createNormalizer('BookedProduct');
const budgetProductNormalizer = NormalizerFactory.createNormalizer('BudgetProduct');
//#endregion

export function normalizeDMCProduct(products) {
    let normalizedProducts = []
    products.forEach(product => {
        normalizedProducts.push(
            dmcProductNormalizer.normalize(product.dmc, product.name, product.productimage))
        })
    
    return normalizedProducts;

}; 

export function normalizeDMC(dmcs) {
    let normalizedDMCs = []
    dmcs.forEach(dmc => {
        normalizedDMCs.push(dmcNormalizer.normalize(dmc._id, dmc.name, dmc.images))
    });
    return normalizedDMCs
}

export function normalizeAffilates(affiliates) {
    let normalizedAffiliates = []
    affiliates.forEach(affiliate => {
        normalizedAffiliates.push(affiliateNormalizer.normalize(affiliate._id, affiliate.userId, affiliate.name, affiliate.images))
    });
    return normalizedAffiliates
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
        normalizedBookedProducts.push(bookedProductNormalizer.normalize(bookedProduct.slug, bookedProduct.productImage, bookedProduct.image, bookedProduct.itinerary))
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

