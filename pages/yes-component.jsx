import Head from 'next/head';

export default function YesComponent() {
  return (
    <>
      <Head>
        <title>コンポーネントあり</title>
      </Head>

      <main>
        <Content1 />
        <Content2 />
        <Content3 />
      </main>
    </>
  );
}

function Content1() {
  return (
    <div className="container-row">
      <div className="border-box">
        <p>
          フロントエンドとは、ブラウザ上で動作する部分のことです。
        </p>
        <p>
          ブラウザに表示されるページは、Webサーバーから受け取った<br />
          HTMLやスクリプト（プログラム）などを元に、描画されます。
        </p>
        <img src="/dog.png" alt="犬" className="width-10rem" />
      </div>

      <div className="border-box">
        <p>
          バックエンド（サーバーサイド）とは、サーバー上で動作する部分のことです。
        </p>
        <p>
          クライアントからの要求を処理し、要求に沿ったデータを返します。
        </p>
        <img src="/cat.png" alt="猫" className="width-10rem" />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="container-row">
      <div className="border-box">
        <p>
          フロントエンドとは、ブラウザ上で動作する部分のことです。
        </p>
        <p>
          ブラウザに表示されるページは、Webサーバーから受け取った<br />
          HTMLやスクリプト（プログラム）などを元に、描画されます。
        </p>
        <img src="/dog.png" alt="犬" className="width-10rem" />
      </div>

      <div className="border-box">
        <p>
          バックエンド（サーバーサイド）とは、サーバー上で動作する部分のことです。
        </p>
        <p>
          クライアントからの要求を処理し、要求に沿ったデータを返します。
        </p>
        <img src="/cat.png" alt="猫" className="width-10rem" />
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="container-row">
      <div className="border-box">
        <p>
          フロントエンドとは、ブラウザ上で動作する部分のことです。
        </p>
        <p>
          ブラウザに表示されるページは、Webサーバーから受け取った<br />
          HTMLやスクリプト（プログラム）などを元に、描画されます。
        </p>
        <img src="/dog.png" alt="犬" className="width-10rem" />
      </div>

      <div className="border-box">
        <p>
          バックエンド（サーバーサイド）とは、サーバー上で動作する部分のことです。
        </p>
        <p>
          クライアントからの要求を処理し、要求に沿ったデータを返します。
        </p>
        <img src="/cat.png" alt="猫" className="width-10rem" />
      </div>
    </div>
  );
}
