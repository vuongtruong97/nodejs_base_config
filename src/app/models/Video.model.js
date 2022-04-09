import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        name: String,
        description: String,
        videoId: String,
        image_url: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

const VideoModel = mongoose.model('video', VideoSchema);

export default VideoModel;
