import { ITodo } from "../types/todo"
import { model , Schema } from "mongoose"

const User : Schema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		
		description: {
			type: String,
			required: true,
		  },
	  
		  status: {
			type: Boolean,
			required: true,
		  },
		},
		{ timestamps: true } 
)

export default model<ITodo>("Todo", User)