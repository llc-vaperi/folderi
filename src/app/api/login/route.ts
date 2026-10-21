import { connectToMongoDB } from "../homepage/db"
import { user } from "@/lib/scheme"

export async function POST(req: Request) {
    await connectToMongoDB()

    const { name1, password } = await req.json()

    console.log(name1)
    console.log(password)

    const all = await user.find()
    const found = all.find((user) => user.name === name1)

    if (found) {
        const passwordCheck = found.password === password
        
        return passwordCheck ? Response.json({
            message: "success"
        }) : Response.json({
            message: "password error"
        })
    }


    console.log(all)

    return Response.json({
        message: "user not found"
    }
    )
}