import UIDGenerator from 'uid-generator';
import bcrypt from 'bcrypt';

// Todo: Make token schema

const uidgen = new UIDGenerator(256);

export const generate = (token = uidgen.generateSync()) => bcrypt.hashSync(token, 10);
export const check = (req, res, next) => {};
