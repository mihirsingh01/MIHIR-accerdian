import { NextResponse } from "next/server";
import { z } from "zod";
import connectToDatabase from "@/lib/db";
import Lead from "@/models/Lead";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    // Connect to the database
    await connectToDatabase();

    // Save the lead to MongoDB
    const newLead = await Lead.create(validatedData);

    console.log("New Lead Saved to MongoDB:", newLead);

    return NextResponse.json(
      { message: "Lead captured successfully", data: newLead },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }
    
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
