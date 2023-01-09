const router = require('express').Router()
const { userLogin, checkSponserId, register, getPackageData } = require('../controller/authCon')

router
    .post('/login', userLogin)
    .post('/register', register)
    .post('/checkSpnsrId', checkSponserId)
    .post('/getUserHistory', getPackageData)

module.exports = router