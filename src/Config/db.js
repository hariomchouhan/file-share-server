import mongoose from "mongoose";
import 'dotenv/config'

const ConfigureDb = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true});
        console.log('Db Connected!');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default ConfigureDb;