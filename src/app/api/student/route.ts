import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Student from "@/models/studentModel";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { fullName, email, phone, course } = body;

    if (!fullName || !email || !phone || !course) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const newStudent = await Student.create({ fullName, email, phone, course });
    return NextResponse.json({ message: "Student registered successfully", student: newStudent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error registering student" }, { status: 500 });
  }
}
