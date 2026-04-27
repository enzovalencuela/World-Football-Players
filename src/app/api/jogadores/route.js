import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buscarJogadores } from "@/lib/jogadoresBusca";
import { buscarJogadoresDb } from "@/lib/dbBusca";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const q = (searchParams.get("q") || "").trim();
  const page = Number.parseInt(searchParams.get("page") || "1", 10);
  const limit = Number.parseInt(searchParams.get("limit") || "20", 10);
  const safePage = Number.isNaN(page) || page < 1 ? 1 : page;
  const safeLimit = Number.isNaN(limit) || limit < 1 ? 20 : limit;
  const offset = (safePage - 1) * safeLimit;

  if (mode === "suggestions") {
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

    return NextResponse.json({ items, hasMore: false });
  }

  if (!q) {
    const [jogadores, clubes, selecoes] = await Promise.all([
      prisma.player.findMany({
        orderBy: [{ nacionalidade: "asc" }, { nome: "asc" }],
        skip: offset,
        take: safeLimit + 1,
      }),
      prisma.club.findMany({
        orderBy: { nome: "asc" },
      }),
      prisma.selection.findMany({
        orderBy: { nome: "asc" },
      }),
    ]);

    const hasMore = jogadores.length > safeLimit;
    const items = buscarJogadores(
      jogadores.slice(0, safeLimit),
      clubes,
      selecoes,
      q,
      { mode }
    );

    return NextResponse.json({ items, hasMore });
  }

  const [jogadores, clubes, selecoes] = await Promise.all([
    buscarJogadoresDb(q, mode),
    prisma.club.findMany({
      orderBy: { nome: "asc" },
    }),
    prisma.selection.findMany({
      orderBy: { nome: "asc" },
    }),
  ]);

  const resultados = buscarJogadores(jogadores, clubes, selecoes, q, { mode });
  const items = resultados.slice(offset, offset + safeLimit);
  const hasMore = resultados.length > offset + safeLimit;

  return NextResponse.json({ items, hasMore });
}
