import bcrypt from 'bcryptjs';

export const ADMIN_USERNAME_HASH = "$2a$12$VU38Mj0yQTR3xXBHnZBNR.EBIFo0nhrpAGAdgdpxn0CPYU1fU99nS";
export const ADMIN_PASSWORD_HASH = "$2a$12$VU38Mj0yQTR3xXBHnZBNR.EBIFo0nhrpAGAdgdpxn0CPYU1fU99nS";

export const compareCredential = async (value: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(value, hash);
};