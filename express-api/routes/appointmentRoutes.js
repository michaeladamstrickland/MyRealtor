var express = require('express');
var router = express.Router();
var appointmentController = require('../controllers/appointmentController.js');


//api function export
module.exports = function(app) {
/*
 * GET
 */
router.get('/appointment', appointmentController.list);

/*
 * GET
 */
router.get('/appointment/:id', appointmentController.show);

/*
 * POST
 */
router.post('/appointment', appointmentController.create);

/*
 * PUT
 */
router.put('/appointment/:id', appointmentController.update);

/*
 * DELETE
 */
router.delete('/appointment/:id', appointmentController.remove);

};
