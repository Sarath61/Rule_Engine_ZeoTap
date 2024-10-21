import mongoose from "mongoose";

interface CachedData {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    "Please define the DATABASE_URL envinorment variable inside .env.local"
  );
}

const cached: CachedData = {
  conn: null,
  promise: null,
};


async function connectDB() {
  if (!DATABASE_URL) {
    return Error("Please define the DATABASE_URL");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(DATABASE_URL)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
