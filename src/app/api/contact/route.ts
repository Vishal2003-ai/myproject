import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contactModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Please fill all required fields" }, { status: 400 });
    }

    await Contact.create({ name, email, phone, message });

    return NextResponse.json({ message: "Thank you for contacting us!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error, please try again later." }, { status: 500 });
  }
}

