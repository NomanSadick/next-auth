import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();
        console.log("Received data:", name, email, password);

        return NextResponse.json({ message: "User has been created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
