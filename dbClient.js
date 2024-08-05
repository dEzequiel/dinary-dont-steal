import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function connect() {
    try {
        await client.connect();
        console.log('Connected successfully to database');
        return client;
    } catch (error) {
        console.error('Connection to database failed:', error);
        throw error;
    }
}

async function closeConnection() {
    try {
        await client.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error closing connection:', error);
        throw error;
    }
}

export default {
    connect,
    closeConnection
};