import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
    // res.send('New component added!')
    res.sendFile(path.join(__dirname, '/index.html'))
})

export default router
