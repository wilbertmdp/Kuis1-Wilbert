import express from "express"
import * as messageController from "../controller/messageController.js"

const api = express.Router()

api.get("/message", messageController.listMessage)
api.post("/message", messageController.createMessage)
api.put("/message/:id", messageController.updateMessage)
api.delete("/message/:id", messageController.deleteMessage)


export default api
