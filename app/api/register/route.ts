import { NextResponse } from "next/server";


import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";
import { createUser } from "@/queries/users";


export const POST = async (request) => {
    const { name, email, password } = await request.json();
    console.log(name, email, password);
  
    try {
      // Create a DB Connection
      await dbConnect();
      console.log("DB connection successful");
  
      // Encrypt the password
      const hashedPassword = await bcrypt.hash(password, 5);
  
      // Form a DB payload
      const newUser = {
        name,
        password: hashedPassword,
        email
      };
  
      // Update the DB
      try {
        await createUser(newUser);
        console.log("User created successfully");
      } catch (err) {
        console.error("Error while creating user:", err);
        return new NextResponse("Error while creating user", { status: 500 });
      }
  
      return new NextResponse("User has been created", { status: 201 });
    } catch (error) {
      console.error("Database connection error:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  };
  