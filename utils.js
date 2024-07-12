function normalizeDMCProduct(products) {
    let normalizedProducts = []
    products.forEach(product => {
        normalizedProducts.push({
            dmcId: product.dmc.toString(),
            name: product.name,
            image: {
                format: product.productimage.format,
                secure_url: product.productimage.secure_url,
                url: product.productimage.url,
                height: product.productimage.height,
                width: product.productimage.width
            }
        })
    }); 
    
    return normalizedProducts;
}

export default { normalizeDMCProduct }