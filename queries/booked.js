async function findAllBookedProductsImages(collection='bookedproducts', limit=20, projection={
    'slug': 1,
    'productimage':1,
    'image': 1,
    'itinerary.image': 1,
}) {
    console.log('Queries >> booked >> findAllBookedProductsImages >> Start')
    const query = {
        $or: [
            {
                'productimage': { $exists: true, $ne: null, $ne: '' },
                'productimage.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'itinerary': {
                    $elemMatch: {
                        'image': { $exists: true },
                        'image.url': { $exists: true, $ne: '' } // Assuming 'url' is a key within the 'image' object you're interested in
                    }
                }
            }
        ]
    };
    
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