import mongoose from "mongoose";


( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}`)
    }catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
    }
)
