import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
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

//creating a model using schema
const User = model<IUser>("user", userSchema);
export default User;