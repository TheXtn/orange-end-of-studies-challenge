const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
// const User = require ('./src/models/UserModel')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB CONNECTED')).catch(err=>console.log(err.message))

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		// const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.listen(8000,()=>
{
    console.log('Server started on 8000')
})