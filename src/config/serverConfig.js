import dotenv from 'dotenv';
import bcrypt from 'bcrypt'

dotenv.config();

const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(9);
const KEY = process.env.KEY

export { PORT, SALT, KEY };