
import { createNormalizedDMC, createNormalizedDMCProduct } from "./normalizedFactories.js";

function normalizeDMCProduct(products) {
    let normalizedProducts = []
    products.forEach(product => {
        normalizedProducts.push(
            createNormalizedDMCProduct(product.dmc, product.name, product.productimage))
        })
    
    return normalizedProducts;

}; 
    
function normalizeDMC(dmcs) {
    let normalizedDMCs = []
    dmcs.forEach(dmc => {
        normalizedDMCs.push(createNormalizedDMC(dmc._id, dmc.name, dmc.images))
    });
    return normalizedDMCs
}

export { normalizeDMCProduct, normalizeDMC }
