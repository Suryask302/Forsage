
const createError = require('http-errors')
const axios = require('axios')
const qs = require('qs')

const userLogin = async (req, res, next) => {

    try {

        const { userId } = req.body

        let obj = {

            token: process.env.DOTNETTOKEN,
            UserID: userId

        }

        const { data } = await axios({

            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(obj),
            url: 'https://api.7marvel.io/androidwebservices.asmx/CheckLogin'

        })

        console.log(data)

        if (data.result == 'SUCCESS') {

            return res.status(200).json({

                message: data['Message'],
                data: {
                    custId: data['Data']['CustID'],
                    userName: data['Data']['UserName']
                }

            })

        }

        return res.status(400).json({
            message: `Login Failed, Please Check Credintials`
        })

    } catch (error) {
        console.log(error)
        next(error)
    }

}

const register = async (req, res, next) => {

    try {

        const { SponserID, UserID } = req.body

        let obj = {
            token: process.env.DOTNETTOKEN,
            SponserID,
            UserID,
        }

        const { data } = await axios({

            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'https://api.7marvel.io/androidwebservices.asmx/Registrastion',
            data: obj

        })

        if (data.result.toUpperCase() == 'FAILED') {
            return res.status(409).json({
                message: 'userId is Already in use...!'
            })
        }

        return res.status(201).send({
            message: 'Successfully Registered'
        })



    } catch (error) {
        console.log(error)
        next(error)
    }

}


const checkSponserId = async (req, res, next) => {

    try {



    } catch (error) {
        next(error)
    }

}


const getPackageData = async (req, res, next) => {

    try {

        let { userId, package } = req.body
        let obj = {
            UserID: userId,
            Package: package,
            token: process.env.DOTNETTOKEN
        }

        let {data} = await axios({

            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data : obj,
            url: `https://api.7marvel.io/androidwebservices.asmx/GetAllDashBoardPackageData`,

        })

        console.log(data)

        if(data.result !== 'SUCCESS') {

            return res.status(404).json({
                message: `Something Went Wrong`
            })
            
        }

        return res.status(200).json({
            message : `Success`,
            data
        })


    } catch (error) {
        next(error)
    }

}

module.exports = {
    
    userLogin,
    register,
    checkSponserId,
    getPackageData

}