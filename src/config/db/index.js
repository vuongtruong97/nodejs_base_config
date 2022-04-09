import mongoose from 'mongoose';
async function connectDb() {
    try {
        const result = await mongoose.connect(
            'mongodb://127.0.0.1:27017/f8_education_dev',
        );
        console.log(
            '                  ----> Connect Data-base successfully <----',
        );
    } catch (err) {
        console.log(err);
        console.log('                  ----> Connect Data-base failure <----');
    }
}

export default connectDb;
