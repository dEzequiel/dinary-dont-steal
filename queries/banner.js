export async function findAllBannersWithImages(collection='banners', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'image': 1
}) {
    console.log('Queries >> banner >> findAllBannersWithImages >> Start')
    const query = {
        'image.url': { $exists: true, $ne: null, $ne: '' },
    }

    
    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> banner >> findAllBannersWithImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllBannersWithImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}