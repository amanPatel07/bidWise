// import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: Schema.Types.String
  },
  email: {
    type: Schema.Types.String
  }
});

// UserSchema.methods.validatePassword = async (currentPassword: string, userPassword: string) => {
//   return await bcrypt.compare(currentPassword, userPassword);
// }

export const User = mongoose.model('User', UserSchema);