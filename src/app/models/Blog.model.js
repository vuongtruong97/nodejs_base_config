import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String },
    meta_description: { type: String },
    image_url: { type: String },
});

const BlogModel = mongoose.model('blog', BlogSchema);
export default BlogModel;
