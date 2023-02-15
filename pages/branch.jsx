import Head from 'next/head';
import { useState } from 'react';

export default function Branch() {
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
        <h1>目標: ボタンを5回クリックする</h1>

        <button onClick={countClicked}>
          このボタンをクリックしてください！
        </button>

        <div>
          {count}回ボタンを押されました。
        </div>

        {count >= 5 ? (
          <div>
            おめでとう！
          </div>
        ) : (
          <div>
            まだまだ！
          </div>
        )}
      </main>
    </>
  );
}
