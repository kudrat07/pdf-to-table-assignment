const express = require('express')
const router = express.Router();

const {extractData} = require('../controllers/extract')

router.get("/extract", extractData)

module.exports = router