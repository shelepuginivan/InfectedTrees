import {Schema, model} from "mongoose";

const InfectedTree = new Schema({
	user: {type: Schema.Types.ObjectId, ref: "User"},
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    photoURL: {type: String, required: true}
})

export default model('InfectedTree', InfectedTree)
