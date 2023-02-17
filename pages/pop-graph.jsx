import Head from 'next/head';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function PopGraph() {
  const pops = [
    {
      date: '2018',
      pop: 1000,
    },
    {
      date: '2019',
      pop: 1050,
    },
    {
      date: '2020',
      pop: 1080,
    },
    {
      date: '2021',
      pop: 1090,
    },
    {
      date: '2022',
      pop: 1000,
    }
  ];

  return (
    <>
      <Head>
        <title>人口のグラフ</title>
      </Head>

      <main>
        <h1>
          人口のグラフ
        </h1>

        <BarChart
          width={500}
          height={300}
          data={pops}
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
          <Bar dataKey="pop" fill="red" />
        </BarChart>
      </main>
    </>
  );
}
