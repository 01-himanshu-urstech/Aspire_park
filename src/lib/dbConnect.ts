import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) {
    console.log('Using existing database connection');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

export default connectDB;
