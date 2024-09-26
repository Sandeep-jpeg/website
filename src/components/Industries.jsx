import React from 'react'

const Industries = () => {
  return (
    <div>
      <section className='bg-[#18181A] w-full h-[900px]'>
        <div className='w-[781px] h-[125px] relative top-[130px] left-[60px] gap-0'>

        <span className='text-[#777778] Oswald text-[100px] font-thin leading-[125px] text-left'>INDUSTRIES</span>
        <span className='text-white Oswald text-[100px] font-thin leading-[125px] text-left'> </span>
        <span className='text-white Oswald text-[100px] font-[200px] leading-[125px] text-left'>COVERED</span>

    </div>
    <div className="w-full h-[700px] overflow-x-auto overflow-y-hidden">
  <div className="flex space-x-4 w-max px-4">
    {/* Repeat this card 10 times */}
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="bg-[#242426] w-[471px] h-[450px] relative top-[200px] px-2 rounded-[20px]">
        <div className="p-[20px]">
          <h2 className="Inter text-white text-2xl font-semibold leading-7 text-left p-[20px] mb-6">
            Fintech & Financial
          </h2>
          <ul className="space-y-3 mb-6 px-[20px]">
            <li className="list-disc ml-4 Inter text-white w-[245px] h-[24px] text-[16px] font-medium leading-[24px] text-left">
              Wallet and Banking Applications
            </li>
            <li className="list-disc ml-4 Inter text-white w-[245px] h-[24px] text-[16px] font-medium leading-[24px] text-left">
              Wallet and Banking Applications
            </li>
            <li className="list-disc ml-4 Inter text-white w-[245px] h-[24px] text-[16px] font-medium leading-[24px] text-left">
              Wallet and Banking Applications
            </li>
            <li className="list-disc ml-4 Inter text-white w-[245px] h-[24px] text-[16px] font-medium leading-[24px] text-left">
              Wallet and Banking Applications
            </li>
          </ul>
          <button className="text-sm text-gray-400 bg-gray-900 rounded-md px-4 py-2 mt-4 float-left hover:bg-blue-100">
            OUR WORKS
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
        </div>
  )
}

export default Industries