const express = require('express');
const router = express.Router();

const stuffControl = require('../controllers/stuff');

router.post('/', stuffControl.createThing);
router.get('/:id', stuffControl.getAllThings);
router.get('/', stuffControl.getOneThing);
router.put('/:id', stuffControl.modifyThing);
router.delete('/:id', stuffControl.deleteThing);

module.exports = router;
