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

export const User = mongoose.model('User', UserSchema);