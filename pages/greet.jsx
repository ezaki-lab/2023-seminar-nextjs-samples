import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Branch() {
  const [greeting, setGreeting] = useState('こんにちは');

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 18) {
      setGreeting('こんばんは');
    } else if (hour >= 12) {
      setGreeting('こんにちは');
    } else {
      setGreeting('おはよう');
    }
  }, []);

  return (
    <>
      <Head>
        <title>挨拶するよ</title>
      </Head>

      <main>
        <h1>{greeting}</h1>
      </main>
    </>
  );
}
