export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "Male" | "Female";
    email?: string;
    contactNo: string;
    emergenctConNo: string;
    address: {
        presentAddress: string;
        parmanentAddress: string;
    }
}

export interface IUserMethods {
    fullName() : string
}