async function findAllBookingInvoices(collection='bookings', skip=0, limit=0, projection={
    '_id': 1,
    'idBooking': 1,
    'voucher': 1,
    'voucherflights': 1,
    'paxes.passportfile': 1,
    'paxes.visaletterfile': 1,
    'invoicesaerial': 1,
    'invoicesagency': 1,
    'invoicesprovider': 1,
    'invoicestravelersense': 1,
}) {
    console.log('Queries >> booking >> findAllBookingImages >> Start')
    const query = {
        $or: [
            {
                'voucher': { $exists: true, $ne: null, $ne: '' },
                'voucher.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'voucherflights': {
                    $elemMatch: {
                        'file': { $exists: true },
                        'file.url': { $exists: true, $ne: '' }
                    }
                }
            },
            {
                'paxes': {
                    $elemMatch: {
                        'passportfile': { $exists: true },
                        'passportfile.url': { $exists: true, $ne: '' }
                    }
                }
            },
            {
                'paxes': {
                    $elemMatch: {
                        'visaletterfile': { $exists: true },
                        'visaletterfile.url': { $exists: true, $ne: '' }
                    }
                }
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
        console.log('Queries >> booking >> findAllBookingImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> booking >> findAllBookingImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}
export { findAllBookingInvoices as findAllBookingImages }