import { NextResponse } from "next/server";
import { buscarCatalogo } from "@/lib/catalogoBusca";
import { buscarSelecoesDb } from "@/lib/dbBusca";

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

  const selecoes = await buscarSelecoesDb(q, mode);
  const resultados = buscarCatalogo(
    selecoes,
    q,
    [
      "nome",
      "descricao",
      "confederacao",
      "fundacao",
      "localizacao",
      "mascote",
      "cores",
      "curiosidades",
    ],
    { mode }
  );
  const items =
    mode === "suggestions"
      ? resultados
      : resultados.slice(offset, offset + safeLimit);
  const hasMore =
    mode === "suggestions" ? false : resultados.length > offset + safeLimit;

  return NextResponse.json({ items, hasMore });
}
