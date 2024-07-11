import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  aws_bucket: process.env.AWS_BUCKET,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  jwt_secret: process.env.JWT_SECRET,
  url: process.env.URL,
};
