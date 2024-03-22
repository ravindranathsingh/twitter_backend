import mongoose from "mongoose";
import { SALT } from '../config/serverConfig.js'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

userSchema.pre('save', function (next) {
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

const User = mongoose.model('User', userSchema)
export default User;