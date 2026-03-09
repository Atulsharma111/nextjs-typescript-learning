import { NextRequest, NextResponse } from "next/server";

//NextRequest  NextResponse
export async function GET(){
return NextResponse.json({
    name:"ayush",
    age:21
})
}


export async function POST(request:NextRequest) {
    let {name,age}=await request.json()
    return NextResponse.json({
        name,age
    })
}