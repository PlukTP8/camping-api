import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.route'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {  
  res.send('Hello World!')
});

app.use('/auth', authRoutes)
app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
