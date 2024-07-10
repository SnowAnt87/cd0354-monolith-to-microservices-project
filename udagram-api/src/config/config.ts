export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'port': 5432, // Add port if necessary
  'logging': console.log, // Set to false to disable logging
  'dialectOptions': {
    ssl: {
      require: true, // If SSL is required by your PostgreSQL instance
      rejectUnauthorized: false // Allow self-signed certificates
    }
  },
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
