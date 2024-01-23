import { connectDB } from "@/util/database";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  console.log(username, password);

  const db = (await connectDB).db("test");
  const user = db
    .collection("users")
    .findOne({ username: username, password: password });
  console.log(user);

  if (!user) {
    return NextResponse.json({ message: "유저가 없음" }, { status: 401 });
  }

  return NextResponse.json({ message: "로그인 요청" }, { status: 200 });
}
