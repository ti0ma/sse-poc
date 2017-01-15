const express = require('express');
const router = express.Router();

const track = require('api/track');

router.get('/tracks', track.index);
router.get('/status', track.getStatus);
router.post('/status', track.setStatus);
router.get('/stream', track.stream);

module.exports = router;
