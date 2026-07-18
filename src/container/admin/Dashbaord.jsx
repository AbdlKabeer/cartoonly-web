import React from 'react'
import BreakDownCard from '../../components/admin/BreakDownCard'
import { motion } from 'framer-motion'
import { LuUsers2} from "react-icons/lu";
import { MdOutlineSell } from "react-icons/md";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  


export default function Dashbaord(props) {
    

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <BreakDownCard Icon={MdOutlineSell}  cardText="Total Purchase" cardCount="35,568"  cardPercent="0.43"/>
                <BreakDownCard Icon={MdOutlineSell}  cardText="Total Protrait" cardCount="3.456K"  cardPercent="0.43"/>
                <BreakDownCard Icon={LuUsers2}  cardText="Total Users" cardCount="3,456"  cardPercent="0.43"/>
                <BreakDownCard Icon={LuUsers2}  cardText="Total Subcsribe Users" cardCount="3,256"  cardPercent="0.43"/>
                
                

            </div>

          
            <div>
                <h4 className="text-xl font-bold text-black py-4 pt-8">
                Weekly Sales
                </h4>
                <div className="mt-4 w-full overflow-scroll ">
                                            
                    <LineChart width={730} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
            
            
                </div>
            </div>
           
        </>
    )
}




