import { NextResponse } from "next/server";
import { buscarCatalogo } from "@/lib/catalogoBusca";
import { buscarClubesDb } from "@/lib/dbBusca";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode") || "search";
  const q = (searchParams.get("q") || "").trim();

  const clubes = await buscarClubesDb(q, mode);

  const items = buscarCatalogo(
    clubes,
    q,
    ["nome", "descricao", "fundacao", "localizacao", "curiosidades"],
    { mode }
  );

  return NextResponse.json({ items });
}
