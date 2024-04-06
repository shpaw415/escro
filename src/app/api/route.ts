import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "node:fs";
export async function POST(request: Request) {
  const data = (await request.json()) as {
    info: string;
  };
  const filepath = process.cwd() + "/public/info.json";
  let currentJson = JSON.parse(readFileSync(filepath).toString()) as Array<any>;

  const recData = JSON.parse(decodeURI(atob(data.info)));

  const toSaveData = {
    headers: Array.from(request.headers.entries()),
    client: recData,
  };

  writeFileSync(filepath, JSON.stringify([...currentJson, toSaveData]));

  return new NextResponse("thanks for that");
}
