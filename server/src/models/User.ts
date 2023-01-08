import {Schema, model} from 'mongoose'

const User: Schema = new Schema({
	email: {type: String, required: true},
	password: {type: String, required: true},
	isActivated: {type: Boolean, default: false},
	activationLink: {type: String, required: true}
})

export default model('User', User)
