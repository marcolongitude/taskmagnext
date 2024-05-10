import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO) throw new Error("MONGO is not defined");

if (mongoose.connection.readyState === 0) {
	mongoose.connect(process.env.MONGO);
}

mongoose.Promise = global.Promise;

const tasksSckema = new Schema(
	{
		id: String,
		title: String,
		completed: Boolean,
		description: String,
		date: Date,
		time: Date,
	},
	{
		timestamps: true,
	}
);

const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", tasksSckema);

export default Tasks;
