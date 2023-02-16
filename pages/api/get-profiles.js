import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // データベースに接続
  const prisma = new PrismaClient();

  // プロフィールテーブルをすべて取得
  const results = await prisma.profiles.findMany();

  // テーブルの中身をクライアントに返す
  res.status(200).json(results);
}
