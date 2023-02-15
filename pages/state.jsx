import Head from 'next/head';
import { useState } from 'react';

export default function ClickCounter() {
  const [name, setName] = useState('たから');

  return (
    <>
      <Head>
        <title>私の名前</title>
      </Head>

      <main>
        私の名前は {name} です。
      </main>
    </>
  );
}
