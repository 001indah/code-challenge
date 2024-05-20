'use client'
import React from 'react'
import CountUp from 'react-countup';

const DataFactNum1 = [
    {
        num: 36,
        satuan: " tahun",
        describe: "Pengalaman di dunia pendidikan"
    },
    {
        num: 1000,
        satuan: "+",
        describe: "Global Hiring Partners"
    },
    {
        num: 30000,
        satuan: "+",
        describe: "Alumni"
    },
];
const DataFactNum2 = [
    {
        num: 21,
        satuan: " juta/bulan",
        describe: "Gaji awal tertinggi alumni Purwadhika"
    },
    {
        num: 6,
        satuan: " kampus + online",
        describe: "Pilihan metode belajar terlengkap"
    },

];

const FactNum: React.FC = () => {
    return (
        <div className='m-4 mb-10 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[3fr,2fr]'>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-2 text-[14px] justify-center'>
                {DataFactNum1.map((item, index) => (
                    <div key={index} className=" items-center">
                        <p className='text-white text-2xl font-semibold my-4 text-center'><CountUp end={item.num} /><span >{item.satuan}</span></p>
                        <p className='text-white text-[12px] text-center'>{item.describe}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-[1fr,1fr] gap-2 text-[14px] justify-center'>
                {DataFactNum2.map((item, index) => (
                    <div key={index} className=" items-center">
                        <p className='text-white text-2xl font-semibold my-4 text-center'><CountUp end={item.num} /><span >{item.satuan}</span></p>
                        <p className='text-white text-[12px] text-center'>{item.describe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FactNum;
