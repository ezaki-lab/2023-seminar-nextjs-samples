import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // データベースに接続
  const prisma = new PrismaClient();

  // 名前に「山」を含んでいる人の、プロフィールテーブルをすべて取得
  const results = await prisma.profiles.findMany({
    where: {
      name: {
        contains: '山'
      }
    }
  });

  // テーブルの中身をクライアントに返す
  res.status(200).json(results);
}
