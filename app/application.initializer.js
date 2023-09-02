import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import { Sequelize } from "sequelize";
import { ApplicationConfig } from "./application.config";
import { HttpStatus } from "./helpers/status.helpers";
import { ApplicationModel } from "./models/application.model";
import { ApplicationRoute } from "./routes/application.route";

export class ApplicationInitializer {
    #sequelize;
    #application;
    #applicationModel;
    #applicationRoute;

    constructor() { 
        this.#application = express();
        this.#sequelize = new Sequelize(ApplicationConfig.DATABASE_URL, { logging: false });
        this.#applicationModel = new ApplicationModel(this.#sequelize);
        this.#applicationRoute = new ApplicationRoute();
     }

     initializeApplication = () => {
         this.#application.use(morgan("dev"));
         this.#application.use(bodyParser.json({ limit: "500mb" }));
         this.#application.use(bodyParser.urlencoded({
             limit: "100mb",
             extended: true,
             parameterLimit: 5000
         }));
         this.#application.use(express.json());
         this.#healthCheck();
         this.#applicationModel.initializeModels();
         this.#initializeDatabase();
         this.#applicationRoute.initializeApplicationRoutes(this.#application);
         let server = this.#application.listen(ApplicationConfig.PORT, () => console.log("Server is running on port =="+ApplicationConfig.PORT))
     }

     #initializeDatabase = () => {
         this.#sequelize.authenticate()
         .then(() => {
             this.#sequelize.sync({ alter: true });
             console.log('=====connected to database===== ')
         }).catch((error) => console.log('error connecting to database', error));
     };

     //api call to check if the server is running
     #healthCheck = () => {
         this.#application.get('/health', (req, res) => {
             return res.status(HttpStatus.STATUS.success).json({message: 'Server is healthy'});
         });
     };


}