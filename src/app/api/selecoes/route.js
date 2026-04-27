import { NextResponse } from "next/server";
import { buscarCatalogo } from "@/lib/catalogoBusca";
import { buscarSelecoesDb } from "@/lib/dbBusca";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const q = (searchParams.get("q") || "").trim();

  const selecoes = await buscarSelecoesDb(q, mode);

  const items = buscarCatalogo(
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

  return NextResponse.json({ items });
}
