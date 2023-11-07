const express = require('express');
const { verifyUser } = require('../middleware/verifyUser');
const { updateUser, deleteUser } = require('../controllers/userController');
const router= express.Router();



router.post('/update/:id',verifyUser,updateUser)
router.delete('/delete/:id',verifyUser,deleteUser)
module.exports = router