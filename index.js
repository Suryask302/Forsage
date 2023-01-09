require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const morgan = require('morgan')
const authRoutes = require('./routes/authRoute')
const cors = require('cors')
const { notFound, errorHandler } = require('./utils/errors')




// global middleWares //
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())


// routes Initialisation //
app.use('/', authRoutes)
app.use(notFound)
app.use(errorHandler)



app.listen(port, _ => console.log('server is runnning on port 3000'))