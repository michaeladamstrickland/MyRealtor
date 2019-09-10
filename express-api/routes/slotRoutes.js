var express = require('express');
var router = express.Router();
var slotController = require('../controllers/slotController.js');


//api function export
module.exports = function(app) {
/*
 * GET
 */
router.get('/slot', slotController.list);

/*
 * GET
 */
router.get('/slot/:id', slotController.show);

/*
 * POST
 */
router.post('/slot', slotController.create);

/*
 * PUT
 */
router.put('/slot/:id', slotController.update);

/*
 * DELETE
 */
router.delete('/slot/:id', slotController.remove);

};
