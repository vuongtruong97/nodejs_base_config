import mongoose from 'mongoose';
import dotenv from 'dotenv'; // config ENV

// get db password
const mongodbAtlasPassword = dotenv.config().parsed.DBPASSWORD;

// cloud mongodb atlas database uri
const uri =
    'mongodb+srv://vuong-admin:' +
    mongodbAtlasPassword +
    '@vuongnodejscluster.8xo92.mongodb.net/f8_learn_dev';

async function connectDb() {
    try {
        const result = await mongoose.connect(uri);
        console.log(
            '                  ----> Connect Data-base successfully <----'
        );
    } catch (err) {
        console.log(err);
        console.log('          ----> Connect Data-base failure <----');
    }
}

export default connectDb;
