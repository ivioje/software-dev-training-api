import { CrudRoute } from "./crud/crud.route";
import { ApplicationConfig } from "../application.config";

export class ApplicationRoute {
    #crudRoute;

    constructor() {
        this.#crudRoute = new CrudRoute();
    }

    //pass in application server
    initializeApplicationRoutes = (application) => {
        application.use(`${ApplicationConfig.API_VERSION1}/crud`, this.#crudRoute.initializeRoute());
    }
}