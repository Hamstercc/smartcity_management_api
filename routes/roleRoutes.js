const express = require('express');
const router = express.Router();
const controller = require('../controllers/role');

router.get('/', controller.get)
router.get('/find', controller.getOne)
router.post('/save', controller.save)
router.put('/update', controller.update)
router.delete('/delete', controller.delete)

module.exports = router