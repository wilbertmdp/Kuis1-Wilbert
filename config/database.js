import mongoose from "mongoose"

const database = async () => {
    try{
        console.log("melakukan koneksi ke mongodb")

        const response = await mongoose.connect("mongodb://127.0.0.1:27017/anonimMessage?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

        console.log(`koneksi ke mongodb berhasil host : ${response.connection.host}`)
        
    }catch{
        console.error("gagal terkoneksi dengan mongodb");
        process.exit(1)
    }
}

export default database