import Head from 'next/head';

export default function Profile() {
  return (
    <>
      <Head>
        <title>プロフィール</title>
      </Head>

      <main>
        <h1>
          濱口 宝
        </h1>

        <div>
          <p>
            こんにちは！
          </p>
          <p>
            4月から5年生になります。
          </p>
        </div>

        <div>
          <h2>趣味</h2>
          音楽を聴くことが好きです！
        </div>

        <div>
          <h2>好きなもの</h2>
          ハンバーガーが好きです！
        </div>

        <div>
          <h2>好きな教科</h2>
          プログラミングが好きです！
        </div>
      </main>
    </>
  );
}
