import { Environment } from "./env";

export class ApplicationConfig {

    static PORT = Environment.PORT;
    static DATABASE_URL = Environment.DATABASE_URL;
    static API_VERSION1 = '/api/v1';

    constructor() {
        
    }
}