// 天気予報API: https://weather.tsukumijima.net/

import Head from 'next/head';

// サーバー側で天気情報を取得
export async function getServerSideProps() {
  // 津の都市ID
  const cityId = '240010';

  const res = await fetch(
    'https://weather.tsukumijima.net/api/forecast/city/'+cityId,
    { cache: 'no-store' }
  );

  return {
    props: {
      info: await res.json()
    }
  };
}

export default function Weather({ info }) {
  return (
    <>
      <Head>
        <title>天気予報</title>
      </Head>

      <main>
        <h1>津市の天気予報</h1>

        <h2>{info.forecasts[0].date}</h2>
        {info.forecasts[0].telop}

        <h2>{info.forecasts[1].date}</h2>
        {info.forecasts[1].telop}
      </main>
    </>
  );
}
