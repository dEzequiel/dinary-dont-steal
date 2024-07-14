async function findAllDMCImages(collection='dmcs', limit=10, projection={
    'name': 1,
    'images': 1
}) {
    console.log('Queries >> findAllDMCImages >> Start')
    const query = {
        'images.splash.url': { $exists: true, $ne: null, $ne: '' },
        'images.logo.url': { $exists: true, $ne: null, $ne: '' },
        'images.photo.url': { $exists: true, $ne: null, $ne: '' }
    }
    
    try {
        const documents = await collection.find(query).limit(limit).toArray()
        console.log('Queries >> findAllDMCCloudinaryImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}
async function findAllDMCProductsImages(collection='dmcproducts', limit=10, projection=
    {
        'productimage.url': 1,
        'name': 1,
        'dmc': 1,
        'productimage': 1,
    }) {
    console.log('Queries >> findAllDMCProductsImages >> Start')
    const query = {
        ['productimage.url']: { $ne: null, $ne: "" },
        ['productimage.url']: { $exists: true }
    }

    try {
        const documents = await collection.find(query).limit(limit).project(projection).toArray()
        console.log('Queries >> findAllDMCProductsImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCProductsImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllDMCProductsImages,
    findAllDMCImages
}