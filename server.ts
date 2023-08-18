import mongoose from 'mongoose'
import app from './app';
const port: number = 5000
//database connection

async function starter() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/firstmongoose');
        console.log(`Database connected`);
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
          })
    }catch{
        console.log(`failed to connect database`);
    }
}

starter();



