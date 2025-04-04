const express = require('express');
const boxPackingRequest = require('./endpoints/boxPackingRequest');

const app = express();

app.use(express.json());
app.post('/', boxPackingRequest.onPost);

app.listen(3000);
