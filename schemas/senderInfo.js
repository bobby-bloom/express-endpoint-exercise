exports.senderInfoSchema = {
    'senderInfo.plant': {
        trim: true,
        isEmpty: { negated: true }
    },
    'senderInfo.shippingPoint': {
        trim: true,
        isEmpty: { negated: true }
    },
};
