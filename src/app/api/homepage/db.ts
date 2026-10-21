import  Mongoose  from 'mongoose';

const client = "mongodb+srv://gegechkorisandro1_db_user:C6pGAvTw6YDs2Mdz@cluster0.59ac1z4.mongodb.net/";

export async function connectToMongoDB() {
  try {
    const connection = await Mongoose.connect(client);
    console.log("You successfully connected to MongoDB!");
    return connection
  } catch (err) {
    console.dir(err);
  }
}
