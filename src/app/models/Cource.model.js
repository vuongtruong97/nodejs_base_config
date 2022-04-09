import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        title: { type: String, default: 'f8_cource', required: true },
        description: { type: String, default: 'f8_cource_dev', required: true },
        image_url: { type: String, required: true },
        video: { type: String, required: true },
        slug: { type: String, slug: 'title' },
    },
    { timestamps: true },
);

const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;
