const express = require('express');
const router = express.Router();

// Import other routes
const messageRoutes = require('./message.routes');

// Use routes
router.use('/messages', messageRoutes);

// Export the combined routes
module.exports = router;
