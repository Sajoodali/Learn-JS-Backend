import mongooes, { Schema } from "mongoose";


mongooes.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongooes.connection;

db.on("error", console.error.bind(console, "connection error:"));


console.log("Database connected successfully");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hobbies: [String],
  usertype:{type:string},
},
{ timestamps: true }
);


console.log("hi");
console.log("hi");

