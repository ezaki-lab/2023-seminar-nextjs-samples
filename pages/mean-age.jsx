import { useEffect, useState } from 'react';

export default function MeanAge() {
  const [ready, setReady] = useState(false);
  const [meanAge, setMeanAge] = useState(0);

  const fetchMeanAge = async () => {
    const res = await fetch('/api/get-mean-age');
    const json = await res.json();

    setMeanAge(json.mean_age);
    setReady(true);
  };

  useEffect(() => {
    fetchMeanAge();
  }, []);

  return (
    <main>
      <h1>平均年齢</h1>

      {!ready ? (
        <div>計算中…</div>
      ) : (
        <div>
          <p>平均年齢は{meanAge}歳です。</p>
        </div>
      )}
    </main>
  );
}
