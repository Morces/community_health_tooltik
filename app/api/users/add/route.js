import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { hash } from "bcrypt";
import sendMail from "../../_components/util/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, password, role_id, bio, specialization, phone } = body;

    if (!name || !email || !password || !role_id) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.members.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User With this email Already Exists",
        },
        { status: 400 }
      );
    }

    const role = await prisma.roles.findUnique({
      where: { id: parseInt(role_id) },
    });

    if (!role) {
      return NextResponse.json({ message: "Role not found" }, { status: 400 });
    }

    const hashPass = await hash(password, 10);

    const newUser = await prisma.members.create({
      data: {
        name,
        email,
        bio,
        specialization,
        role_id: parseInt(role_id),
        password: hashPass,
        phone,
      },
    });

    let mailOptions = {
      from: "mwkazungu@gmail.com",
      to: "karanim594@example.com",
      subject: "Test Email from Nodemailer and Gmail",
      text: "Hello from Nodemailer using Gmail!",
    };

    sendMail(mailOptions);

    const userResponse = {
      ...newUser,
      password: "",
      id: newUser.id.toString(),
      role_id: newUser.role_id.toString(),
    };

    return NextResponse.json(
      { user: userResponse },
      { message: "User Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "somethig went wrong" }, { status: 500 });
  }
}
