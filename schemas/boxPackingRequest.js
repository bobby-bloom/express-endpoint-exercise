const { boxDataSchema } = require('./boxData');
const { senderInfoSchema } = require('./senderInfo');
const { soldToSchema } = require('./soldTo');
const { shipToSchema } = require('./shipTo');
const { intermediateSchema } = require('./intermediate');

exports.boxPackingRequestSchema = {
    msgId: {
        trim: true,
        isEmpty: { negated: true },
    },
    sender: {
        trim: true,
        isEmpty: { negated: true }
    },
    ...boxDataSchema,
    ...senderInfoSchema,
    ...soldToSchema,
    ...shipToSchema,
    ...intermediateSchema,
};
