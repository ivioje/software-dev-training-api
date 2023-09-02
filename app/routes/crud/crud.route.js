import express from "express";
import { CrudController } from "../../controllers/crud.controller";

export class CrudRoute {
    #crudRouter;
    #crudController;

    constructor() {
        this.#crudRouter = express.Router();
        this.#crudController = new CrudController();
    }

    initializeRoute = () => {
        this.#crudRouter.post('/create-user', this.#crudController.createUser);
        this.#crudRouter.post('/create-item', this.#crudController.createItem);
        this.#crudRouter.get('/users', this.#crudController.readUsers);
        this.#crudRouter.put('/update-user/:userId', this.#crudController.updateUser);
        this.#crudRouter.delete('/delete-user/:userId', this.#crudController.deleteUser);
        return this.#crudRouter;
    }
}