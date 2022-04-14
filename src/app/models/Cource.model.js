import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';

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
    { timestamps: true }
);
CourseSchema.plugin(mongooseDelete, {
    overrideMethods: true,
    deletedAt: true,
    validateBeforeDelete: true,
    indexFields: 'all',
});
CourseSchema.query.sortable = function (res) {
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

const CourseModel = mongoose.model('Course', CourseSchema);

export default CourseModel;
