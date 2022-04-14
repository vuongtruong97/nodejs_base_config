import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
    deletedBy: true,
});
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
    {
        name: String,
        description: String,
        videoId: String,
        image_url: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true }
);

//mongoose query helper
VideoSchema.query.sortable = function (res) {
    const isValidType = ['desc', 'asc'].includes(res.locals._sort.type);
    if (res.locals?._sort.enable) {
        return this.sort({
            [res.locals._sort.column]: isValidType
                ? res.locals._sort.type
                : 'desc',
        });
    }
    return this;
};

const VideoModel = mongoose.model('video', VideoSchema);

export default VideoModel;
