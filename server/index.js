const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const User = require ('./src/models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const itemRouter = require("./src/Controllers/ItemController");
const userRouter = require("./src/Controllers/AuthController");

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('DB CONNECTED')).catch(err=>console.log(err.message))

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
        console.log(err)
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


app.use('/api/item',itemRouter);
app.use('/api/user',userRouter);

app.listen(8000,()=>
{
    console.log('Server started on 8000')
})