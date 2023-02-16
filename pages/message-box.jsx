import Head from 'next/head';

export default function MessageBox() {
  const messages = [
    'こんにちは！',
    'こんばんは！',
    'おはようございます！'
  ];

  return (
    <>
      <Head>
        <title>メッセージボックス</title>
      </Head>

      <main>
        {messages.map((item) => (
          <Box
            message={item}
            key={item}
          />
        ))}
      </main>
    </>
  );
}

function Box({ message }) {
  return (
    <div className="border-box">
      <h2>メッセージ</h2>

      <p>
        {message}
      </p>

      以上
    </div>
  );
}
