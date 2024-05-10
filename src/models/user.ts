import mongoose, { Schema } from "mongoose";

if (!process.env.MONGO) throw new Error("MONGO is not defined");

if (mongoose.connection.readyState === 0) {
	mongoose.connect(process.env.MONGO);
}

mongoose.Promise = global.Promise;

const userSchema = new Schema(
	{
		id: String,
		name: String,
		email: String,
		password: String,
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
