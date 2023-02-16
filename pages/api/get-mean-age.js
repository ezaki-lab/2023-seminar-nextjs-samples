import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // データベースに接続
  const prisma = new PrismaClient();

  // プロフィールテーブルをすべて取得
  const results = await prisma.profiles.findMany();

  // 年齢の合計を計算
  let sum = 0;
  for (let i = 0; i < results.length; i++) {
    sum += results[i].age;
  }

  const meanAge = sum / results.length;

  res.status(200).json({
    'mean_age': meanAge
  });
}
