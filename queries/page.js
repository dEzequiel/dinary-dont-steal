async function findAllPageImages(collection='pages', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'title': 1,
    'image': 1,
    'imageFacebook': 1,
    'imageGalery': 1
}) {
    console.log('Queries >> page >> findAllPageImages >> Start')
    const query = {
        $or: [
            { 'image.url': { $exists: true, $ne: null, $ne: '' } },
            { 'imageFacebook.url': { $exists: true, $ne: null, $ne: '' } },
            { 'imageGalery': { $exists: true, $ne: null, $ne: [] } },
        ]
    };
    
    try {
        const documents = await collection.find(query).project(projection).limit(limit).skip(skip).toArray()
        console.log('Queries >> page >> findAllPageImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> page >> findAllPageImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllPageCategoryImages(collection='pageCategories', skip=0, limit=0, projection={
    '_id': 1,
    'name': 1,
    'mainImage': 1,
    'imageFacebook': 1
}) {
    console.log('Queries >> page >> findAllPageCategoryImages >> Start')
    const query = {
        $or: [
            { 'mainImage.url': { $exists: true, $ne: null, $ne: '' } },
            { 'imageFacebook.url': { $exists: true, $ne: null, $ne: '' } },
        ]
    };
    
    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> page >> findAllPageCategoryImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> page >> findAllPageCategoryImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllPageImages,
    findAllPageCategoryImages
}