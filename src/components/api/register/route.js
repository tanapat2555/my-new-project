import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {email,password } = await req.json ();

        console.log("Email: ", email);
        console.log("Password ", password);

        return NextResponse.json({ messeage: "User registered."}, { status: 201});

    } catch(error) {
        return NextResponse.json ({ messeage: "An error occured while registrating the user."}, {status:500});
    }
}