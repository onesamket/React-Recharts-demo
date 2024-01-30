import React from 'react';
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, Bar, Rectangle } from 'recharts';

const data = [
    {
        name: 'Harar ',
        male: 4000,
        female: 2400,
        amt: 2400,
    },
    {
        name: 'Diredawa ',
        male: 3000,
        female: 1398,
        amt: 2210,
    },
    {
        name: 'Axum ',
        male: 2000,
        female: 9800,
        amt: 2290,
    },
    {
        name: 'Bahirdar ',
        male: 2780,
        female: 3908,
        amt: 2000,
    },
    {
        name: 'Haramaya ',
        male: 1890,
        female: 4800,
        amt: 2181,
    },
    {
        name: 'Gondar ',
        male: 2390,
        female: 3800,
        amt: 2500,
    },
    {
        name: 'Hawassa ',
        male: 3490,
        female: 4300,
        amt: 2100,
    },
];

const ChartLine = () => {
    const handleBarClick = (entry) => {
        alert(entry);
    };

    return (
        <BarChart
            className='w-full'
            width={1024}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="7 7" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
                dataKey="female"
                fill="#8884d8"
                activeBar={<Rectangle
                    onClick={() => handleBarClick('datakey')}
                    fill="pink" stroke="blue" />}
            />

            <Bar
                dataKey="male"
                fill="#82ca9d"
                activeBar={<Rectangle
                    onClick={() => handleBarClick('name')}
                    fill="gold" stroke="purple" />}
            />
        </BarChart>
    );
};

export default ChartLine;
