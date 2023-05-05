import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray  = [
        {id: 1, name: "Alice Wall", math: 78, physics: 89, chemistry: 92},
        {id: 2, name: "Bob Wall", math: 65, physics: 77, chemistry: 85},
        {id: 3, name: "Charlie Wall", math: 90, physics: 91, chemistry: 82},
        {id: 4, name: "David Wall", math: 50, physics: 55, chemistry: 70},
        {id: 5, name: "Emily Wall", math: 85, physics: 82, chemistry: 76},
        {id: 6, name: "Frank Wall", math: 72, physics: 64, chemistry: 87},
        {id: 7, name: "Grace Wall", math: 96, physics: 98, chemistry: 99},
        {id: 8, name: "Henry Wall", math: 81, physics: 74, chemistry: 88},
        {id: 9, name: "Isaac Wall", math: 71, physics: 80, chemistry: 77},
        {id: 10, name: "Jack Wall", math: 67, physics: 69, chemistry: 73},
        {id: 11, name: "Kelly Wall", math: 93, physics: 94, chemistry: 91},
        {id: 12, name: "Lisa Wall", math: 76, physics: 72, chemistry: 80}
      ];
      
    return (
        <div className='mt-4'>
            <LineChart
            width={1000}
            height={300}
            data={marksArray}
            >
                <Line dataKey='physics'></Line>
                <Line dataKey='math' stroke='red'></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;