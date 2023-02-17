import Head from 'next/head';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TempGraph() {
  const temps = [
    {
      date: '2023-02-10',
      temp: 10.2,
    },
    {
      date: '2023-02-11',
      temp: 12.2,
    },
    {
      date: '2023-02-12',
      temp: 9.7,
    },
    {
      date: '2023-02-13',
      temp: 5.2,
    },
    {
      date: '2023-02-14',
      temp: 6.1,
    }
  ];

  return (
    <>
      <Head>
        <title>平均気温のグラフ</title>
      </Head>

      <main>
        <h1>
          平均気温のグラフ
        </h1>

        <LineChart
          width={500}
          height={300}
          data={temps}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </main>
    </>
  );
}
