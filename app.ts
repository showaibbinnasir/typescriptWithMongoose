import express, { Application, Request, Response, NextFunction, urlencoded } from 'express'
import cors from 'cors'
import { Schema } from 'mongoose'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    //creating interface to insert data

    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender : "Male" | "Female";
        email?: string;
        contactNo : string;
        emergenctConNo : string;
        address : {
            presentAddress : string;
            parmanentAddress : string;
        }
    }
    //creating schema for the created interface
    //<IUser> is a generic of the IUser interface.
    const userSchema = new Schema<IUser>({
        id : {
            type: String,
            required : true,
            unique : true
        },
        role : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required: true
        },
        name: {
            firstName : {
                type : String,
                required: true
            },
            middleName: {
                type : String,
                required: true,
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth : {
            type : String,
            required : false
        },
        gender : {
            type : String,
            enum : ['male', 'female'],
            required: true
        },
        email: {
            type : String,
        },
        contactNo : {
            type  : String,
            required : true
        },
        emergenctConNo : {
            type : String,
            required : true
        },
        address: {
            presentAddress : {
                type : String,
                required: true
            },
            parmanentAddress : {
                type :String,
                required: true
            }
        }
        
        
    })
})

export default app;