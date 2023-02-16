import { useState } from 'react';
import { PrismaClient } from '@prisma/client';

export async function getServerSideProps() {
  // データベースに接続
  const prisma = new PrismaClient();

  // プロフィールテーブルをすべて取得
  const result = await prisma.profiles.findMany();

  return {
    props: {
      name: result[0].name
    }
  };
}

export default function Profiles() {
  const [ready, setReady] = useState(false);
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const res = await fetch('/api/get-profiles');

    const json = await res.json();

    setProfiles(json);
    setReady(true);
  };

  return (
    <main>
      {!ready ? (
        <button onClick={fetchProfiles}>プロフィールを取得</button>
      ) : (
        <div>
          {profiles.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.memo}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
