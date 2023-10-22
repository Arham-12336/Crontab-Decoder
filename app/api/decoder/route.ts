import { NextResponse } from "next/server";

export const GET = async () => {
  const data = "HELLO ARHAM";

  return NextResponse.json({ data: data });
};
