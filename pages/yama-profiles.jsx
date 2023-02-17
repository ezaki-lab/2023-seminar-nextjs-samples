import { useEffect, useState } from 'react';

export default function Profiles() {
  const [ready, setReady] = useState(false);
  const [profiles, setProfiles] = useState([]);

  const fetchYamaProfiles = async () => {
    const res = await fetch('/api/get-yama-profiles');
    const json = await res.json();

    setProfiles(json);
    setReady(true);
  };

  useEffect(() => {
    fetchYamaProfiles();
  }, []);

  return (
    <main>
      {!ready ? (
        <div>取得中…</div>
      ) : (
        <div>
          {profiles.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.memo}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
