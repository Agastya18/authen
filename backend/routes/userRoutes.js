const express = require('express');
const { verifyUser } = require('../middleware/verifyUser');
const { updateUser } = require('../controllers/userController');
const router= express.Router();



router.post('/update/:id',verifyUser,updateUser)
module.exports = router