import { ObjectId } from "mongodb";


async function findAllTripTagImages(collection='triptags', limit=10, projection={
    'slug': 1,
    'title': 1,
    'mainImage': 1,
    'imageFacebook': 1
}) {
    console.log('Queries >> tag >> findAllTagImages >> Start')
    const query = {
        '_id': ObjectId('543e9aa1ee63d0382c52deee')

        // $or: [
        //     { 'mainImage': { $exists: true, $ne: null, $ne: '' } },
        //     { 'mainImage.url': { $exists: true, $ne: null, $ne: '' } },
        //     { 'imageFacebook': { $exists: true, $ne: null, $ne: '' } },
        //     { 'imageFacebook.url': { $exists: true, $ne: null, $ne: '' } }

        // ]
    };

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> tag >> findAllTagImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllTagImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllTripTagImages
}