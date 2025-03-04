import { NextResponse } from "next/server";
import prisma from "@/lib/database";

export async function POST(req: Request) {
  try {
    const { origin, destination, waypoints, departureTime, mode } = await req.json();

    const prediction = "Estimated time: 30 minutes";

    const newRequest = await prisma.routeRequest.create({
      data: {
        origin,
        destination,
        waypoints,
        departureTime: new Date(departureTime),
        mode,
        prediction,
      },
    });

    return NextResponse.json({ success: true, data: newRequest });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
