import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
 email: {
    type: String,
    require: [true, "email is required"],
    unique: [true, "email is already existed"],
  },
  username: {
    type: String,
    require: [true, "userName is required"],
  },
  image: {
    type: String,
  },
  // password: {
  //   type: String,
  //   default: "123456",
  // },
});

const User = models.User || model("User", profileSchema);

export default User;
