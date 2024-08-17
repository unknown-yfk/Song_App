
const express = require('express');
const router = express.Router();
const {
    createSong, getSongs, getSongById,
    updateSong, deleteSong, getStatistics
} = require('../controllers/songController');

router.post('/songs', createSong);
router.get('/songs', getSongs);
router.get('/songs/:id', getSongById);
router.put('/songs/:id', updateSong);
router.delete('/songs/:id', deleteSong);
router.get('/stats', getStatistics);

module.exports = router;
