import Head from 'next/head';

export default function NoComponent() {
  return (
    <>
      <Head>
        <title>コンポーネントなし</title>
      </Head>

      <main>
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
      </main>
    </>
  );
}
