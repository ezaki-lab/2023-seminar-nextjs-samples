import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  // リクエスト内容(JSON)を取得
  const json = req.body;

  // データベースに接続
  const prisma = new PrismaClient();

  // プロフィールテーブルにデータを追加
  await prisma.profiles.create({
    data: {
      name: json.name,
      age: json.age,
      memo: 'Reactから入れました'
    },
  });

  res.status(200).json({
    'result': '成功'
  });
}
