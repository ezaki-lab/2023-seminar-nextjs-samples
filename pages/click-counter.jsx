import Head from 'next/head';
import { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  const countClicked = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Head>
        <title>クリックカウンター</title>
      </Head>

      <main>
        <button onClick={countClicked}>
          このボタンをクリックしてください！
        </button>

        <div>
          {count}回ボタンを押されました。
        </div>
      </main>
    </>
  );
}
