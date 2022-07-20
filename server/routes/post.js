const express = require('express')
const router = express.Router()
const postcontroller = require('../controllers/PostController')
router.get('/usered', postcontroller.createuser)
router.post('/listpost', postcontroller.post)
router.get('/getlistpost',postcontroller.getpost)
router.delete('/deletepost/:id', postcontroller.deletepost)
router.put('/updatepost', postcontroller.updatepost)


module.exports = router