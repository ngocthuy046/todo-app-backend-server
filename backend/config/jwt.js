//Cấu hình JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

module.exports = { JWT_SECRET, JWT_EXPIRATION };
