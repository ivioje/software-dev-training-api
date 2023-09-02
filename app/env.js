import dotenv from 'dotenv';
dotenv.config();

export class Environment {
    static PORT = process.env.PORT;
    static DATABASE_URL = process.env.DATABASE_URL;
}