import React from 'react';

import {
    BarChart,ResponsiveContainer,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 500,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 500,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 80,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 100,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 400,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 190,
      pv: 3800,
      amt: 2500
    },
    
    {
      name: "Page G",
      uv: 290,
      pv: 4300,
      amt: 2100
    },
    {
      name: "Page C",
      uv: 500,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 500,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 80,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page C",
      uv: 500,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 500,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 80,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page C",
      uv: 500,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 500,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 80,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page C",
      uv: 500,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 5000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 80,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page C",
      uv: 5000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 8900,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 6900,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 5000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 1000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 3000,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page C",
      uv: 5000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 580,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 990,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 890,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 790,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page F",
      uv: 6690,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page B",
      uv: 5000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 100,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 3080,
      pv: 3908,
      amt: 2000
    },
  ];
  
function QuoteVolumeBarChart(){
  
    return (
        <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
                <BarChart data={data}
                barSize={5}
                >
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="2 2" />
                    <Bar dataKey="uv" fill="#88642a" />
                </BarChart>
            </ResponsiveContainer>
        </div>

      );
}
export default QuoteVolumeBarChart;