import { useState, useEffect } from 'react';

export default function Janken() {
  // -1: まだじゃんけんしていない
  //  0: グー (Rock)
  //  1: チョキ (Caesar)
  //  2: パー (Paper)
  const [playerHand, setPlayerHand] = useState(-1);
  const [cpuHandText, setCpuHandText] = useState('');

  const handlerRock = (e) => {
    setPlayerHand(0);
  };
  const handlerCaesar = (e) => {
    setPlayerHand(1);
  };
  const handlerPaper = (e) => {
    setPlayerHand(2);
  };

  useEffect(() => {
    switch (playerHand) {
      case 0:
        setCpuHandText('✋');
        break;
      case 1:
        setCpuHandText('✊');
        break;
      case 2:
        setCpuHandText('✌');
        break;
    }
  }, [playerHand]);

  return (
    <div>
      <h1>じゃんけん</h1>
      <section>
        最初はグー！じゃんけん？
        <div>
          <button onClick={handlerRock}>✊</button>
          <button onClick={handlerCaesar}>✌</button>
          <button onClick={handlerPaper}>✋</button>
        </div>
      </section>
      <section>
        ポン！
        {cpuHandText}
      </section>
    </div>
  );
}
