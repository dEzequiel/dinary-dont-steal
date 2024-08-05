async function findAllDMCImages(collection='dmcs', skip=0, limit=0, projection={
    'name': 1,
    'images': 1,
    'additionalinfo.associations': 1,
    'tourEscorts': 1,
}) {
    console.log('Queries >> findAllDMCImages >> Start')
    const query = {
        $or: [
            { 'images.splash.url': { $exists: true, $ne: null, $ne: '' } },
            { 'images.logo.url': { $exists: true, $ne: null, $ne: '' } },
            { 'images.photo.url': { $exists: true, $ne: null, $ne: '' } },
            { 'additionalinfo.associations': { $exists: true, $ne: [] } },
            {'tourEscorts': { $exists: true, $ne: [] } }
        ]
    }

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> findAllDMCCloudinaryImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllDMCProductsImages(collection='dmcproducts', limit=50, projection=
    {
        'name': 1,
        'dmc': 1,
        'productimage': 1,
        'external.images': 1,
        'itinerary': 1,
        'dmcDetails.name': 1
    }) {
    console.log('Queries >> findAllDMCProductsImages >> Start')
    const query = {
        $or: [
            { 'productImage.url': { $exists: true, $ne: null, $ne: '' } },
            {'itinerary': { $exists: true, $ne: [] } },
            {'external.images': { $exists: true, $ne: [] } }
        ]
    }

    try {
        const documents = await collection
        .aggregate([
            {
                $match: query
            },
            {
                $lookup: {
                    from: 'dmcs',
                    localField: 'dmc',
                    foreignField: '_id',
                    as: 'dmcDetails'
                }
            },
            {
                $unwind: {
                    path: '$dmcDetails',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $limit: limit
            },
            {
                $project: projection
            }
        ]).toArray()
        console.log('Queries >> findAllDMCProductsImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCProductsImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllDMCFAQImages(collection='dmc faqs', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'title': 1,
    'images': 1,
    'imageFacebook': 1,
}) {
    console.log('Queries >> findAllDMCFAQImages >> Start')
    const query = {
        $or: [
            { 'images': { $exists: true, $ne: null, $ne: [] } },
            { 'imageFacebook': { $exists: true, $ne: {} } }
        ]
    };
    
    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> findAllDMCFAQImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCFAQImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllDMCProductsImages,
    findAllDMCImages,
    findAllDMCFAQImages
}