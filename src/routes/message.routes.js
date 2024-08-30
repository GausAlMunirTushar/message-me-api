const express = require('express');
const { createMessage, getAllMessage } = require('../controllers/message.controller');
const router = express.Router();

router.post('/', createMessage);
router.get('/', getAllMessage);


module.exports = router;