import * as bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: Schema.Types.Date,
    required: true
  },
  gender: {
    type: Schema.Types.String
  },
  password: {
    type: Schema.Types.String,
    select: false
  },
  confirmPassword: {
    type: Schema.Types.String,
    select: false
  }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash((this.password as string | Buffer), 12);
  this.confirmPassword = undefined;
  next();
});

export const User = model('User', UserSchema);