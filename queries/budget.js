async function findAllBudgetProductImages(collection='budgetproducts', skip=0, limit=0, projection={
    '_id': 1,
    'name': 1,
    'slug': 1,
    'productimage': 1,
    'itinerary': 1
}) {
    console.log('Queries >> budget >> findAllBudgetProductImages >> Start')
    
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
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> budget >> findAllBudgetProductImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> budget >> findAllBudgetProductImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllBudgetFiles(collection='budget', skip=0, limit=0, projection={
    '_id': 1,
    'code': 1,
    'voucher.url': 1,
    'voucher.secure_url': 1,
    'passportfile.url': 1,
    'passportfile.secure_url': 1,
    'visaletterfile.url': 1,
    'visaletterfile.secure_url': 1,
    'invoicesaerial.file.url': 1,
    'invoicesaerial.file.secure_url': 1,
    'invoicesagency.file.url': 1,
    'invoicesagency.file.secure_url': 1,
    'invoicesprovider.file.url': 1,
    'invoicesprovider.file.secure_url': 1,
    'invoicestravelersense.file.url': 1,
    'invoicestravelersense.file.secure_url': 1
}) {
    console.log('Queries >> budget >> findAllBudgetFiles >> Start')

    const query = {
        $or: [
            {
                'voucher': { $exists: true, $ne: null, $ne: '' },
                'voucher.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'passportfile': { $exists: true, $ne: null, $ne: '' },
                'passportfile.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'visaletterfile': { $exists: true, $ne: null, $ne: '' },
                'visaletterfile.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'invoicesaerial': { $exists: true, $ne: null, $ne: '' },
                'invoicesaerial.file.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'invoicesagency': { $exists: true, $ne: null, $ne: '' },
                'invoicesagency.file.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'invoicesprovider': { $exists: true, $ne: null, $ne: '' },
                'invoicesprovider.file.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'invoicestravelersense': { $exists: true, $ne: null, $ne: '' },
                'invoicestravelersense.file.url': { $exists: true, $ne: null, $ne: '' }
            }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> budget >> findAllBudgetFiles >> End')
        return documents
    } catch (error) {
        console.log('Queries >> budget >> findAllBudgetFiles >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllBudgetProductImages,
    findAllBudgetFiles
}