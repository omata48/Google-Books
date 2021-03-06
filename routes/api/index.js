const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

// Book routes
router.use('/books', bookRoutes);

// Google route
router.use('/google', googleRoutes);

// HTML page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
