import { PieChart, Pie, Tooltip, Legend } from 'recharts'
const data = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];
const PieLine = () => {
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}

export default PieLine