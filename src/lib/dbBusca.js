import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

function criarLike(termo) {
  return `%${termo.toLowerCase()}%`;
}

function criarWhereSql(conditions) {
  if (conditions.length === 0) {
    return Prisma.empty;
  }

  return Prisma.sql`WHERE ${Prisma.join(conditions, " OR ")}`;
}

export async function buscarNomesPorTitulos(tableName, termo) {
  if (!termo) {
    return [];
  }

  const like = criarLike(termo);

  const rows = await prisma.$queryRaw(
    Prisma.sql`
      SELECT "nome"
      FROM ${Prisma.raw(`"${tableName}"`)}
      WHERE CAST("titulos" AS TEXT) ILIKE ${like}
      ORDER BY "nome" ASC
    `
  );

  return rows.map((row) => row.nome);
}

export async function buscarClubesDb(termo, mode = "search") {
  if (!termo) {
    return prisma.club.findMany({
      orderBy: { nome: "asc" },
    });
  }

  const like = criarLike(termo);
  const limit = mode === "suggestions" ? Prisma.sql`LIMIT 20` : Prisma.sql`LIMIT 250`;

  return prisma.$queryRaw(
    Prisma.sql`
      SELECT *
      FROM "clubs"
      ${criarWhereSql([
        Prisma.sql`LOWER("nome") LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("descricao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("fundacao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("localizacao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("curiosidades", '')) LIKE ${like}`,
        Prisma.sql`CAST("tags" AS TEXT) ILIKE ${like}`,
        Prisma.sql`CAST("titulos" AS TEXT) ILIKE ${like}`,
      ])}
      ORDER BY "nome" ASC
      ${limit}
    `
  );
}

export async function buscarSelecoesDb(termo, mode = "search") {
  if (!termo) {
    return prisma.selection.findMany({
      orderBy: { nome: "asc" },
    });
  }

  const like = criarLike(termo);
  const limit = mode === "suggestions" ? Prisma.sql`LIMIT 20` : Prisma.sql`LIMIT 120`;

  return prisma.$queryRaw(
    Prisma.sql`
      SELECT *
      FROM "selections"
      ${criarWhereSql([
        Prisma.sql`LOWER("nome") LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("descricao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("confederacao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("fundacao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("localizacao", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("mascote", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("cores", '')) LIKE ${like}`,
        Prisma.sql`LOWER(COALESCE("curiosidades", '')) LIKE ${like}`,
        Prisma.sql`CAST("tags" AS TEXT) ILIKE ${like}`,
        Prisma.sql`CAST("titulos" AS TEXT) ILIKE ${like}`,
      ])}
      ORDER BY "nome" ASC
      ${limit}
    `
  );
}

export async function buscarJogadoresDb(termo, mode = "search") {
  if (!termo) {
    return prisma.player.findMany({
      orderBy: [{ nacionalidade: "asc" }, { nome: "asc" }],
    });
  }

  const [clubesComTitulos, selecoesComTitulos] = await Promise.all([
    buscarNomesPorTitulos("clubs", termo),
    buscarNomesPorTitulos("selections", termo),
  ]);

  const like = criarLike(termo);
  const conditions = [
    Prisma.sql`LOWER("nome") LIKE ${like}`,
    Prisma.sql`LOWER("nomeCompleto") LIKE ${like}`,
    Prisma.sql`LOWER("nacionalidade") LIKE ${like}`,
    Prisma.sql`LOWER(COALESCE("posicao", '')) LIKE ${like}`,
    Prisma.sql`CAST("tags" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("clubes" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("selecao" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("titulosIndividuais" AS TEXT) ILIKE ${like}`,
  ];

  for (const nomeClube of clubesComTitulos) {
    conditions.push(Prisma.sql`CAST("clubes" AS TEXT) ILIKE ${`%${nomeClube}%`}`);
  }

  for (const nomeSelecao of selecoesComTitulos) {
    conditions.push(
      Prisma.sql`CAST("selecao" AS TEXT) ILIKE ${`%${nomeSelecao}%`}`
    );
  }

  const limit = mode === "suggestions" ? Prisma.sql`LIMIT 30` : Prisma.sql`LIMIT 500`;

  return prisma.$queryRaw(
    Prisma.sql`
      SELECT *
      FROM "players"
      ${criarWhereSql(conditions)}
      ORDER BY "nacionalidade" ASC, "nome" ASC
      ${limit}
    `
  );
}

export async function buscarTecnicosDb(termo, mode = "search") {
  if (!termo) {
    return prisma.coach.findMany({
      orderBy: [{ nacionalidade: "asc" }, { nome: "asc" }],
    });
  }

  const [clubesComTitulos] = await Promise.all([
    buscarNomesPorTitulos("clubs", termo),
  ]);

  const like = criarLike(termo);
  const conditions = [
    Prisma.sql`LOWER("nome") LIKE ${like}`,
    Prisma.sql`LOWER("nomeCompleto") LIKE ${like}`,
    Prisma.sql`LOWER("nacionalidade") LIKE ${like}`,
    Prisma.sql`LOWER(COALESCE("descricao", '')) LIKE ${like}`,
    Prisma.sql`LOWER(COALESCE("curiosidades", '')) LIKE ${like}`,
    Prisma.sql`LOWER(COALESCE("filosofia_de_jogo", '')) LIKE ${like}`,
    Prisma.sql`CAST("tags" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("influencias" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("clubes" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("esquemas_taticos" AS TEXT) ILIKE ${like}`,
    Prisma.sql`CAST("titulos" AS TEXT) ILIKE ${like}`,
  ];

  for (const nomeClube of clubesComTitulos) {
    conditions.push(Prisma.sql`CAST("clubes" AS TEXT) ILIKE ${`%${nomeClube}%`}`);
  }

  const limit = mode === "suggestions" ? Prisma.sql`LIMIT 30` : Prisma.sql`LIMIT 250`;

  return prisma.$queryRaw(
    Prisma.sql`
      SELECT *
      FROM "coaches"
      ${criarWhereSql(conditions)}
      ORDER BY "nacionalidade" ASC, "nome" ASC
      ${limit}
    `
  );
}
