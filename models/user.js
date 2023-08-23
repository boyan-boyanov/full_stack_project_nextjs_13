import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;

//The "models" object is provided by the Mongoose Library and store all the registred models.
//If a model named "User already exist in the models object, it assigns that existing model to User Vvariable
//This prevents redefining the model and ensures that the existing model is reused.
//If a model named User does not exist in the models object, model function from Mongoose is called to create a new model
//The newly created model is then assigned to the User variable.
