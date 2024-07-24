import { ObjectId } from "mongodb";

async function findAllDMCImages(collection='dmcs', start=50, end=100, projection={
    'name': 1,
    'images': 1,
    'additionalinfo.associations': 1,
    'tourEscorts': 1,
}) {
    console.log('Queries >> findAllDMCImages >> Start')
    // const query = {
    //     $or: [
    //         { 'images.splash.url': { $exists: true, $ne: null, $ne: '' } },
    //         { 'images.logo.url': { $exists: true, $ne: null, $ne: '' } },
    //         { 'images.photo.url': { $exists: true, $ne: null, $ne: '' } },
    //         { 'additionalinfo.associations': { $exists: true, $ne: [] } },
    //         {'tourEscorts': { $exists: true, $ne: [] } }
    //     ]
    // }

    const query = {
        '_id': ObjectId('5453357ab77fcef0177adc18')
    }

    const skipAmount = start - 1; // Para empezar en el documento 50, se saltan los primeros 49 documentos
    const limitAmount = end - start + 1; // Para incluir tanto el documento 50 como el 100, se limita a 51 documentos

    try {
        const documents = await collection.find(query).skip(skipAmount).limit(limitAmount).toArray()
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

async function findAllDMCFAQImages(collection='dmc faqs', limit=10, projection={
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
        const documents = await collection.find(query).limit(limit).project(projection).toArray()
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