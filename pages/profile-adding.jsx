import { useState } from 'react';

export default function AddUser() {
  const [username, setUsername] = useState('名無しさん');
  const [age, setAge] = useState(16);
  const [result, setResult] = useState('');

  const changeUserName = (e) => {
    setUsername(e.target.value);
  };

  const changeAge = (e) => {
    setAge(Number(e.target.value));
  };

  // サーバーにデータを送信
  const sendServer = async () => {
    // リクエスト内容(JSON)を送信
    const res = await fetch('/api/add-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        age: age
      })
    });

    // レスポンス内容(JSON)を取得
    const json = await res.json();
    setResult(json.result);
  };

  return (
    <main>
      <h1>プロフィールの追加</h1>

      <div>
        <input
          type="text"
          value={username}
          onChange={changeUserName}
        />
        <input
          type="text"
          value={age}
          onChange={changeAge}
        />
        <button onClick={sendServer}>
          追加
        </button>
      </div>

      {result}
    </main>
  );
}
