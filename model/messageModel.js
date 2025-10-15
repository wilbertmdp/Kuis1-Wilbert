import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema(
    {
        message : {
            type : String,
            trim : true,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const messageModel = new mongoose.model("messages", MessageSchema)

export default messageModel