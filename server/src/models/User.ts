import {Schema, model} from 'mongoose'

const User: Schema = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	isActivated: {type: Boolean, default: false},
	activationLink: {type: String, required: true}
})

export default model('User', User)
