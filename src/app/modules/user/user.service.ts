import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload : IUser) : Promise<IUser> => {
    const user = await new User(payload) //User -> class, user->  Instance
    await user.save(); //built in instance methods
    console.log(user.fullName());
    return user;
}

export const getUsersFromDb = async(): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDb = async(payload :string): Promise<IUser | null> => {
    const user = await User.findOne({id : payload}, {name : 1, id: 1, email: 1})
    return user;
}

