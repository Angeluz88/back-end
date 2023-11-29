const express = require('express');
const router = express.Router();
const apiControllers = require(`../controller/apiController`);




router.get('/episode', apiControllers.getEpisodies);
router.get('/character', apiControllers.getCharacters);


module.exports = router;
