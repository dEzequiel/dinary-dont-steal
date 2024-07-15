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
        photo: images.photo.url
    }
});

const createNormalizedAffiliate = (userId, name, images = {}) => ({
    userId: String(userId),
    name,
    images: {
        logo: images.logo.url == 'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg' ? '' : images.logo.url,
        photo: images.photo.url == 'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg' ? '' : images.photo.url,
    }
})

export { createNormalizedDMCProduct, createNormalizedDMC, createNormalizedAffiliate }