import { HttpStatus } from "../helpers/status.helpers";
import { Item } from "../models/entities/item.model";
import { User } from "../models/entities/user.model"

export class CrudServices {
    constructor() {

    }

    createUser = async (fullName, response) => {
        if (!fullName){
            return response.status(HttpStatus.STATUS.bad).json({ message: 'Bad request, name is not present' })
        }
        const newUser = new User();
        newUser.name = fullName;
        await newUser.save();
        return response.status(HttpStatus.STATUS.success).json(newUser);
    }

    updateUser = async (userId, fullName, response) => {
        if (!userId || !fullName ) return response.status(HttpStatus.STATUS.bad).json({ message: 'Bad request: Values incomplete' });

        const user = await User.findByPk(userId);

        if (!user) return response.status(HttpStatus.STATUS.notfound).json({ message: 'User not found' });
        user.name = fullName;
        await user.save()
        response.status(HttpStatus.STATUS.success).json(user)
    }

    readUsers = async (response) => {
        const users = await User.findAll();
        return response.status(HttpStatus.STATUS.success).json(users)
    }

    deleteUser = async (userId, response) => {
        if (!userId ) return response.status(HttpStatus.STATUS.bad).json({ message: 'Bad request: Values incomplete' });

        const user = await User.findByPk(userId);

        if (!user) return response.status(HttpStatus.STATUS.notfound).json({ message: 'User not found' });
        await user.destroy();
        return response.status(HttpStatus.STATUS.success).json({ message: 'User deleted successfully!' });
    }

    createItem = async (itemName, itemType, id, response) => {
        if(!itemName || !itemType || !id) {
            return response.status(HttpStatus.STATUS.bad).json({ message: 'Bad request, values are not complete' })
        }
        const newItem = new Item();
        newItem.name = itemName;
        newItem.type = itemType;
        newItem.UserId = id;
        await newItem.save();
        return response.status(HttpStatus.STATUS.success).json(newItem)
    }
}