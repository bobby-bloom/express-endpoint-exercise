const { validationResult, checkSchema } = require('express-validator');
const { boxPackingRequestSchema } = require('../schemas/boxPackingRequest');

exports.onPost = async (req, res) => {
    if (
           !req.body 
        || !req.body.boxPackingRequest 
        || !req.body.boxPackingRequest.messageHeader
    ) {
        return res.status(400).send('Invalid request!');
    }

    const flattedReq = req;
    flattedReq.body = req.body.boxPackingRequest.messageHeader;

    await checkSchema(boxPackingRequestSchema).run(flattedReq);

    const result = validationResult(flattedReq);

    if (result.isEmpty()) {
        console.log('Request passed. Body: ', flattedReq.body);
        return res.send('Success!');
    } 

    return res.status(400).send(result);
};
