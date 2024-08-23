import React from 'react'
import dynamic from 'next/dynamic';

const PortfolioDyn = dynamic(()=>import('../../components/Portfolio/index'),  {
  loading: () => <p className = "text-3xl text-center font-bold py-12 ">Loading...</p>,
});

function Page() {
  return (
    
    <div className='mt-32'>
     < PortfolioDyn/>
    </div>
  )
}

export default Page
