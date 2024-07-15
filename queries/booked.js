async function findAllBookedProductsImages(collection='bookedproducts', limit=20, projection={
    'slug': 1,
    'productimage':1,
    'image': 1
}) {
    console.log('Queries >> booked >> findAllBookedProductsImages >> Start')
    const query = {
        'productimage': { $exists: true, $ne: null, $ne: '' },
        'productimage.url': { $exists: true, $ne: null, $ne: '' },
    }

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> booked >> findAllBookedProductsImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllBookedProductsImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllBookedProductsImages
}