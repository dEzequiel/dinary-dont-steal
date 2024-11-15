import { ObjectId } from "mongodb"

async function findAllManagementGroupImages(collection='managementgroups', skip=0, limit=0, projection={
    '_id': 1,
    'user': 1,
    'name': 1,
    'images': 1
}) {
    const query = {
        $or: [
            {'images.logo.url': {$exists: true, $ne: null, $ne: ''}},
            {'images.photo.url': {$exists: true, $ne: null, $ne: ''}}
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> managementGroup >> findAllManagementGroupImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> managementGroup>> findAllManagementGroupImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllManagementGroupImages
}