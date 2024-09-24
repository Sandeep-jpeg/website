import React from 'react'

const Industries = () => {
  return (
    <div className='bg-[#252525] w-[1440px] h-[900px] top-[1326px] gap-0'>
        <div className='w-[781px] h-[125px] relative top-[130px] left-[60px] gap-0'>

        <span className='text-white Oswald text-[100px] font-thin leading-[125px] text-left'>Industried</span>
        <span className='text-white Oswald text-[100px] font-thin leading-[125px] text-left'> </span>
        <span className='text-white Oswald text-[100px] font-[200px] leading-[125px] text-left'>Covered</span>

    </div>
    <div className='bg-[#777778] w-[471px] h-[450px] absolute top-[305px] left-[60px] rounded-[20px]'>
       <div >
         <div className='Inter w-[219px] h-[29px] text-[24px] font-semibold leading-[28.8px] text-left text-white'>
            Fintech
           
        </div>
        <div className='w-[273px] h-[184px] gap-4'>
            <ul className='list-disc pl-5 '>
                <li className='inter text-[16px] font-medium leading-[24px] text-left text-white'>lorem</li>
                <li className='inter text-[16px] font-medium leading-[24px] text-left text-white'>lorem</li>
                <li className='inter text-[16px] font-medium leading-[24px] text-left text-white'>lorem</li>
            </ul>
        </div>
       </div>
        <div>
            button
        </div>
    </div>
        </div>
  )
}

export default Industries