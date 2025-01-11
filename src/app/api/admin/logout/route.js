// /app/api/logout/route.js

import { NextResponse } from "next/server";

export async function POST() {
  // Clear the token cookie
  const cookieString = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

  return NextResponse.json(
    { status: true, message: "Logout successful" },
    { headers: { "Set-Cookie": cookieString } }
  );
}
