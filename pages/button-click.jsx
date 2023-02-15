import Head from 'next/head';

export default function ButtonClick() {
  const sendMessage = () => {
    console.log('こんにちは！');
  };

  return (
    <>
      <Head>
        <title>ボタンサイト</title>
      </Head>

      <main>
        <button onClick={sendMessage}>
          このボタンをクリックしてください！
        </button>
      </main>
    </>
  );
}
