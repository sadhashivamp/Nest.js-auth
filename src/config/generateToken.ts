import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';

const generateSecretKey = (): string => {
  return randomBytes(32).toString('hex');
};

const tokenIs = generateSecretKey();

export default tokenIs; 
