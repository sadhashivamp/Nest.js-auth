import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';

const generateSecretKey = (): string => {
  return randomBytes(32).toString('hex');
};

const tokenIs = generateSecretKey();
console.log('Generated secret key:', tokenIs);

// Write the secret key to the configuration file
const configContent = `export const jwtConstants = {
  secret: '${tokenIs}',
};
`;
writeFileSync('config.ts', configContent);

export default tokenIs; // Export the secret key
