const express = require('express');
const theContacts = require('./controllers/allContacts');
const router = express.Router();

router.get('/contacts', theContacts);

module.exports = router;