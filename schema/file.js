module.exports = {
    // type: 'object',
    // properties: {
    //     code: { type: 'number' },
    //     data: {
    //         type:  'object',
    //         properties: {
    //             total: { type:  'number' },
    //             data: {
    //                 type: 'array',
    //                 items: [
    //                     { 
    //                         type: 'object',
    //                         properties: {
    //                             id: { type: 'string' }
    //                         }
    //                     },
    //                 ]
    //             }
    //         }
    //     }
    // }
    type: 'array',
    items: [
        { 
            type: 'object',
            properties: {
                // id: { type: 'string' },
                size: { type: 'string' },
            }
        },
    ]
}
