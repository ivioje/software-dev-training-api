import { DataTypes, Model } from "sequelize";

class Item extends Model {

}

const initializeItem = (sequelize) => {
    Item.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        type: {
                type: DataTypes.STRING
        }
    }, {
        sequelize,
        freezeTableName: true,
        timestamps: true
    })
}

export { Item, initializeItem }