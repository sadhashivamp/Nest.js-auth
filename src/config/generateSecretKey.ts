import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';

const generateSecretKey = (): string => {
  return randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
console.log('Generated secret key:', secretKey);

// Write the secret key to the configuration file
const configContent = `export const jwtConstants = {
  secret: '${secretKey}',
};
`;
writeFileSync('config.ts', configContent);

export default secretKey; // Export the secret key
