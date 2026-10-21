import { Schema, model } from "mongoose"

const userScheme = new Schema({

    name: { type: String, required: true },
    password: { type: String, required: true }

},
    {
        timestamps: true
    }
)

export const user = model("newUser", userScheme)