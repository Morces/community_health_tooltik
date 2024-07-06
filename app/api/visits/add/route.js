import {NextResponse} from "next/server"

export async function POST(request){
    try{

        const body = await request.json()

        const {} = body

    }catch(error){
        return NextResponse.json({error: error.message})
    }
}