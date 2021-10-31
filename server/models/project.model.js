import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    creator: String, //creatorID
    creatorName: String, //creator Name
    logo: String, //picture
    title: String, //project Title
    domain: String, //project Category
    tagline: String, //200 char tagline
    images: [String], //array of images
    description: String, //project detailed description
    video: String, //Youtube or Video Link
    github: String, //Github Repo Link
    website: String, //Website Link
    techStack: [String], //Tech Stack Used #array
    docs: String, //Additional PPT or Report Docs, only single doc
    likeCount: {
        type: [String],
        default: []
        },
    viewCount: {type: Number, default: 0},
    playoffs: {type: Boolean, default: false}
    },
    {timestamps: true}   //createdAt, updatedAt
    //along with id
)

projectSchema.method("toJSON", function() {
    const {_v, _id, ...object } = this.toObject()
    object._id = _id
    return object
})


const projectModel = mongoose.model('projectModel', projectSchema)

export default projectModel