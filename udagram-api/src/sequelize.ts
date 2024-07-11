import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log(`Connecting to database ${process.env.POSTGRES_DB} on host ${process.env.POSTGRES_HOST} with user ${process.env.POSTGRES_USERNAME}`);

export const sequelize = new Sequelize({
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

// Log non-sensitive information only
console.log('Database connection initialized');
