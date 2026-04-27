import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buscarJogadores } from "@/lib/jogadoresBusca";
import { buscarJogadoresDb } from "@/lib/dbBusca";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const q = (searchParams.get("q") || "").trim();

  const [jogadores, clubes, selecoes] = await Promise.all([
    buscarJogadoresDb(q, mode),
    prisma.club.findMany({
      orderBy: { nome: "asc" },
    }),
    prisma.selection.findMany({
      orderBy: { nome: "asc" },
    }),
  ]);

  const items = buscarJogadores(jogadores, clubes, selecoes, q, { mode });

  return NextResponse.json({ items });
}
