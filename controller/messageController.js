import messageModel from "../model/messageModel.js"


export const listMessage = async (req, res) => {
    try {
        const response = await messageModel.find().sort({ createdAt: -1 }) // urut terbaru dulu
        res.status(200).json({
            message: "Daftar pesan berhasil diambil",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const createMessage = async (req, res) => {
    try{
        const request = req.body

        const response = await messageModel.create({
            message : request.message
        })

        res.status(201).json({
            message : "message berhasil di buat",
            data : response
        })

    }catch (error){
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const updateMessage = async (req, res) => {
    try {
        const { id } = req.params
        const { message } = req.body

        const response = await messageModel.findByIdAndUpdate(id,{ message },{ new: true })

        if (!response) {
            return res.status(404).json({
                message: "Message tidak ditemukan",
                data: null
            })
        }

        res.status(200).json({
            message: "Message berhasil diperbarui",
            data: response
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params

        const response = await messageModel.findByIdAndDelete(id)

        if (!response) {
            return res.status(404).json({
                message: "Message tidak ditemukan",
                data: null
            })
        }

        res.status(200).json({
            message: "Message berhasil dihapus",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

