import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect,
  port: config.port, // Add port if necessary
  logging: config.logging,
  dialectOptions: config.dialectOptions,
});
