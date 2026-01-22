import mongooes,{Schema} from "mongoose";


mongooes.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});      
const db = mongooes.connection;

db.on("error", console.error.bind(console, "connection error:"));


console.log("Database connected successfully");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});