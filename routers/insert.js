const express = require('express');
const controller = require("../controllers/insertcontroller");

const router = express.Router();


router.get('/',controller.find);

router.post('/',controller.insert);


router.patch('/edit',controller.edit);


module.exports = router;

