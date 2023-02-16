// 郵便番号API: http://zipcloud.ibsnet.co.jp/doc/api

import Head from 'next/head';
import { useState } from 'react';

export default function ZipCode() {
  const [zipCodeTop, setZipCodeTop] = useState('');
  const [zipCodeBottom, setZipCodeBottom] = useState('');

  const [address, setAddress] = useState('');

  const changeZipCodeTop = (e) => {
    setZipCodeTop(e.target.value);
  };

  const changeZipCodeBottom = (e) => {
    setZipCodeBottom(e.target.value);
  };

  // 郵便番号APIを使用して住所を取得
  const getAddress = async () => {
    const res = await fetch(
      'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' +
      zipCodeTop +
      zipCodeBottom
    );

    const json = await res.json();

    setAddress(json.results[0].address1 + json.results[0].address2 + json.results[0].address3);
  };

  return (
    <>
      <Head>
        <title>郵便番号</title>
      </Head>

      <main>
        <h1>郵便番号を入力してください</h1>
        〒
        <input
          type="text"
          value={zipCodeTop}
          onChange={changeZipCodeTop}
          maxLength="3"
        />
        -
        <input
          type="text"
          value={zipCodeBottom}
          onChange={changeZipCodeBottom}
          maxLength="4"
        />

        <button onClick={getAddress}>
          住所を取得
        </button>

        <p>{address}</p>
      </main>
    </>
  );
}
