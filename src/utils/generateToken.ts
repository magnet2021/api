import UIDGenerator from 'uid-generator';

const uidgen = new UIDGenerator(256);

export const generate = (token = uidgen.generateSync()) => token;
