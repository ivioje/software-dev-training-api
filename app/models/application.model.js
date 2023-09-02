import { initializeItem, Item } from "./entities/item.model";
import { initializeUser, User } from "./entities/user.model";

export class ApplicationModel {

    #sequelize;
    constructor(Sequelize) {
        this.#sequelize = Sequelize;
    }

    initializeModels = () => {
        initializeItem(this.#sequelize);
        initializeUser(this.#sequelize);
        this.#initializeModelRelations();
    }

    #initializeModelRelations = () => {
        User.hasMany(Item, { onDelete: 'CASCADE' });
    }
}
