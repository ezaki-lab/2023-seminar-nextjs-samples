import Head from 'next/head';
import { useState } from 'react';

export default function Branch() {
  const [name, setName] = useState('');
  const [favorite, setFavorite] = useState('');
  const [grade, setGrade] = useState(1);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeFavorite = (e) => {
    setFavorite(e.target.value);
  };

  const changeGrade = (e) => {
    setGrade(Number(e.target.value));
  };

  const submit = (e) => {
    e.preventDefault();
    alert(`名前: ${name}、好きなもの: ${favorite}、学年: ${grade}`);
  };

  return (
    <>
      <Head>
        <title>フォーム</title>
      </Head>

      <main>
        <h1>名前</h1>
        <input
          id="name"
          type="text"
          value={name}
          onChange={changeName}
        />

        <h1>好きなもの</h1>
        <input
          id="favorite"
          type="text"
          value={favorite}
          onChange={changeFavorite}
        />

        <h1>4月からの学年</h1>
        <input
          id="grade"
          type="text"
          value={grade}
          onChange={changeGrade}
        />

        <button onClick={submit}>
          送信
        </button>
      </main>
    </>
  );
}
