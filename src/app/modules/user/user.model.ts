import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


//creating a new model for intance method
type UserModel = Model<IUser, {}, IUserMethods>
//const userSchema = new Schema<IUser>({}) //without custom interface method
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true
    },
    emergenctConNo: {
        type: String,
        required: true
    },
    address: {
        presentAddress: {
            type: String,
            required: true
        },
        parmanentAddress: {
            type: String,
            required: true
        }
    }


})
userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName;
  });

//creating a model using schema

// const User = model<IUser>("user", userSchema); //without custom interface methods
const User = model<IUser,UserModel>("user", userSchema); //UserModel for custom instance method
export default User;