import { JwkKeyExportOptions } from "crypto"

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.listen(1337,()=>{
    console.log("Server Started as 1337");
})