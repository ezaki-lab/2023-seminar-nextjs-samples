import Head from 'next/head';

export default function Component() {
  return (
    <>
      <Head>
        <title>コンポーネント</title>
      </Head>

      <main>
        <DogBox />
        <DogBox />
        <DogBox />
      </main>
    </>
  );
}

function DogBox() {
  return (
    <div>
      <img src="/dog.png" alt="犬" className="width-10rem" />
      <p>犬最高！</p>
    </div>
  );
}
