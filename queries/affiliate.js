async function findAllAffiliatesImages(collection='affiliates', limit=10, projection={
    '_id': 1,
    'user': 1,
    'name': 1,
    'images': 1
}) {
    console.log('Queries >> affiliates >> findAllAffiliatesImages >> Start')
    const query = {
        'images.logo.url': { $exists: true, $ne: null, $ne: '' },
        'images.photo.url': { $exists: true, $ne: null, $ne: '' }
    }

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> affiliates >> findAllAffiliatesImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllAffiliatesFAQImages(collection='affiliate faqs', limit=10, projection={
    'title': 1,
    'slug': 1,
    'images': 1
}) {
    console.log('Queries >> affiliates >> findAllAffiliatesFAQImages >> Start')
    
    const query = {
        'images': { 
            $exists: true, 
            $ne: null,
            $not: { $size: 0 } // This line checks that the array is not empty
        }
    };

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> affiliates >> findAllAffiliatesFAQImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> affiliates>> findAllAffiliatesFAQImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllAffiliatesImages,
    findAllAffiliatesFAQImages
}