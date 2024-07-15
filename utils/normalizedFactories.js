const createNormalizedDMCProduct = (dmcId, name, image = {}) => ({
    dmcId: String(dmcId),
    name,
    image: {
        ...image
    }
})

const createNormalizedDMC = (dmcId, name, images = {}) => ({
    dmcId: String(dmcId),
    name,
    images: {
        splash: images.splash.url,
        logo: images.logo.url,
        photo: images.logo.url
    }
});

export { createNormalizedDMCProduct, createNormalizedDMC }