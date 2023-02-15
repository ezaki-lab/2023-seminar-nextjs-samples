import Head from 'next/head';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>ギャラリー</title>
      </Head>

      <main>
        桜が咲いていました！

        <img src="/sakura.jpg" alt="桜" />
      </main>
    </>
  );
}
