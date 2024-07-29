import * as bcrypt from 'bcrypt';
import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string,
  email: string,
  dateOfBirth: Date,
  gender: string,
  password: string,
  confirmPassword: string,
  validatePassword: (password: string, userPassword: string) => Promise<boolean>;
}

const UserSchema = new Schema({
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

UserSchema.methods.validatePassword = async function (currentPassword: string, password: string): Promise<boolean> {
  return await bcrypt.compare(currentPassword, password);
}

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash((this.password as string | Buffer), 12);
  this.confirmPassword = undefined;
  next();
});

export const User = model<IUser>('User', UserSchema);
