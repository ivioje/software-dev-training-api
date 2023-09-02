import { DataTypes, Model } from "sequelize";

class User extends Model {

}

const initializeUser = (sequelize) => {
    User.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            defaultValue: 'ACTIVE'
        },
    }, {
        sequelize,
        freezeTableName: true,
        timestamps: true
    });
}

export { User, initializeUser }