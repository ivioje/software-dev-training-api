import { CrudServices } from "../services/crud.service";

export class CrudController {
    #crudService;

    constructor() {
        this.#crudService = new CrudServices();
    }

    createUser = async (request, response) => {
        const { fullName } = request.body;
        this.#crudService.createUser(fullName, response)
        .then((res) => {
            return res;
        })

    }

    updateUser = async (request, response) => {
        const { userId } = request.params;
        const { fullName } = request.body;
        this.#crudService.updateUser(userId, fullName, response)
        .then((res) => {
            return res;
        })

    }

    readUsers = async (request, response) => {
        this.#crudService.readUsers(response)
        .then((res) => {
            return res;
        })
    }

    deleteUser = async (request, response) => {
        const { userId } = request.params;
        this.#crudService.deleteUser(userId, response)
        .then((res) => {
            return res
        })
    }

    createItem = async (request, response) => {
        const { name, type, id } = request.body;
        this.#crudService.createItem(name, type, id, response)
        .then((res) => {
            return res;
        })
    }
}