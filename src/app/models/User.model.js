import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserId = Schema.ObjectId;

const UserSchema = new Schema({
    name: { type: String, default: 'user_name' },
    email: { type: String },
    gender: String,
    avatar: String,
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
