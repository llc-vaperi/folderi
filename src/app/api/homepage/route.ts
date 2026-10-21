import { connectToMongoDB } from "./db"
import { user } from "@/lib/scheme"


export async function GET() {

    return Response.json({
        message: "success"
    })


}
export async function POST(req: Request) {
    await connectToMongoDB()
    const { name1, password } = await req.json()
    console.log(name1)
    console.log(password)


    const person = await user.create({ name: name1, password: password })
    await person.save()



    return Response.json({
        message: "post success",
    })
}