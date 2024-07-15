
import { createNormalizedDMC, createNormalizedDMCProduct, createNormalizedAffiliate } from "./normalizedFactories.js";

export function normalizeDMCProduct(products) {
    let normalizedProducts = []
    products.forEach(product => {
        normalizedProducts.push(
            createNormalizedDMCProduct(product.dmc, product.name, product.productimage))
        })
    
    return normalizedProducts;

}; 
    
export function normalizeDMC(dmcs) {
    let normalizedDMCs = []
    dmcs.forEach(dmc => {
        normalizedDMCs.push(createNormalizedDMC(dmc._id, dmc.name, dmc.images))
    });
    return normalizedDMCs
}

export function normalizeAffilates(affiliates) {
    let normalizedAffiliates = []
    affiliates.forEach(affiliate => {
        normalizedAffiliates.push(createNormalizedAffiliate(affiliate._id, affiliate.user, affiliate.name, affiliate.images))
    });
    return normalizedAffiliates
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

