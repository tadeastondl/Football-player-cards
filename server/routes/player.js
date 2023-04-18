const express = require('express')
const router = express.Router();
const playerController = require('../controllers/player')


router.get('/', playerController.getPlayers);
router.get('/:id', playerController.getPlayer);

router.post('/', playerController.postPlayer);

router.put('/:id', playerController.putPlayer);

router.delete('/:id', playerController.deletePlayer);

module.exports = router;