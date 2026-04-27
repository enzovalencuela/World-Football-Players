import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buscarTecnicosDb } from "@/lib/dbBusca";
import { buscarTecnicos } from "@/lib/tecnicosBusca";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const q = (searchParams.get("q") || "").trim();

  const [tecnicos, clubes] = await Promise.all([
    buscarTecnicosDb(q, mode),
    prisma.club.findMany({
      orderBy: { nome: "asc" },
    }),
  ]);

  const items = buscarTecnicos(tecnicos, clubes, q, { mode });

  return NextResponse.json({ items });
}
